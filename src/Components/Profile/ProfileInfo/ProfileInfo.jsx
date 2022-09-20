import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={classes.mainImage}
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RDc2ptk1sER-ca-80JHu9gHaEK%26pid%3DApi&f=1"
                    alt="Loading error"/>
            </div>
            <div className={classes.descriptionBlock}>avatar + description</div>
        </div>
    )
}

export default ProfileInfo;