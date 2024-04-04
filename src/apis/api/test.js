import instance from "../utils/instance";

export const test = async (data) => {
    const response = await instance.post("/auth/test", data);
    return response;
};
