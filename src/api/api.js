import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY" : "107e3009-e5ca-4f45-88c2-81939c530753"
      }

})



export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    },

    unfollowUser: (uid) => {
        return instance.delete(`/follow/${uid}`)
    },

    followUser: (uid) => {
        return instance.post(`/follow/${uid}`)
    },

    authorization: () => {
        return instance.get('auth/me')
    }
}

