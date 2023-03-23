import React, {ReactElement, useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import {useUserPageStyles} from "./UserPageStyles";
import {selectUserDataId, selectUserIsLoaded} from "../../store/ducks/user/selectors";
import {
    selectUserProfileFullName,
    selectUserProfileId,
    selectUserProfileIsFollower,
    selectUserProfileIsMutedDirectMessages,
    selectUserProfileIsMyProfileBlocked,
    selectUserProfileIsPrivateProfile,
    selectUserProfileIsUserBlocked,
    selectUserProfileIsWaitingForApprove,
    selectUserProfileUsername,
    selectUsersIsErrorLoaded,
    selectUsersIsLoading,
    selectUsersIsSuccessLoaded
} from "../../store/ducks/userProfile/selectors";

import {useGlobalStyles} from "../../util/globalClasses";
import UserNotFound from "./UserNotFound/UserNotFound";
import {Paper} from "@material-ui/core";
import classnames from "classnames";
import UserPageHeader from "./UserPageHeader/UserPageHeader";
import UserWallpaper from "./UserWallpaper/UserWallpaper";
import UserAvatar from "./UserAvatar/UserAvatar";
import EditProfileButton from "./EditProfileButton/EditProfileButton";
import UserInfo from "./UserInfo/UserInfo";
import UserDetails from "./UserDetails/UserDetails";
import Spinner from "../../components/Spinner/Spinner";



const userPage = ():ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useUserPageStyles();
    const dispatch = useDispatch();
    const myProfileId = useSelector(selectUserDataId);
    const userProfileId = useSelector(selectUserProfileId);
    const fullName = useSelector(selectUserProfileFullName);
    const username = useSelector(selectUserProfileUsername);
    const isPrivateProfile = useSelector(selectUserProfileIsPrivateProfile);
    const isFollower = useSelector(selectUserProfileIsFollower);
    const isMutedDirectMessages = useSelector(selectUserProfileIsMutedDirectMessages);
    const isUserBlocked = useSelector(selectUserProfileIsUserBlocked);
    const isMyProfileBlocked = useSelector(selectUserProfileIsMyProfileBlocked);
    const isWaitingForApprove = useSelector(selectUserProfileIsWaitingForApprove);
    const isMyProfileLoaded = useSelector(selectUserIsLoaded);
    const isUserProfileLoading = useSelector(selectUsersIsLoading);
    const isUserProfileSuccessLoaded = useSelector(selectUsersIsSuccessLoaded);
    const isUserProfileNotLoaded = useSelector(selectUsersIsErrorLoaded);
    const params = useParams<{ userId: string }>();
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <>
            {isUserProfileNotLoaded ? (
                <UserNotFound/>
            ) : (
                <Paper className={classnames(globalClasses.pageContainer, classes.container)} variant="outlined">
                    <UserPageHeader activeTab={activeTab}/>
                    <div className={globalClasses.contentWrapper}>
                        <UserWallpaper/>
                        <div className={classes.info}>
                            <UserAvatar/>
                            {(isMyProfileLoaded && isUserProfileSuccessLoaded) && (
                                isMyProfileBlocked ? null : (
                                    (userProfileId === myProfileId) ? (
                                        <EditProfileButton/>
                                    ) : (
                                        <div className={classes.buttonWrapper}>
                                            <UserPageActions/>
                                            {(
                                                (!isPrivateProfile || isFollower) &&
                                                !isMutedDirectMessages &&
                                                !isUserBlocked
                                            ) && (
                                                <AddUserToChatButton/>
                                            )}
                                            {isUserBlocked ? (
                                                <BlockUserButton/>
                                            ) : (
                                                isFollower ? (
                                                    <>
                                                        <NotificationButton/>
                                                        <UnfollowUserButton/>
                                                    </>
                                                ) : (
                                                    userProfileId && (
                                                        isWaitingForApprove ? (
                                                            <CancelUserButton/>
                                                        ) : (
                                                            <FollowUserButton/>
                                                        )
                                                    )
                                                )
                                            )}
                                        </div>
                                    )
                                )
                            )}
                            <UserInfo/>
                            <div className={classes.infoList}>
                                <UserDetails/>
                                <UserInteractionCount/>
                            </div>
                            <UserUnmuteMessage/>
                            <UserFollowerGroup/>
                        </div>
                        {isUserProfileLoading ? (
                            <Spinner/>
                        ) : (
                            (isUserProfileSuccessLoaded) && (
                                isMyProfileBlocked ? (
                                    <UserBlockedMessage/>
                                ) : (
                                    isPrivateProfile && !isFollower && userProfileId !== myProfileId ? (
                                        <UserPrivateProfileMessage/>
                                    ) : (
                                        <UserTweets activeTab={activeTab} handleChangeTab={handleChangeTab}/>
                                    )
                                )
                            )
                        )}
                    </div>
                </Paper>
            )}
        </>
    );
}
export default userPage;