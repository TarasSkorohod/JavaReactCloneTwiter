import React, { FC, ReactElement} from "react";

import {Route, Switch} from "react-router-dom";
import {ACCOUNT_FORGOT, ACCOUNT_LOGIN, ACCOUNT_SIGNIN, BOOKMARKS, HOME, PROFILE} from "./constants/path-constants";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import UserPage from "./pages/UserPage/UserPage";




const App: FC = (): ReactElement => {
    return (

        <div className="App">
            <Switch>
                <Route path={ACCOUNT_SIGNIN} component={Authentication} exact />
                <Route path={HOME} component={Home} exact />
                <Route path={ACCOUNT_LOGIN} component={Login} exact />
                <Route path={BOOKMARKS} component={Bookmarks} />
                 {/*/:userId*/}
                <Route path={`${PROFILE}`} component={UserPage} exact />
            </Switch>

        </div>

    );
};

export default App;
