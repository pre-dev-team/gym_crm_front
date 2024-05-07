import instance from "../utils/instance";

export const getUsersBynameRequest = async (params) => {
    const response = await instance.get("/auth/admin/users", { params });
    return response;
};

export const getAllTrainersRequest = async () => {
    const response = await instance.get("/admin/trainers");
    return response;
};

export const searchReservationByNameRequset = async (params) => {
    const response = await instance.get("/reservation/admin/reservations", { params });
    return response;
};

export const getUnconfirmedHolidayAppliesRequest = async (params) => {
    const response = await instance.get("/holiday/admin/unconfirmed", { params });
    return response;
};

export const getConfirmedHolidayAppliesRequest = async (params) => {
    const response = await instance.get("/holiday/admin/confirmed", { params });
    return response;
};

export const decideHolidayAppliesRequest = async (data) => {
    const response = await instance.put("/holiday/admin/decide", data);
    return response;
};

export const deleteTrainerRequest = async (params) => {
    const response = await instance.delete("/auth/trainer", { params });
    return response;
};

export const getMonthReservationsCountRequest = async () => {
    const response = await instance.get("trainer/admin/reservations/month/count");
    return response;
};

export const editAdminPasswordRequest = async (data) => {
    const response = await instance.put("/account/admin/password", data);
    return response;
};
