const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Lama gun", likesCount: 0},
                {id: 2, message: "Nice bag, bro", likesCount: 12},
                {id: 3, message: "Abracadabra", likesCount: 34},
                {id: 4, message: "What's up?", likesCount: 89},
            ],
            newPostText: 'Second chance'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Tom'},
                {id: 4, name: 'Marshall'}
            ],
            messageData: [
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'Have a nice day'},
                {id: 3, message: 'Ok, i will buy it'},
                {id: 4, message: 'See you later)'}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log("pop");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {      // using pattern observer "наблюдатель"  like callback function
        this._callSubscriber = observer;               // for rerendering our UI by input new data and saving it in BLL
    },

    dispatch(action) {
        // [action] - an object that describes what action to take,
        // and ALWAYS must have a "type" property
        // example:  {type: 'ADD-POST'}

        if (action.type === ADD_POST) {
                let newPost = {
                    id: 6,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messageData.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
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

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default store;
window.store = store;
