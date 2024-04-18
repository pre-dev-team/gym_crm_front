import instance from "../utils/instance";

export const findInbodyByUserIdRequest = async (userId) => {
    const response = await instance.get(`/inbody/${userId}`);
    return response;
};