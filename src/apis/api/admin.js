import instance from "../utils/instance";

export const getUsersBynameRequest = async (params) => {
    const response = await instance.get("/admin/users", { params });
    return response;
};

export const getAllTrainersRequest = async () => {
    const response = await instance.get("/admin/trainers");
    return response;
};

export const searchReservationByNameRequset = async (params) => {
    const response = await instance.get("/admin/reservations", { params });
    return response;
};

export const getUnconfirmedHolidayAppliesRequest = async (params) => {
    const response = await instance.get("/admin/holidays/unconfirmed", { params });
    return response;
};

export const getConfirmedHolidayAppliesRequest = async (params) => {
    const response = await instance.get("/admin/holidays/confirmed", { params });
    return response;
};

export const decideHolidayAppliesRequest = async (data) => {
    const response = await instance.put("/admin/holidays/decide", data);
    return response;
};

export const deleteTrainerRequest = async (params) => {
    const response = await instance.delete("/auth/trainer", { params });
    return response;
};

export const getMonthReservationsCountRequest = async () => {
    const response = await instance.get("/admin/reservations/month/count");
    return response;
};
