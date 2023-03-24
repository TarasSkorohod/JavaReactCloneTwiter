import React, {FC, ReactElement, useEffect, useState} from "react";

import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import {
    ACCOUNT_LOGIN,
    ACCOUNT_SIGNIN,
    BOOKMARKS,
    HOME,
    LISTS,
    PROFILE
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
import {CssBaseline, Theme, ThemeOptions} from "@material-ui/core";
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

        <div className="App">
            <CssBaseline />
            <Layout changeBackgroundColor={changeBackgroundColor} changeColorScheme={changeColorScheme}>
                <Switch>
                    <Route path={ACCOUNT_SIGNIN} component={Authentication} exact />
                    <Route path={ACCOUNT_LOGIN} component={Login} exact />
                    <Route path={HOME} component={Home} exact />
                    <Route component={SideSearch} />

                    <Route path={BOOKMARKS} component={Bookmarks} />
                    {/*/:userId*/}
                    <Route path={PROFILE} component={UserPage} exact />
                    <Route path={LISTS} component={Lists} exact />

                </Switch>
            </Layout>


        </div>

    );
};

export default App;
