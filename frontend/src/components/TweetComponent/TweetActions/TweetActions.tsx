import React, { FC, memo, ReactElement } from "react";
import TweetActionResult, { TweetActionResults } from "../../TweetActionResult/TweetActionResult";
import { useSelector } from "react-redux";

import {
    selectUserProfileFullName,
    selectUserProfileId,
    selectUserProfilePinnedTweetId
} from "../../../store/ducks/userProfile/selectors";
import { selectUserDataId, selectUserPinnedTweetId } from "../../../store/ducks/user/selectors";

interface TweetActionsProps {
    retweetsUserIds?: number[];
    tweetId?: number;
    activeTab?: number;
}
const TweetActions: FC<TweetActionsProps> = memo(({ retweetsUserIds, tweetId, activeTab }): ReactElement => {
    const userProfileId = useSelector(selectUserProfileId);
    const isTweetRetweetedByUser = retweetsUserIds?.findIndex((id) => id === userProfileId) !== -1;
    const myProfileId = useSelector(selectUserDataId);
    const fullName = useSelector(selectUserProfileFullName);
    const myProfilePinnedTweetId = useSelector(selectUserPinnedTweetId);
    const userProfilePinnedTweetId = useSelector(selectUserProfilePinnedTweetId);


    return (
        <>
            {isTweetRetweetedByUser && userProfileId ? (
                <TweetActionResult
                    action={TweetActionResults.RETWEET}
                    text={((myProfileId === userProfileId) ? ("You") : (fullName)) + " Retweeted"}
                />
            ) : null}
            {((myProfilePinnedTweetId === tweetId || userProfilePinnedTweetId === tweetId) && activeTab === 0) && (
                <TweetActionResult action={TweetActionResults.PIN} text={"Pinned Tweet"} />
            )}
        </>
    );
});
export default TweetActions