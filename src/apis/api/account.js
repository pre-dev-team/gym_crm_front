import axios from "axios";
import instance from "../utils/instance";

export const editUserPasswordRequest = async (data) => {
    const response = await instance.put("/account/user/password", data);
    return response;
};

export const searchUsernameByEmailRequest = async (data) => {
    const response = await instance.post("/mail/send", data);
    return response;
};

export const searchPasswordByEmailRequest = async (data) => {
    const response = await instance.post("/mail/send/temporary/password", data);
    return response;
};

export const getUserAccountInfoRequest = async (params) => {
    const response = await instance.get("/account/user/info", { params });
    return response;
};
