import db from "../models";

export const register = () => new Promise((resolve, reject) => {
    try {
        resolve("register service")
        console.log("after resolve");

        console.log(123);
    } catch (error) {
        reject(error)
    }
})