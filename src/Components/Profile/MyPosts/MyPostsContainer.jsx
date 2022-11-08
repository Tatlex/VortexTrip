import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reduser";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;