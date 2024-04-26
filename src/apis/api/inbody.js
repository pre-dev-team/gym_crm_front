import instance from "../utils/instance";

export const getUserInbodyRequest = async (params) => {
    const response = await instance.get("/inbody/account", { params });
    return response;
};

export const findInbodyByUserIdRequest = async (userId) => {
    const response = await instance.get(`/inbody/${userId}`);
    return response;
};

export const addUserInbodyInfoRequest = async (data) => {
    const response = await instance.post("/inbody/add", data);
    return response;
};

export const getInbodyInformationRequest = async (params) => {
    const response = await instance.get("/inbody/user/information", { params });
    return response;
};
