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

export const getUnconfirmedHolidayAppliesRequest = async () => {
    const response = await instance.get("/admin/holidays/unconfirmed");
    return response;
};

export const getConfirmedHolidayAppliesRequest = async () => {
    const response = await instance.get("/admin/holidays/confirmed");
    return response;
};

export const decideHolidayAppliesRequest = async (data) => {
    const response = await instance.put("/admin/holidays/decide", data);
    return response;
};
