import React, {ReactElement, useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Paper from "@material-ui/core/Paper";
import {CompatClient, Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import classnames from "classnames";

import {useUserPageStyles} from "./UserPageStyles";
import {selectUserDataId, selectUserIsLoaded} from "../../store/ducks/user/selectors";
import {
    fetchUserTweets,
    resetUserTweets,
    setAddedUserTweet,
    setUpdatedUserTweet
} from "../../store/ducks/userTweets/actionCreators";
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
import {
    fetchImages,
    fetchUserProfile,
    resetImagesState,
    resetUserProfileState
} from "../../store/ducks/userProfile/actionCreators";
import {WS_URL} from "../../constants/endpoint-constants";
import Spinner from "../../components/Spinner/Spinner";
import UserNotFound from "./UserNotFound/UserNotFound";
import {useGlobalStyles} from "../../util/globalClasses";
import UserPageHeader from "./UserPageHeader/UserPageHeader";
import UserWallpaper from "./UserWallpaper/UserWallpaper";
import UserAvatar from "./UserAvatar/UserAvatar";
import EditProfileButton from "./EditProfileButton/EditProfileButton";
import AddUserToChatButton from "./AddUserToChatButton/AddUserToChatButton";
import BlockUserButton from "./BlockUserButton/BlockUserButton";
import NotificationButton from "./NotificationButton/NotificationButton";
import UnfollowUserButton from "./UnfollowUserButton/UnfollowUserButton";
import CancelUserButton from "./CancelUserButton/CancelUserButton";
import FollowUserButton from "./FollowUserButton/FollowUserButton";
import UserInfo from "./UserInfo/UserInfo";
import UserDetails from "./UserDetails/UserDetails";
import UserInteractionCount from "./UserInteractionCount/UserInteractionCount";
import UserUnmuteMessage from "./UserUnmuteMessage/UserUnmuteMessage";
import UserFollowerGroup from "./UserFollowerGroup/UserFollowerGroup";
import UserBlockedMessage from "./UserBlockedMessage/UserBlockedMessage";
import UserPrivateProfileMessage from "./UserPrivateProfileMessage/UserPrivateProfileMessage";
import UserTweets from "./UserTweets/UserTweets";
import UserPageActions from "./UserPageActions/UserPageActions";
import {TOPIC_USER_ADD_TWEET, TOPIC_USER_UPDATE_TWEET} from "../../constants/ws-constants";

let stompClient: CompatClient | null = null;

const UserPage = (): ReactElement => {
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

    // useEffect(() => {

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
                                    )
                                        : (
                                            <div></div>
                                       // підключати до серверу твіти
                                    )
                                )
                            )
                        )}
                    </div>
                </Paper>
            )}
        </>
    );
};

export default UserPage;