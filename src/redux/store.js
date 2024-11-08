import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Lama gun", likesCount: 0},
                {id: 2, message: "Nice bag, bro", likesCount: 12},
                {id: 3, message: "Abracadabra", likesCount: 34},
                {id: 4, message: "What's up?", likesCount: 89},
            ],
            newPostText: 'Click "send" and try to post something'
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
        // example: {type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar);
        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
