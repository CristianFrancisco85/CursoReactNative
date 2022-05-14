import axios from "axios";

export const reqResAPi = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
})