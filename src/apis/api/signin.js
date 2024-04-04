import instance from "../utils/instance";

export const userSigninRequest = async (data) => {
    const response = await instance.post("/auth/user/signin", data);
    return response;
};
