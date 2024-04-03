import instance from "../utils/instance"

export const userSignupRequest = async (data) => {
    try {
        const response = await instance.post("/auth/user/signup")
        return response;
    } catch (error) {
        return error.response;
    }
}