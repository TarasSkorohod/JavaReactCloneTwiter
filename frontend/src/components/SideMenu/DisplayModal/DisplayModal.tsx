import {FC, ReactElement, useEffect, useState} from "react";
import {DisplayProps} from "../../../pages/Settings/AccessibilityDisplayLanguages/Display/Display";
import {BackgroundTheme, ColorScheme} from "../../../types/common";
import {useDispatch} from "react-redux";
import {useDisplayModalStyles} from "./DisplayModalStyles";
import {Dialog, Typography} from "@material-ui/core";
import {BACKGROUND, COLOR} from "../../../constants/common-constants";
import {CheckIcon} from "../../../icons";
import {updateBackgroundColor, updateColorScheme} from "../../../store/ducks/user/actionCreators";

interface DisplayModalProps {
    visible?: boolean;
    onClose: () => void;
}

const DisplayModal: FC<DisplayModalProps & DisplayProps> = (
    {
        visible,
        onClose,
        changeBackgroundColor,
        changeColorScheme
    }
): ReactElement | null => {
    const classes = useDisplayModalStyles();
    const dispatch = useDispatch();
    const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<BackgroundTheme>(BackgroundTheme.DEFAULT);
    const [selectedColor, setSelectedColor] = useState<ColorScheme>(ColorScheme.BLUE);

    useEffect(() => {
        if (visible) {
            const background = localStorage.getItem(BACKGROUND);
            const color = localStorage.getItem(COLOR);
            setSelectedBackgroundColor((background !== null) ? background as BackgroundTheme : BackgroundTheme.DEFAULT);
            setSelectedColor((color !== null) ? color as ColorScheme : ColorScheme.BLUE);
        }
    }, [visible]);
    const handleChangeBackgroundColor = (event: React.ChangeEvent<HTMLInputElement>): void => {
        processBackgroundColor(event.target.value as BackgroundTheme);
    };

    const onClickBackgroundColor = (background: BackgroundTheme): void => {
        processBackgroundColor(background);
    };

    const processBackgroundColor = (background: BackgroundTheme): void => {
        dispatch(updateBackgroundColor({ backgroundColor: background }));
        setSelectedBackgroundColor(background);
        changeBackgroundColor(background);
    };

    const onClickColor = (color: ColorScheme): void => {
        dispatch(updateColorScheme({ colorScheme: color }));
        setSelectedColor(color);
        changeColorScheme(color);
    };

    const ColorSelector: FC<{ color: ColorScheme }> = ({ color }): JSX.Element => {
        return (
            <div
                id={color.toLowerCase()}
                className={classes.colorItem}
                onClick={() => onClickColor(color)}
            >
                {(color === selectedColor) && (
                    <span className={classes.checkIcon}>
                        {CheckIcon}
                    </span>
                )}
            </div>
        );
    };

    if (!visible) {
        return null;
    }


    return (
        <Dialog  onClose={onClose} className={classes.dialog} aria-labelledby="form-dialog-title" open={visible}>
            <Typography variant={"h3"} component={"div"} className={classes.title}>
                Customize your view
            </Typography>
        </Dialog>
        );


}
export default DisplayModal;