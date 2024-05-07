import instance from "../utils/instance";

export const userReservationRequest = async (data) => {
    const response = await instance.post("/reservation/user", data);
    return response;
};

export const getDayReservationRequest = async (params) => {
    const response = await instance.get("/reservation/day", { params });
    return response;
};

export const getUnreservedTrainersRequest = async (params) => {
    const response = await instance.get("/reservation/trainer/day", { params });
    return response;
};

export const getTodayReservationRequest = async (params) => {
    const response = await instance.get("/reservation/trainer/schedulefor2days", { params });
    return response;
};

export const getUserAllReservationRequest = async (params) => {
    const response = await instance.get("/reservation/user/all", { params });
    return response;
};

export const selectReservationAllUserRequest = async (params) => {
    const response = await instance.get("/reservation/trainer/all", { params });
    return response;
};

export const cancelReservationByUserRequest = async (params) => {
    const response = await instance.delete("/reservation/user", { params });
    return response;
};

export const editReservationByUserRequest = async (data) => {
    const response = await instance.put("/reservation/user", data);
    return response;
};

export const selectMymemberInformationRequest = async (params) => {
    const response = await instance.get("/reservation/user/information", { params });
    return response;
};
