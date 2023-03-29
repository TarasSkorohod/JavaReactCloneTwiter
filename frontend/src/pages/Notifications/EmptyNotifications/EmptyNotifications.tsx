import {FC, ReactElement} from "react";
import {useEmptyNotificationsStyles} from "./EmptyNotificationsStyles";
import {Typography} from "@material-ui/core";

interface EmptyNotificationsProps {
    isNotification: boolean;
}

const EmptyNotifications: FC<EmptyNotificationsProps> = ({isNotification}): ReactElement => {
    const classes = useEmptyNotificationsStyles();

    return (
        <div className={classes.infoWindow}>
            <Typography variant={"h4"} component={"div"}>
                Nothing to see here — yet
            </Typography>
            <Typography variant={"subtitle1"} component={"div"}>
                {isNotification ? (
                    "From like to Retweets and whole lot more, this is where all the actions happens."
                ) : (
                    "When someone mentions you, you’ll find it here."
                )}
            </Typography>
        </div>
    );
}
export default EmptyNotifications;