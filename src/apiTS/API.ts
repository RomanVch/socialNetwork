import axios from "axios";
const baseURL="https://social-network.samuraijs.com/api/1.0/"

const instance = axios.create({
 withCredentials: true,
 baseURL:"https://social-network.samuraijs.com/api/1.0/",
 headers: {
  "API-KEY": "e645c5e3-be8f-42d9-962f-602a32f9540f"
 }
})

export const usersAPI= {

 getUsers (currentPage: any = 1, pageSize: any = 10)  {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
   return response.data
  })
 },

 followPostUser  (id: number)  {
  return instance.post(`follow/${id}`)
 },

 unFollowDeleteUser (id: number) {
  return instance.delete(`follow/${id}`)
 }

}
