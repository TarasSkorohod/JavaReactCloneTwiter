import React, { FC, memo, ReactElement } from "react";
import { TweetResponse } from "../../types/tweet";
import {useTweetComponentStyles} from "./TweetComponentStyles";
import {useSelector} from "react-redux";
import {selectUserDataId} from "../../store/ducks/user/selectors";
import {ReplyType} from "../../types/common";
import {Paper} from "@material-ui/core";
import TweetActions from "./TweetActions/TweetActions";
import TweetAvatar from "./TweetAvatar/TweetAvatar";
import {DEFAULT_PROFILE_IMG} from "../../constants/url-constants";

export interface TweetComponentProps {
    tweet?: TweetResponse;
    activeTab?: number;
    isTweetImageModal?: boolean;
}

const TweetComponent: FC<TweetComponentProps> = memo(({ tweet, activeTab, isTweetImageModal }): ReactElement => {
    const myProfileId = useSelector(selectUserDataId);
    const isUserCanReply = (tweet?.replyType === ReplyType.MENTION) && (myProfileId !== tweet?.user.id);
    const classes = useTweetComponentStyles({ isTweetImageModal });

    return (
        <Paper className={classes.container} variant="outlined">
            <TweetActions tweetId={tweet?.id} retweetsUserIds={tweet?.retweetsUserIds} activeTab={activeTab} />
            <div className={classes.tweetWrapper}>
                <TweetAvatar userId={tweet?.user.id} src={tweet?.user.avatar ?? DEFAULT_PROFILE_IMG} />
                <div className={classes.tweetContainer}>
                    <div className={classes.header}>

                    </div>
                    </div>
            </div>

        </Paper>
        );
});
export default TweetComponent;
