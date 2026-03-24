import { usersList } from "../models/userModel.js"

export function handleUser(req,res) {
    const userData = usersList(); //model
    console.log(userData) 
    res.render("user",{users:userData}) //view
}