import instance from "../utils/instance";

export const userSignupRequest = async (data) => {
    const response = await instance.post("/auth/user/signup", data);
    return response;
};

export const trainerSignupRequest = async (data) => {
    const response = await instance.post("/auth/admin/trainer/signup", data);
    return response;
};

export const oAuth2SignupRequest = async (data) => {
    return await instance.post("/auth/oauth2/signup", data);
};
