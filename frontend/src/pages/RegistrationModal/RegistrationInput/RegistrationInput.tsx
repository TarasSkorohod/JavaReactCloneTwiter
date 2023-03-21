import React, {FC, ReactElement, useState} from "react";
import {InputLabel} from "@material-ui/core";
import {useRegistrationInputStyles} from "./RegistrationInputStyles";
interface RegistrationInputProps {
    onChange: (...event: any[]) => void;
    value: string;
    helperText?: string;
    error?: boolean;
    name: string;
    label: string;
    maxTextLength: number;

}

const RegistrationInput: FC<RegistrationInputProps> = (
    {
        onChange,
        value,
        helperText,
        error,
        name,
        label,
        maxTextLength
    }
): ReactElement => {
    const classes = useRegistrationInputStyles();
    const [focused] = useState<boolean>(false)


    return (
       <div className={classes.container}>
           <div className={classes.content}>
               {focused && (
                   <div className={classes.inputCount}>
                       <InputLabel style={{marginTop: -5, fontSize: 12}}>
                           {!value.length ? 0 : value.length} / {maxTextLength}
                       </InputLabel>
                   </div>
               )}
           </div>
       </div>
    );
};

export default RegistrationInput;
