import { Ilogin, Iuser } from "../interface/user";
import instance from "./instance";
const addUser = async (data: Iuser) => {
    return await instance.post("/signup", data)
}

const getallUser = () => {
    return instance.get("/signup")
}

const login = (user: Ilogin) => {
    return instance.post("/signin", user)
}
export { addUser, getallUser, login }