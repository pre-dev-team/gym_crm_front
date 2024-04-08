import instance from "../utils/instance";

export const trainerMyMembersRequest = async (params) => {
    const response = await instance.get("/trainer/mypage/members", { params });
    return response;
};
