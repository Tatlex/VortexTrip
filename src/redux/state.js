let state = {
    profilePage: {
        postData: [
            {id: 1, message:"Lama gun", likesCount: 0},
            {id: 2, message:"Nice bag, bro", likesCount: 12},
            {id: 3, message:"Abracadabra", likesCount: 34},
            {id: 4, message:"What's up?", likesCount: 89},
        ],
        newPostText: 'Second chance'
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name:'Dima'},
            {id: 2, name:'Alex'},
            {id: 3, name:'Tom'},
            {id: 4, name:'Marshall'}
        ],
        messageData: [
            {id: 1, message: 'How are you?'},
            {id: 2, message: 'Have a nice day'},
            {id: 3, message: 'Ok, i will buy it'},
            {id: 4, message: 'See you later)'}
        ]
    }
}

let rerenderEntireTree = () => {
    console.log("pop");
}


export const addPost = (postMessage) => {
    let newPost = {
        id: 6,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {      // using pattern observer "наблюдатель"  like callback function
    rerenderEntireTree = observer;               // for rerendering our UI by input new data and saving it in BLL
};

export default state;