import instance from "../utils/instance";

export const SigninRequest = async (data) => {
    const response = await instance.post("/auth/account/signin", data);
    return response;
};
