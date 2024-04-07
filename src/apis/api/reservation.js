import instance from "../utils/instance";

export const userReservationRequest = async (data) => {
    const response = await instance.post("/reservation/user/make", data);
    return response;
};

export const getReservationTimeRequest = async () => {
    const response = await instance.get("/common/duration");
    return response;
};

export const getDayReservationRequest = async (params) => {
    const response = await instance.get("/reservation/day", { params });
    return response;
};