import axios from "axios"

import httpRequestFirebase from "./apiService";

interface IUserData {
    username: string;
    email: string;
}


const login = async ({ username, email }: IUserData): Promise<any> => {
    const data = { username, email }
    // await httpRequestFirebase('GET', `'/users?orderBy='username'&equalTo=${username}`);
    return { username, email }
}


export const auth = { login }