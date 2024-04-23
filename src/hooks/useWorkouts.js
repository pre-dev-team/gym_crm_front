import { useState } from "react";
import { useQuery } from "react-query";
import { findWorkoutsByWorkoutCategoryId, getWorkoutCategoriesRequest } from "../apis/api/workout";

const useWorkouts = (categoryId) => {
    const [workouts, setWorkouts] = useState([]);
    const [workoutCategories, setWorkoutCategories] = useState([]);
    
    const getWorkoutsQuery = useQuery(["getWorkoutsQuery", categoryId], () => findWorkoutsByWorkoutCategoryId({
        workoutCategoryId: categoryId
    }), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
          setWorkouts(() => response.data.map(workout =>{
            return {
                value: workout.workoutId,
                label: workout.workoutName
            }
          }));
        },
        onError: (error) => {
            console.log(error);
        },
        // enabled:!!categoryId
    });

    
    const getWorkoutCategoriesQuery = useQuery(["getWorkoutCategoriesQuery"], getWorkoutCategoriesRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
           
            setWorkoutCategories(() => response.data.map(category => {
                return {
                    value: category.workoutCategoryId,
                    label: category.workoutCategoryName
                }
            }));
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return [workouts, workoutCategories];
};


export default useWorkouts;
