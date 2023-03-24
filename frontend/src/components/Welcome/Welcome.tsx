import {FC, ReactElement} from "react";
import {useWelcomeStyles} from "./WelcomeStyles";
import {Button, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

const Welcome: FC = (): ReactElement => {
    const classes = useWelcomeStyles();
    const dispatch = useDispatch();


    const onHandleClick = () => {
    };
    return (
        <div className={classes.info}>
            <Typography variant={"h5"} component={"div"}>
                Welcome to Twitter!
            </Typography>
            <Typography variant={"subtitle1"} component={"div"}>
                This is the best place to see what’s happening in your world.
                Find some people and topics to follow now.
            </Typography>
            <div className={classes.infoButtonContainer}>
                <Button
                    onClick={onHandleClick}
                    color="primary"
                    variant="contained"
                    size="small"

                >
                    Let's go
                </Button>

            </div>
        </div>
    );
}
export default Welcome