import instance from "../utils/instance";

export const userSigninRequest = async (data) => {
    try {
        const response = await instance.post("/auth/user/signin", data)
        return response;
    } catch (error) {
        return error.response;
    }
}