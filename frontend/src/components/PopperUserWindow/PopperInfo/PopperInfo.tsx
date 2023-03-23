import React, {memo, ReactElement} from "react";
import {usePopperInfoStyles} from "./PopperInfoStyles";
import {Link} from "react-router-dom";
import {PROFILE} from "../../../constants/path-constants";
import {useSelector} from "react-redux";
import {
    selectUserDetailFullName,
    selectUserDetailId,
    selectUserDetailIsPrivateProfile, selectUserDetailUsername
} from "../../../store/ducks/userDetail/selectors";
import {LockIcon} from "../../../icons";
import {Typography} from "@material-ui/core";

const PopperInfo = memo((): ReactElement =>{
    const classes = usePopperInfoStyles();
    const userId = useSelector(selectUserDetailId);
    const fullName = useSelector(selectUserDetailFullName);
    const username = useSelector(selectUserDetailUsername);
    const isPrivateProfile = useSelector(selectUserDetailIsPrivateProfile);

    return (
        <div className={classes.userInfoWrapper}>
            <Link to={`${PROFILE}/${userId}`}>
                <div>
                    <Typography variant={"h6"} component={"span"}>{fullName}</Typography>
                    {isPrivateProfile && <span className={classes.lockIcon}>{LockIcon}</span>}
                </div>
            </Link>
            <Typography variant={"subtitle1"} component={"div"}>@{username}</Typography>
        </div>
    );

})
export default PopperInfo;