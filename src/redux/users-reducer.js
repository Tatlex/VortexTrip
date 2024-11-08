const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {
            id: 1,
            photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YuCM6LTcznD5tMAr-xejPQHaFj%26pid%3DApi&f=1&ipt=a151b557d1827bddf67fe7c9d31371fbb3fcfb6d5e9e1c6075b7dd0728a82b02&ipo=images",
            followed: true,
            fullName: "Sponge Bob",
            status: "I'm ready",
            location: {country: "Pacific Ocean", city: "Bikini Bottom"}
        },
        {
            id: 2,
            photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LpSi1rJqKHvuuFkHveI-ugHaHa%26pid%3DApi&f=1&ipt=619f93a86da5885b0e8ce84dbac7fa42b256915316aee14751c2d440dca925a0&ipo=images",
            followed: false,
            fullName: "T-800",
            status: "I'll be back",
            location: {country: "USA", city: "Detroit"}
        },
        {
            id: 3,
            photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NhAgmoXdalpfc6e-V3JwwwHaHa%26pid%3DApi&f=1&ipt=dfc0ea0200315dd280eeb71cd5c0c0d241ad3da35a21ef522d188bce06b86e00&ipo=images",
            followed: false,
            fullName: "Michael Corleone",
            status: "Never go against family",
            location: {country: "USA", city: "New Hampshire"}
        },
        {
            id: 4,
            photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.I9rLqpOOZsotvO4nHuH0oAHaK1%26pid%3DApi&f=1&ipt=2be360e2ee02ef043ac1195fdfe1d296ad49f8ebd74b859593f92af72237409c&ipo=images",
            followed: true,
            fullName: "Forrest Gump",
            status: "Run, Forrest...run!",
            location: {country: "USA", city: "Alabama"}
        },
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };

        default:
            return state;
    }
}


export const followActionCreator = (userId) => {
    return {
        type: FOLLOW_USER, userId
    }
}
export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW_USER, userId
    }
}
export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS, users
    }
}

export default usersReducer;