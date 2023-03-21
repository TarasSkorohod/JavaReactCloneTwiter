import {RegistrationInfo} from "../../../types/auth";
import {FC, ReactElement} from "react";
import { Button, Dialog, DialogContent, Link as MuiLink, Typography } from "@material-ui/core";

import {useCreateAccountModalStyles} from "./CreateAccountModalStyles";
import {useGlobalStyles} from "../../../util/globalClasses";

interface CustomizeModalProps {
    open: boolean;
    onClose: () => void;
    registrationInfo: RegistrationInfo;
    onOpenEmailVerification: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const CreateAccountModal: FC<CustomizeModalProps> = (
    {
        open,
        onClose,
        registrationInfo,
        onOpenEmailVerification
    }
): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useCreateAccountModalStyles();

    return (
        <Dialog
            className={globalClasses.modalShadow}
            transitionDuration={0}
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            hideBackdrop
        >
            <DialogContent style={{ paddingTop: 0, paddingBottom: 0 }} className={classes.container}>
                <Typography component={"div"} className={classes.title}>
                    Step 3 of 5
                </Typography>
            </DialogContent>
        </Dialog>
    )
}
export default CreateAccountModal