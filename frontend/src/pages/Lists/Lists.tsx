import {ReactElement} from "react";
import {useGlobalStyles} from "../../util/globalClasses";
import {useDispatch} from "react-redux";
import UserLists from "./UserLists/UserLists";
import ListInfoDescription from "./ListsItem/ListInfoDescription/ListInfoDescription";

const Lists = ():ReactElement => {
    const globalClasses = useGlobalStyles();
    const dispatch = useDispatch();

    return (
        <div>
            <UserLists />
            <ListInfoDescription />
        </div>
    );
}
export default Lists;