import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    // headers: {
    //     "API-KEY": "b65c543d-9910-4fb7-9eae-59a1a71c8734"
    // }
});

export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(count = 5, pageNumber = 1) {
        debugger;
        return instance.get(`/users?count=${count}&page=${pageNumber}`)
            .then(res => res.data)
            .then(data => data.items)
    }
};