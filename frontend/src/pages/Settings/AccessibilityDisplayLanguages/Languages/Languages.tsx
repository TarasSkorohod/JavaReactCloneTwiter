import {FC, ReactElement} from "react";
import {selectUserProfileLanguage} from "../../../../store/ducks/user/selectors";
import {useGlobalStyles} from "../../../../util/globalClasses";
import {useLanguagesStyles} from "./LanguagesStyles";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

const Languages:FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useLanguagesStyles();
    const myProfileLanguage = useSelector(selectUserProfileLanguage);
    return (
        <>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle2"} component={"div"}>
                    Manage which languages are used to personalize your Twitter experience.
                </Typography>
            </div>
        </>
    );
};
export default Languages;