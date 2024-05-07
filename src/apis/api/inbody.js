import instance from "../utils/instance";

export const getUserInbodyRequest = async (params) => {
    const response = await instance.get("/inbody/user", { params });
    return response;
};

export const addUserInbodyInfoRequest = async (data) => {
    const response = await instance.post("/inbody/trainer/user", data);
    return response;
};

export const getInbodyInformationRequest = async (params) => {
    const response = await instance.get("/inbody/trainer/user", { params });
    return response;
};
