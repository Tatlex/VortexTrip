const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, message: "Lama gun", likesCount: 0},
        {id: 2, message: "Nice bag, bro", likesCount: 12},
        {id: 3, message: "Abracadabra", likesCount: 34},
        {id: 4, message: "What's up?", likesCount: 89},
    ],
    newPostText: 'Second chance'
}

 const profileReducer = (state = initialState, action) => {

     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 id: 6,
                 message: state.newPostText,
                 likesCount: 0
             };
             state.postData.push(newPost);
             state.newPostText = '';
             return state;
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText;
             return state;
         default:
             return state;
     }
 }


export const addPostActionCreator = () => {    // Function that return action-object
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {    // Function that return action-object
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer;