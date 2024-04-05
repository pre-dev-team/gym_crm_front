import instance from "../utils/instance";

export const userReservationRequest = async (data) => {
    const response = await instance.post("/user/reservation", data);
    return response;
};
