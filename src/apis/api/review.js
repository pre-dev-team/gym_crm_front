import instance from "../utils/instance";

export const userReviewRequest = async (data) => {
    const response = await instance.post("/review/user/make", data);
    return response;
};

export const getUserReviewRequest = async (params) => {
    const response = await instance.get("/review/user", { params });
    return response;
};