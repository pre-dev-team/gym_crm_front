import instance from "../utils/instance";

export const editUserPasswordRequest = async (data) => {
    const response = await instance.put("/account/password", data);
    return response;
};
