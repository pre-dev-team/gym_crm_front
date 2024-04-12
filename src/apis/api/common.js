import instance from "../utils/instance";

export const getTimeRequest = async () => {
    const response = await instance.get("/common/duration");
    return response;
};
