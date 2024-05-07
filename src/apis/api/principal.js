import instance from "../utils/instance";

export const getPrincipalRequest = async () => {
    const response = await instance.get("/account/principal");
    return response;
};

export const getMyInfoRequest = async (params) => {
    const response = await instance.get("/account/myinfo", { params });
    return response;
};
