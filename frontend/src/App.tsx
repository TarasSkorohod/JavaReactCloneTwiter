import React, { FC, ReactElement} from "react";
import {Switch} from "react-router-dom";
import Home from "./pages/Home/Home";




const App: FC = (): ReactElement => {

    return (
        <div className="App">
           <Home>

           </Home>
        </div>

    );
};

export default App;
