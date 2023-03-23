import {memo, ReactElement} from "react";
import {useUserPageStyles} from "../UserPageStyles";
import {Skeleton} from "@material-ui/lab";
import {useSelector} from "react-redux";
import {
    selectUserProfileAbout,
    selectUserProfileFullName,
    selectUserProfileId,
    selectUserProfileIsMyProfileBlocked,
    selectUserProfileIsPrivateProfile,
    selectUserProfileUsername
} from "../../../store/ducks/userProfile/selectors";
import {LockIcon} from "../../../icons";
import {Typography} from "@material-ui/core";

const UserInfo = memo(():ReactElement =>{
    const classes = useUserPageStyles();
    const userProfileId = useSelector(selectUserProfileId);
    const fullName = useSelector(selectUserProfileFullName);
    const username = useSelector(selectUserProfileUsername);
    const about = useSelector(selectUserProfileAbout);
    const isPrivateProfile = useSelector(selectUserProfileIsPrivateProfile);
    const isMyProfileBlocked = useSelector(selectUserProfileIsMyProfileBlocked);

    return (
        <>
            {!userProfileId ? (
                    <Skeleton variant="text" width={250} height={30} />
                ) : (
                    <div>
                        <Typography variant={"h5"} component={"span"}>
                            {fullName}
                        </Typography>
                        {isPrivateProfile && <span className={classes.lockIcon}>{LockIcon}</span>}
                    </div>
                )}
            {!userProfileId ? (
                <Skeleton variant="text" width={60} />
            ) : (
                <Typography variant={"subtitle1"} component={"div"}>
                    @{username}
                </Typography>
            )}
            {!isMyProfileBlocked && (
                <Typography variant={"body1"} component={"div"} className={classes.description}>
                    {about}
                </Typography>
            )}
        </>
    );
})
export default UserInfo;