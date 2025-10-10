import axios from "axios";

const instance =   axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "c7fc7458-7d30-4172-9b95-be34708ab3f2"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}& count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}