import React, {FC, ReactElement} from "react";
import {useNotificationsStyles} from "./NotificationsStyles";
import {useGlobalStyles} from "../../util/globalClasses";
import {Paper, Typography} from "@material-ui/core";
import classnames from "classnames";

const Notifications: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useNotificationsStyles();


    return (
        <Paper className={classnames(globalClasses.pageContainer, classes.container)} variant="outlined">
            <Paper className={classnames(globalClasses.pageHeader, classes.header)}>
                <div className={globalClasses.pageHeaderTitleWrapper}>
                    <Typography variant="h5">
                        Notifications
                    </Typography>
                </div>
            </Paper>
        </Paper>
        );
}
export default Notifications;