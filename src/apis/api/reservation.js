import instance from "../utils/instance";

export const userReservationRequest = async (data) => {
    const response = await instance.post("/user/reservation", data);
    return response;
};

export const getReservationTimeRequest = async () => {
    const response = await instance.get("/common/duration");
    return response;
};

export const getDayReservationRequest = async (param) => {
    const response = await instance.get("/reservation/day", param);
};
