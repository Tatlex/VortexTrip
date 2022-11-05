import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../redux/profile-reduser";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reduser";


const MyPosts = (props) => {
    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();        // Creating empty reference that takes different objects

    let addPost = () => {
        //  props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return <div className={classes.postsBlock}>
        My posts
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                {/*
                We assign our empty reference "newPostElement" to the object "<textarea>"
                from which the reference will originate
                */}
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;