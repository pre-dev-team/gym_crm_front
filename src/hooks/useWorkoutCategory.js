import { useState } from "react";
import { useQuery } from "react-query";
import { getWorkoutCategoriesRequest } from "../apis/api/workout";

const useWorkoutCategory = () => {
    const [workoutCategories, setWorkoutCategories] = useState([]);
    const getWorkoutCategoriesQuery = useQuery(["getWorkoutCategoriesQuery"], getWorkoutCategoriesRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setWorkoutCategories(() => response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return workoutCategories;
};

export default useWorkoutCategory;
