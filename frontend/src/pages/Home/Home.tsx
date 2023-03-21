import {FC, ReactElement} from "react";
import {Paper, Typography} from "@material-ui/core";

const Home: FC = (): ReactElement => {
    return (
        <Paper variant="outlined">
            <Paper variant="outlined">
                <Typography variant="h5">
                    Home
                </Typography>
            </Paper>
        </Paper>
    );
}
export default Home