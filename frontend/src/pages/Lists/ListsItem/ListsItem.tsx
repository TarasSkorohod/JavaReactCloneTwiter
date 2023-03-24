import {FC, memo, ReactElement} from "react";
import {ListResponse, ListUserResponse} from "../../../types/lists";
import {useGlobalStyles} from "../../../util/globalClasses";
import {useListsItemStyles} from "./ListsItemStyles";
import {useDispatch, useSelector} from "react-redux";
import {selectUserDataId} from "../../../store/ducks/user/selectors";
import {Link} from "react-router-dom";
import {LISTS} from "../../../constants/path-constants";
import {Paper} from "@material-ui/core";
import ListsItemAvatar from "./ListsItemAvatar/ListsItemAvatar";

interface ListsItemProps {
    list?: ListResponse | ListUserResponse;
    listIndex?: number;
    isMyList?: boolean;
}
const ListsItem: FC<ListsItemProps> = memo(({list, listIndex,isMyList}):ReactElement =>{
    const globalClasses = useGlobalStyles();
    const classes = useListsItemStyles();
    const dispatch = useDispatch();
    const myProfileId = useSelector(selectUserDataId);



    return (
        <Link to={`${LISTS}/${list?.id}`} className={globalClasses.link}>
            <Paper className={classes.container} style={{ border: (listIndex === 2) ? 0 : 1 }} variant="outlined">
                <ListsItemAvatar listWallpaper={list?.wallpaper} listAltWallpaper={list?.altWallpaper} />
                <div className={classes.listInfoContainer}>

                </div>
            </Paper>
        </Link>
    );
})
export default ListsItem;