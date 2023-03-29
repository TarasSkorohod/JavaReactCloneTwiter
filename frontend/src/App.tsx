import React, {FC, ReactElement, useEffect, useState} from "react";

import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import {
    ACCOUNT_LOGIN,
    ACCOUNT_SIGNIN,
    BOOKMARKS,
    HOME, HOME_TRENDS, HOME_TWEET,
    LISTS, MESSAGES, MODAL, NOTIFICATIONS, NOTIFICATIONS_TIMELINE,
    PROFILE, PROFILE_HEADER_PHOTO, PROFILE_PHOTO, SEARCH, SETTINGS, USER
} from "./constants/path-constants";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import UserPage from "./pages/UserPage/UserPage";
import Lists from "./pages/Lists/Lists";
import {Layout} from "./pages/Layout";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectUserDataId, selectUserStatus} from "./store/ducks/user/selectors";
import {selectNotificationsList} from "./store/ducks/notifications/selectors";
import {BackgroundTheme, ColorScheme, LoadingStatus} from "./types/common";
import {CssBaseline, MuiThemeProvider, Theme, ThemeOptions} from "@material-ui/core";
import {
    blueColor,
    crimsonColor,
    defaultTheme,
    dimTheme, greenColor,
    lightsOutTheme,
    orangeColor,
    violetColor,
    yellowColor
} from "./theme";
import {BACKGROUND, COLOR} from "./constants/common-constants";
import SideSearch from "./components/SideSearch/SideSearch";
import spinner from "./components/Spinner/Spinner";
import Settings from "./pages/Settings/Settings";
import {Explore} from "@material-ui/icons";
import ActionSnackbar from "./components/ActionSnackbar/ActionSnackbar";
import Notifications from "./pages/Notifications/Notifications";
import Messages from "./pages/Messages/Messages";
import {deepmerge} from "@mui/utils";
import {createTheme} from "@material-ui/core/styles";
import {LITTLE_SECRET} from "./constants/url-constants";
import My from "./pages/My/My";





const App: FC = (): ReactElement => {
    const history = useHistory();
    const dispatch = useDispatch();
    const myProfileId = useSelector(selectUserDataId);
    const notifications = useSelector(selectNotificationsList);
    const isAuth = useSelector(selectIsAuth);
    const loadingStatus = useSelector(selectUserStatus);
    const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;
    const [colorScheme, setColorScheme] = useState<ThemeOptions>(blueColor as ThemeOptions);
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const location = useLocation<{ background: any }>();
    const background = location.state && location.state.background;

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [myProfileId]);

    const changeBackgroundColor = (background: BackgroundTheme): void => {
        processBackgroundColor(background);
        localStorage.setItem(BACKGROUND, background);
    };

    const changeColorScheme = (color: ColorScheme): void => {
        processColorScheme(color);
        localStorage.setItem(COLOR, color);
    };

    const processBackgroundColor = (background: BackgroundTheme): void => {
        if (background === BackgroundTheme.DEFAULT) {
            setTheme(defaultTheme);
        } else if (background === BackgroundTheme.DIM) {
            setTheme(dimTheme);
        } else if (background === BackgroundTheme.LIGHTS_OUT) {
            setTheme(lightsOutTheme);
        }
    };

    const processColorScheme = (color: ColorScheme): void => {
        if (color === ColorScheme.BLUE) {
            setColorScheme(blueColor);
        } else if (color === ColorScheme.YELLOW) {
            setColorScheme(yellowColor);
        } else if (color === ColorScheme.CRIMSON) {
            setColorScheme(crimsonColor);
        } else if (color === ColorScheme.VIOLET) {
            setColorScheme(violetColor);
        } else if (color === ColorScheme.ORANGE) {
            setColorScheme(orangeColor);
        } else if (color === ColorScheme.GREEN) {
            setColorScheme(greenColor);
        } else {
            setColorScheme(blueColor);
        }
    };

    return (
        <MuiThemeProvider theme={createTheme(deepmerge(theme, colorScheme))}>

        <CssBaseline />
            <div className="App">
                <Layout changeBackgroundColor={changeBackgroundColor} changeColorScheme={changeColorScheme}>
                    <Switch>
                        <Route path={ACCOUNT_SIGNIN} component={Authentication} exact />

                        <Route path={ACCOUNT_LOGIN} component={Login} exact />
                        <Route path={NOTIFICATIONS} component={Notifications} exact />
                        <Route path={HOME} component={Home} exact />
                        <Route path={SEARCH} component={Explore} />
                        <Route path={MESSAGES} component={Messages} />
                        <Route path={SETTINGS}
                           render={() => <Settings
                               changeBackgroundColor={changeBackgroundColor}
                               changeColorScheme={changeColorScheme} />
                           } />
                        <Route path={BOOKMARKS} component={Bookmarks} />
                        <Route path={LISTS} component={Lists} exact />
                        <Route path={`${PROFILE}/:userId`} component={UserPage} exact />
                        <Route path={LITTLE_SECRET} component={My} exact />
                    </Switch>
                </Layout>
                <ActionSnackbar />
            </div>

        </MuiThemeProvider>

    );
};

export default App;
