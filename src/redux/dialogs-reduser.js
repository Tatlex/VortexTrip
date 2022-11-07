const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialStore = {
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

 const dialogsReducer = (state = initialStore, action) => {


     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body;
             return state;
         case SEND_MESSAGE:
             let body = state.newMessageBody;
             state.newMessageBody = '';
             state.messageData.push({id: 5, message: body});
             return state;
         default:
             return state;
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


export default dialogsReducer;