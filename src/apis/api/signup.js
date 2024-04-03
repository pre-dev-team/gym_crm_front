import instance from "../utils/instance"

export const userSignupRequest = async (data) => {
    try {
        const response = await instance.post("/auth/user/signup", data)
        return response;
    } catch (error) {
        return error.response;
    }
}