import instance from "../utils/instance";

export const getPrincipalRequest = async () => {
    const response = await instance.get("/account/principal");
    return response;
};