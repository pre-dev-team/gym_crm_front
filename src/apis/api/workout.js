import instance from "../utils/instance";

export const getWorkoutCategoriesRequest = async () => {
    const response = await instance.get("/options/category");
    return response;
};

export const findWorkoutsByWorkoutCategoryId = async (params) => {
    const response = await instance.get("/options/category/workouts", { params });
    return response;
};

export const makeRoutineRequest = async (data) => {
    const response = await instance.post("/routine/trainer", data);
    return response;
};

export const editRoutineRequest = async (data) => {
    const response = await instance.post("/routine/edit", data);
    return response;
};

export const getRoutineByReservationIdRequest = async (params) => {
    const response = await instance.get("/routine/trainer", { params });
    return response;
};
