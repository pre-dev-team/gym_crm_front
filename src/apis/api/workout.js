import instance from "../utils/instance";

export const getWorkoutCategoriesRequest = async () => {
    const response = await instance.get("/options/category");
    return response;
};

export const findWorkoutsByWorkoutCategoryId = async (params) => {
    const response = await instance.get("/options/category/workouts", { params });
    return response;
};

export const getSetsRequest = async() => {
    const response = await instance.get("/options/category/sets");
    return response;
};

export const getWeightsRequest = async() => {
    const response = await instance.get("/options/category/weights");
    return response;
};

export const getCountsRequest = async() => {
    const response = await instance.get("/options/category/counts");
    return response;
}


export const userRoutineRequest = async (data) => {
    const response = await instance.post("/routine/trainer", data);
    return response;
};
