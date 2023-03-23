import {memo, ReactElement} from "react";
import {useUserPageStyles} from "../UserPageStyles";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserProfileId, selectUserProfileWallpaper} from "../../../store/ducks/userProfile/selectors";
import {PROFILE_HEADER_PHOTO} from "../../../constants/path-constants";

const UserWallpaper = memo((): ReactElement => {
    const classes = useUserPageStyles();
    const location = useLocation();
    const userProfileId = useSelector(selectUserProfileId);
    const wallpaper = useSelector(selectUserProfileWallpaper);

    return (
        <div className={classes.wallpaper}>
            {wallpaper &&(
                <Link to={{
                    pathname:`${PROFILE_HEADER_PHOTO}/${userProfileId}`,
                    state: {background: location, imageSrc: wallpaper}
                }}>
                    <img key={wallpaper} src={wallpaper} alt={wallpaper}/>
                </Link>
            )}
        </div>
    );
})
export default UserWallpaper;