import React, { FC, ReactElement } from "react";
import { Button, Dialog, Typography } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import { useTweetAnalyticsModalStyles } from "./TweetAnalyticsModalStyles";
import { textFormatter } from "../../util/text-formatter";
import CloseButton from "../CloseButton/CloseButton";

interface TweetAnalyticsModalStyles {
    fullName: string;
    username: string;
    text: string;
    visible?: boolean;
    onClose: () => void;
}

const TweetAnalyticsModal: FC<TweetAnalyticsModalStyles> = (
    {
        fullName,
        username,
        text,
        visible,
        onClose
    }
): ReactElement | null => {
    const classes = useTweetAnalyticsModalStyles();

    if (!visible) {
        return null;
    }
    return (
        <Dialog open={visible} onClose={onClose} className={classes.container} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <CloseButton onClose={onClose} />
                Tweet Analytics
            </DialogTitle>

            <DialogContent>
                <div className={classes.tweetInfoContainer}>
                    <div className={classes.tweetInfoWrapper}>
                        <Typography variant={"h6"} className={classes.tweetInfoFullName} component={"span"}>
                            {fullName}
                        </Typography>
                        <Typography variant={"subtitle1"} component={"span"}>
                            @{username}
                        </Typography>
                        <Typography className={classes.tweetInfoText} component={"div"}>
                            {textFormatter(text)}
                        </Typography>
                    </div>
                    
                </div>
            </DialogContent>
        </Dialog>
        );
}
export default TweetAnalyticsModal;
