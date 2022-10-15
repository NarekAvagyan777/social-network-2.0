import { usersAPI } from "../../api/api";

const ON_PAGE_CHANGED = 'ON_PAGE_CHANGED';
const SET_USERS = 'SET_USERS';


const initialState = {
    users: [],
    totalCount: 20,
    pageSize: 5,
    currentPage: 1
}


export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case ON_PAGE_CHANGED:
            return {...state, currentPage: action.currentPage}

        case SET_USERS:
            return {...state, users: [...action.users, ...state.users]}

        default:
            return state
    }
}

export const onPageChanged = (currentPage) => ({type: ON_PAGE_CHANGED, currentPage});
export const setUsers = (users) => ({type: SET_USERS, users});


export const onPageChangeCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(onPageChanged(currentPage));
    usersAPI.getUsers(pageSize, currentPage)
        .then(items => dispatch(setUsers(items)))
}