import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c6228292-de61-456e-9d8a-96d57a90266e"
    }
})

export const UserApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            })
    },
    unFollow(id:number) {
        return instance.delete(`follow/${id}`)
    },
    follow(id:number ) {
        return instance.post(`follow/${id}`)
    }
}

export const ProfileApi = {
    getUserProfile (userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus (userId:string) {
      return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus (status:string) {
      return instance.put(`profile/status`, {status})
    }
}


export const AuthApi = {
    getAuth() {
        return instance.get(`auth/me`,)
    }
}
