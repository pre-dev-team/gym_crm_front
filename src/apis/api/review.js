import instance from "../utils/instance";

export const userReviewRequest = async (data) => {
    const response = await instance.post("/review/user", data);
    return response;
};

export const getUserReviewRequest = async (params) => {
    const response = await instance.get("/review/user", { params });
    return response;
};

export const getTopRatedTrainersInformationRequest = async () => {
    const response = await instance.get("/review/top"); // 변경된 엔드포인트로 수정
    return response;
};
