import instance from "../utils/instance";

export const SigninRequest = async (data) => {
    const response = await instance.post("/auth/user/signin", data);
    return response;
};
