import React, { FC, ReactElement } from "react";
import {Divider, List, ListItem, Typography} from "@material-ui/core";


import { useAdditionalResourcesStyles } from "./AdditionalResourcesStyles";

import { useGlobalStyles } from "../../../util/globalClasses";
import { withDocumentTitle } from "../../../hoc/withDocumentTitle";
import { MY_PORTFOLIO_LINK} from "../../../constants/path-constants";

import {ArrowTopIcon} from "../../../icons";
import classnames from "classnames";

const AdditionalResources: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useAdditionalResourcesStyles();

    return (
        <>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle2"} component={"div"}>
                    PORTFOLIO TEAM
                </Typography>
            </div>
            <div className={classnames(classes.listWrapper, globalClasses.listItemWrapper)}>
                <List component="nav" aria-label="main mailbox folders">
                    <div className={globalClasses.itemInfoWrapper}>
                        <Typography variant={"h5"} component={"div"}>
                            Release notes
                        </Typography>
                    </div>
                    <a href={MY_PORTFOLIO_LINK} target={"_blank"}>
                        <ListItem>
                            <div>
                                <Typography variant={"body1"} component={"div"}>
                                    My Portfolio link
                                </Typography>
                            </div>
                            <div className={globalClasses.arrowIcon}>
                                {ArrowTopIcon}
                            </div>
                        </ListItem>
                    </a>
                    <Divider />
                    <div className={globalClasses.itemInfoWrapper}>
                        <Typography variant={"h5"} component={"div"}>
                            Your projects and resume
                        </Typography>
                    </div>
                    <a href={MY_PORTFOLIO_LINK} target={"_blank"}>
                        <ListItem>
                            <div>
                                <Typography variant={"body1"} component={"div"}>
                                    ***
                                </Typography>
                            </div>
                            <div className={globalClasses.arrowIcon}>
                                {ArrowTopIcon}
                            </div>
                        </ListItem>
                    </a>
                </List>
            </div>
        </>
    );
};

export default withDocumentTitle(AdditionalResources)("PORTFOLIO TEAM");
