import {RegistrationInfo} from "../../../types/auth";
import {FC, ReactElement, useState} from "react";
import { Button, Dialog, DialogContent, Link as MuiLink, Typography } from "@material-ui/core";

import {useCreateAccountModalStyles} from "./CreateAccountModalStyles";
import {useGlobalStyles} from "../../../util/globalClasses";
import Spinner from "../../../components/Spinner/Spinner";
import {RegistrationInputField} from "../RegistrationInput/RegistrationInputField";
import {TWITTER_COOKIES, TWITTER_PRIVACY, TWITTER_TOS_NEW} from "../../../constants/url-constants";
import {AuthApi} from "../../../services/api/authApi";

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
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = (): void => {
      //робота с АПІ
    }


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
                    Крок 3 із 5
                </Typography>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <Typography variant={"h5"} component={"div"} className={classes.subtitle}>
                            Create your account
                        </Typography>
                        <div className={classes.form}>
                            <RegistrationInputField
                                label="Name"
                                variant="filled"
                                value={registrationInfo.username}
                                fullWidth
                                disabled
                            />
                            <RegistrationInputField
                                label="Email"
                                variant="filled"
                                value={registrationInfo.email}
                                fullWidth
                                disabled
                            />
                            <RegistrationInputField
                                label="Birth date"
                                variant="filled"
                                value={registrationInfo.birthday}
                                fullWidth
                                disabled
                            />
                        </div>
                        <Typography variant={"body1"} component={"div"} className={classes.text}>
                            {"By signing up, you agree to the "}
                            <MuiLink href={TWITTER_TOS_NEW} variant="body1" target="_blank" rel="noopener">
                                Terms of Service
                            </MuiLink>
                            {" and "}
                            <MuiLink href={TWITTER_PRIVACY} variant="body1" target="_blank" rel="noopener">
                                Privacy Policy
                            </MuiLink>
                            {", including "}
                            <MuiLink href={TWITTER_COOKIES} variant="body1" target="_blank" rel="noopener">
                                Cookie Use
                            </MuiLink>
                            {". Others will be able to find you by email or phone number when provided · "}
                            <MuiLink href={TWITTER_PRIVACY} variant="body1" target="_blank" rel="noopener">
                                Privacy Options
                            </MuiLink>
                        </Typography>
                        <Button
                            className={classes.button}
                            onClick={onSubmit}
                            variant="contained"
                            color="primary"
                            size="small"
                            fullWidth
                        >
                            Sign up
                        </Button>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}
export default CreateAccountModal