import {FC, ReactElement} from "react";
import {useMessagesStyles} from "./MessagesStyles";
import {useGlobalStyles} from "../../util/globalClasses";
import {Grid, List, Paper} from "@material-ui/core";
import Spinner from "../../components/Spinner/Spinner";

const Messages: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useMessagesStyles();


    return (
        <>
            <Grid className={classes.grid} md={4} item>
                <Paper className={globalClasses.pageContainer} variant="outlined">

                        <Spinner paddingTop={150} />
                        <List component="nav" className={classes.list}>

                        </List>

                </Paper>
            </Grid>
        </>
    );
};

export default Messages;