import { usersAPI } from "../../api/api";

const ON_PAGE_CHANGED = 'ON_PAGE_CHANGED';
const SET_USERS = 'SET_USERS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';


const initialState = {
    users: [],
    totalCount: 20,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
}


export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case ON_PAGE_CHANGED:
            return {...state, currentPage: action.currentPage}

        case SET_USERS:
            return {...state, users: [...action.users, ...state.users]}

        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const onPageChanged = (currentPage) => ({type: ON_PAGE_CHANGED, currentPage});
export const setUsers = (users) => ({type: SET_USERS, users});
export const toggleIsFetching = (value) => ({type: SET_IS_FETCHING, isFetching: value});



export const onPageChangeCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(onPageChanged(currentPage));
    usersAPI.getUsers(pageSize, currentPage)
        .then(items => dispatch(setUsers(items)));
    dispatch(toggleIsFetching(false));
}