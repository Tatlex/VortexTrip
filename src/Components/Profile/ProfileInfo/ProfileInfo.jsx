import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div>
            <div>
                <img className={classes.mainImage}
                     src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fb%2Fe%2F1%2F37581.jpg&f=1&nofb=1&ipt=112ef5c9937df651083665b706512539dfde053e0416539b88b34868979ab64a&ipo=images"
                     alt="Loading error"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt="Loading error"/>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;