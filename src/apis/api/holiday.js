import instance from "../utils/instance";

export const trainerHolidayRequest = async (data) => {
    const response = await instance.post("/holiday/insert", data);
    return response;
};
