import instance from "../utils/instance";

export const getTimeRequest = async () => {
    const response = await instance.get("/common/duration");
    return response;
};

export const getTrainersRequest = async () => {
    const response = await instance.get("common/trainers");
    return response;
};
