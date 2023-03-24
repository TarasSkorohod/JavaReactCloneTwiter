import {ReactElement} from "react";
import {useGlobalStyles} from "../../../util/globalClasses";

import {useSelector} from "react-redux";
import {selectIsUserListsLoading, selectUserListsItems} from "../../../store/ducks/lists/selectors";
import {Paper, Typography} from "@material-ui/core";
import {useUserListsStyles} from "./UserListsStyles";
import Spinner from "../../../components/Spinner/Spinner";
import ListsItem from "../ListsItem/ListsItem";

const UserLists = ():ReactElement =>{
    const globalClasses = useGlobalStyles();
    const classes = useUserListsStyles();
    const userList = useSelector(selectUserListsItems);
    const isUserListsLoading = useSelector(selectIsUserListsLoading);


    return (
        <Paper id={"userList"} className={classes.myLists} variant="outlined">
            <Typography variant="h5" className={globalClasses.itemInfoWrapper}>
                Your Lists
            </Typography>
            {/*{isUserListsLoading ? (*/}
            {/*    <Spinner />*/}
            {/*) : (*/}
            {/*    userLists.map((list) => (<ListsItem key={list.id} list={list} isMyList />))*/}
            {/*)}*/}
        </Paper>
    );
}
export default UserLists;