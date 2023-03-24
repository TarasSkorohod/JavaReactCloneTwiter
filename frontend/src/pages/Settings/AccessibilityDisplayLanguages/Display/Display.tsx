import React,{FC, ReactElement} from "react";
import {BackgroundTheme, ColorScheme} from "../../../../types/common";

import {useGlobalStyles} from "../../../../util/globalClasses";
import {useDisplayStyles} from "./DisplayStyles";
import {useDispatch} from "react-redux";
import {Typography} from "@material-ui/core";

export interface DisplayProps {
    changeBackgroundColor: (background: BackgroundTheme) => void;
    changeColorScheme: (color: ColorScheme) => void;
}

const Display: FC<DisplayProps> = ({ changeBackgroundColor, changeColorScheme }): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useDisplayStyles();
    const dispatch = useDispatch();
    const [selectedBackgroundColor, setSelectedBackgroundColor] = React.useState<BackgroundTheme>(BackgroundTheme.DEFAULT);
    const [selectedColor, setSelectedColor] = React.useState<ColorScheme>(ColorScheme.BLUE);
    return (
        <>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle2"} component={"div"}>
                    Manage your font size, color, and background. These settings affect all the Twitter accounts on this
                    browser.
                </Typography>
            </div>
        </>
    );
}
export default Display;