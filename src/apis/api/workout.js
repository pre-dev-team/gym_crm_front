import instance from "../utils/instance";

export const getWorkoutCategoriesRequest = async () => {
    const response = await instance.get("/options/category");
    return response;
};

export const findWorkoutsByWorkoutCategoryId = async (params) => {
    const response = await instance.get("/options/category/workouts", { params });
    return response;
};
