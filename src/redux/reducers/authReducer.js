import { authAPI } from "../../api/api";

const GET_AUTHORIZED_USER = 'GET_AUTHORIZED_USER';


let initialState = {
    me: {}
}

export default function authReducer(state = initialState, action) {
    debugger;
    switch(action.type) {
        case GET_AUTHORIZED_USER:
            return {...state, me: {...action.authorizedUser}}

        default:
            return state
    }
}

export const authMe = (authorizedUser) => ({type: GET_AUTHORIZED_USER, authorizedUser});

export const authMeCreator = () => (dispatch) => {
    authAPI.me()
        .then(data => dispatch(authMe(data)));
}