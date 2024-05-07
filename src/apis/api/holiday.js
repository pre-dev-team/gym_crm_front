import instance from "../utils/instance";

export const trainerHolidayRequest = async (data) => {
    const response = await instance.post("/holiday/trainer/insert", data);
    return response;
};

export const deleteHolidayRequest = async (data) => {
    const response = await instance.delete("/holiday/trainer/cancel", { data });
    return response;
};

export const selectHolidayRequest = async (params) => {
    const response = await instance.get("/holiday/trainer", { params });
    return response;
};

export const getDayTrainerHolidayRequst = async (params) => {
    const response = await instance.get("/holiday/user/trainer/day", { params });
    return response;
};
