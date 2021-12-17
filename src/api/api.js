import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "107e3009-e5ca-4f45-88c2-81939c530753"
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
    getProfile: (userId) => {
        console.warn('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`/profile/${userId}`)
    },
    getStatus: (userId) => {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return instance.put(`/profile/status/`, {
            status: status
        })
    }
}




export const authAPI = {
    authorization: () => {
        return instance.get('auth/me')
    },
    login: (email, password, rememberMe) => {
        return instance.post('auth/login', { email: email, password: password, rememberMe: rememberMe })
    },
    logout: () => {
        return instance.post('auth/logout')
    }
}


export async function searchYouTube(q) {
    q = encodeURIComponent(q);
    const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
            "x-rapidapi-key": "e7029884d4msh9ffb9181fd2d821p1c553ajsn7e425776caab"
        }
    });
    const body = await response.json();
    console.log(body);
    return body.items.filter(item => item.type === 'video');
}

