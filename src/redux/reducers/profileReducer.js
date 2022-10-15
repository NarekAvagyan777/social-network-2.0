import user from '../../assets/images/user.png';


const ADD_NEW_POST = 'CREATE_NEW_POST';

const initialState = {
    posts: [
        {postText: 'YoYo', likesCount: 10, avatar: user, id: 1},
        {postText: 'How are you', likesCount: 5, avatar: user, id: 2}
    ]
}



export default function profileReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NEW_POST:
                return {
                    ...state,
                    posts: [...state.posts, action.payload]
                }
            
        
        default:
            return state;
    }
}



export const addNewPost = (payload) => ({type: ADD_NEW_POST, payload});