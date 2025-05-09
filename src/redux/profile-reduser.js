const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    postData: [
        {id: 1, message: "Lama gun", likesCount: 0},
        {id: 2, message: "Nice bag, bro", likesCount: 12},
        {id: 3, message: "Abracadabra", likesCount: 34},
        {id: 4, message: "What's up?", likesCount: 89},
    ],
    newPostText: 'Second chance',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }

        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }

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
export const setUsersProfileActionCreator = (profile) => {    // Function that return action-object
    return {
        type: SET_USERS_PROFILE, profile
    }
}
export default profileReducer;