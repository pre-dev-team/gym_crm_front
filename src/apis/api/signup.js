import instance from "../utils/instance";

export const userSignupRequest = async (data) => {
    const response = await instance.post("/auth/user/signup", data);
    return response;
};
