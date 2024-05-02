import axios from "axios";
import instance from "../utils/instance";

export const editUserPasswordRequest = async (data) => {
    const response = await instance.put("/account/password", data);
    return response;
};

export const searchUsernameByEmailRequest = async (data) => {
    const response = await axios.post("http://localhost:8080/mail/send", data);
    return response;
};

export const searchPasswordByEmailRequest = async (data) => {
    const response = await axios.post("http://localhost:8080/mail/send/temporary/password", data);
    return response;
};
