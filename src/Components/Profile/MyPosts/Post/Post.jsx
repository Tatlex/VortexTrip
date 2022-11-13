import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h5-3-nAaPtviS_piBmaLygHaHa%26pid%3DApi&f=1"
                alt="Error"/>
            <div className={classes.like}>
                <div>
                    {props.message}
                </div>
                <div>
                    <span>Like(s) :</span> {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;