import React, {FC,ReactElement} from "react";

import {Dialog} from "@material-ui/core";
import {useCustomizeModalStyles} from "./CustomizeModalStyles";
import {useGlobalStyles} from "../../../util/globalClasses";


interface CustomizeModalProps {
    open: boolean;
    onClose: () => void;
    onOpenCreateAccount: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const CustomizeModal: FC<CustomizeModalProps> = ({open, onClose, onOpenCreateAccount }): ReactElement => {
    const classes = useCustomizeModalStyles();
    const globalClasses = useGlobalStyles();

    return (
        <Dialog
            className={globalClasses.modalShadow}
            transitionDuration={0}
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            hideBackdrop
        >

        </Dialog>
    );

}
export default CustomizeModal