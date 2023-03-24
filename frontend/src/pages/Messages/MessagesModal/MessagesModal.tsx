import React, { FC, FormEvent, ReactElement, useState } from "react";
import {useMessagesModalStyles} from "./MessagesModalStyles";
import {Dialog} from "@material-ui/core";

interface MessagesModalProps {
    visible?: boolean;
    onClose: () => void;
}

const MessagesModal: FC<MessagesModalProps> = ({visible, onClose}):ReactElement | null =>{
    const classes = useMessagesModalStyles();

    return (
      <div>
          hdfsknkljs
      </div>
    );
};
export default MessagesModal;