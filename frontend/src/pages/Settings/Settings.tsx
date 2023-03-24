import React, { FC, ReactElement, useEffect } from "react";

import {DisplayProps} from "./AccessibilityDisplayLanguages/Display/Display";
import {useSettingsStyles} from "./SettingsStyles";
import {useLocation} from "react-router-dom";
import {useGlobalStyles} from "../../util/globalClasses";
import {Grid, Paper, Typography} from "@material-ui/core";
import classnames from "classnames";

export interface LocationState {
    pathname: string;
}


const Settings: FC<DisplayProps> = ({ changeBackgroundColor, changeColorScheme }): ReactElement => {
    const globalClasses = useGlobalStyles();
    const location = useLocation<LocationState>();
    const classes = useSettingsStyles({ location });
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    return (
        <>
            <Grid className={classes.grid} md={4} item>
                <Paper className={classes.container} variant="outlined">
                    <Paper className={classnames(globalClasses.pageHeader, classes.leftSideHeader)} variant="outlined">
                        <Typography variant="h5" className={globalClasses.pageHeaderTitleWrapper}>
                            Settings
                        </Typography>
                    </Paper>
                </Paper>
            </Grid>
        </>
);}
export default Settings;