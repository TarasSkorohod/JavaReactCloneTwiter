import React, {FC, ReactElement, useEffect} from "react";
import {Paper, Typography} from "@material-ui/core";
import {useHomeStyles} from "./HomeStyles";
import {useGlobalStyles} from "../../util/globalClasses";
import TopTweetActions from "./TopTweetActions/TopTweetActions";
import {useDispatch, useSelector} from "react-redux";
import {selectPagesCount} from "../../store/ducks/users/selectors";
import {useLocation} from "react-router-dom";
import {
    fetchFollowersTweets,
    fetchTweets,
    resetTweets
} from "../../store/ducks/tweets/actionCreators";
import {fetchUserData} from "../../store/ducks/user/actionCreators";
import {selectUserDataIsProfileStarted} from "../../store/ducks/user/selectors";

import { SEARCH } from "../../constants/path-constants";
import AddTweetForm from "../../components/AddTweetForm/AddTweetForm";
import Welcome from "../../components/Welcome/Welcome";


const Home: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const location = useLocation<{ background: Location }>();
    const isProfileStarted = useSelector(selectUserDataIsProfileStarted);
    const pagesCount = useSelector(selectPagesCount);
    const [switchTweets, setSwitchTweets] = React.useState<boolean>(false);
    const [page, setPage] = React.useState<number>(0);

    useEffect(() => {

        dispatch(fetchUserData());

        if (location.pathname !== SEARCH) {
            loadTweets();
        }
        document.body.style.overflow = "unset";
        window.scrollTo(0, 0);

        return () => {
            dispatch(resetTweets());
        };
    }, []);

    const loadTweets = (): void => {
        if (switchTweets) {
            dispatch(fetchFollowersTweets(page));
        } else {
            dispatch(fetchTweets(page));
        }
        setPage(prevState => prevState + 1);
    };

    const handleLatestTweets = (): void => {
        dispatch(resetTweets());
        dispatch(fetchFollowersTweets(0));
        handleSwitchTweets(true);
    };

    const handleTopTweets = (): void => {
        dispatch(resetTweets());
        dispatch(fetchTweets(0));
        handleSwitchTweets(false);
    };

    const handleSwitchTweets = (condition: boolean): void => {
        setSwitchTweets(condition);
        setPage(prevState => prevState + 1);
    };

    return (
        <Paper variant="outlined">
            <Paper variant="outlined">
                <Typography variant="h5">
                    Home
                </Typography>
                <TopTweetActions
                    switchTweets={switchTweets}
                    handleLatestTweets={handleLatestTweets}
                    handleTopTweets={handleTopTweets}
                />
            </Paper>
            <div className={classes.addForm}>
                <Welcome />
            </div>
        </Paper>
    );
}
export default Home