import { Login } from "./types";

export const testShared = (login: Login)=> {
    return `Username is ${login.username} and Pasword is ${login.password}`
}