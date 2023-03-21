import React, { FC, ReactElement} from "react";

import {Route, Switch} from "react-router-dom";
import {ACCOUNT_SIGNIN, HOME} from "./constants/path-constants";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";




const App: FC = (): ReactElement => {
    return (

        <div className="App">
            <Switch>
                <Route path={ACCOUNT_SIGNIN} component={Authentication} exact />
                <Route path={HOME} component={Home} exact />
            </Switch>
        </div>

    );
};

export default App;
