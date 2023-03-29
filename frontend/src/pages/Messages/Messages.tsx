import {FC, ReactElement, useCallback, useState} from "react";
import {useMessagesStyles} from "./MessagesStyles";
import {useGlobalStyles} from "../../util/globalClasses";
import {Grid, List, Paper} from "@material-ui/core";
import Spinner from "../../components/Spinner/Spinner";
import ChatFooter from "./ChatMessages/ChatFooter/ChatFooter";
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import SearchChatParticipant from "./SearchChatParticipant/SearchChatParticipant";
import StartConversation from "./StartConversation/StartConversation";
import ChatParticipant from "./ChatParticipant/ChatParticipant";
import {selectChatsItems, selectIsChatsLoading} from "../../store/ducks/chats/selectors";
import {useDispatch, useSelector} from "react-redux";
import {selectUserDataId} from "../../store/ducks/user/selectors";
import {Route, useLocation} from "react-router-dom";
import {ChatResponse} from "../../types/chat";
import {MESSAGES, MESSAGES_SETTINGS} from "../../constants/path-constants";
import MessageSettings from "./MessageSettings/MessageSettings";

const Messages: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useMessagesStyles();
    const dispatch = useDispatch();
    const location = useLocation<{ removeParticipant: boolean | undefined; }>();
    const myProfileId = useSelector(selectUserDataId);
    const chats = useSelector(selectChatsItems);
    const isChatsLoading = useSelector(selectIsChatsLoading);
    const [participantId, setParticipantId] = useState<number | undefined>(undefined);
    const [chatId, setChatId] = useState<number | undefined>(undefined);


    const handleListItemClick = useCallback((chat: ChatResponse): void => {
        setParticipantId((chat.participants[0].user.id === myProfileId) ? chat.participants[1].id : chat.participants[0].id);
        setChatId(chat.id);
    }, []);

    return (
        <>
            <Grid className={classes.grid} md={4} item>
                <Paper className={globalClasses.pageContainer} variant="outlined">
                    <MessagesHeader />
                    {isChatsLoading ? (
                        <Spinner paddingTop={150} />
                    ) : (
                        (chats.length === 0) ? (
                            <StartConversation />
                        ) : (
                            <>
                                <SearchChatParticipant />
                                <List component="nav" className={classes.list}>
                                    {chats.map((chat) => (
                                        <ChatParticipant
                                            key={chat.id}
                                            chat={chat}
                                            participantUserId={participantId}
                                            handleListItemClick={handleListItemClick}
                                        />
                                    ))}
                                </List>
                            </>
                        )
                    )}
                </Paper>
            </Grid>
            <Grid className={classes.grid} md={5} item>
                <Route exact path={MESSAGES_SETTINGS}>
                    <MessageSettings />
                </Route>
                <Route exact path={`${MESSAGES}/:id/info`}>

                </Route>
                <Route exact path={MESSAGES}>

                </Route>
            </Grid>
        </>
    );
};

export default Messages;