import instance from "../utils/instance";

export const trainerMyMembersRequest = async (params) => {
    const response = await instance.get("/reservation/trainer/mypage/members", { params });
    return response;
};

export const trainerInfoRequest = async (params) => {
    const response = await instance.get("/trainer/mypage/trainerInfo", { params });
    return response;
};

export const getTrainerIdByAccountIdRequest = async (params) => {
    const response = await instance.get("/account/trainer/id", { params });
    return response;
};

export const getTrainerReviews = async (params) => {
    const response = await instance.get("/trainer/all", { params });
    return response;
};

export const getTrainersByUserRequest = async () => {
    const response = await instance.get("trainer/user/trainers");
    return response;
};

export const getTrainersByAdminRequest = async () => {
    const response = await instance.get("trainer/admin/trainers");
    return response;
};

export const updateTrainerImgRequest = async (data) => {
    const response = await instance.put("/trainer/mypage/trainerimg", data);
    return response;
};
