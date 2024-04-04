import instance from "../utils/instance";

export const test = async (data) => {
    try {
        const response = await instance.post("/user/test", data);
        return response;
    } catch (error) {
        return error.response;
    }
};
