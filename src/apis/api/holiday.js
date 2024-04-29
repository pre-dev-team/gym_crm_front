import instance from "../utils/instance";

export const trainerHolidayRequest = async (data) => {
    const response = await instance.post("/holiday/insert", data);
    return response;
};

export const deleteHolidayRequest = async (data) => {
    const response = await instance.delete("/holiday/delete", { data });
    return response;
};

export const selectHolidayRequest = async (params) => {
    const response = await instance.get("/holiday/select", { params });
    return response;
};

export const getDayTrainerHolidayRequst = async (params) => {
    const response = await instance.get("/holiday/find", { params });
    return response;
};
