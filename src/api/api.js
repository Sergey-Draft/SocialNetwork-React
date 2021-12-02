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
    getProfile: (userId) => {
        return instance.get(`/profile/${userId}`)
    }
}

export const authAPI = {
    authorization: () => {
        return instance.get('auth/me')
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

