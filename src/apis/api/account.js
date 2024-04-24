import instance from "../utils/instance";

export const editUserPasswordRequest = async (data) => {
    const response = await instance.put("/account/password", data);
    return response;
};

export const searchUsernameByEmailRequest = async (data) => {
    const response = await instance.post("/mail/send", data);
    return response;
};
