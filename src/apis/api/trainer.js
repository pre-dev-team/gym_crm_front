import instance from "../utils/instance";

export const trainerMyMembersRequest = async (params) => {
    const response = await instance.get("/trainer/mypage/members", { params });
    return response;
};

export const trainerInfoRequest = async (params) => {
    const response = await instance.get("/trainer/mypage/trainerInfo", { params });
    return response;
};

export const getTrainerIdByAccountIdRequest = async (params) => {
    const response = await instance.get("/auth/account/trainerid", { params });
    return response;
}

export const getTrainerReviews = async (params) => {
    const response = await instance.get("/trainer/all", { params }); // 변경된 엔드포인트로 수정
    return response;
}

export const getTopRatedTrainersInformationRequest = async () => {
    const response = await instance.get("/trainer/toprated"); // 변경된 엔드포인트로 수정
    return response;
};
