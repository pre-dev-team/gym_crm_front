import { useState } from "react";
import { useQuery } from "react-query";
import { findWorkoutsByWorkoutCategoryId, getCountsRequest, getWeightsRequest, getWorkoutCategoriesRequest } from "../apis/api/workout";

const useSelectRoutine = (categoryId) => {
  
  const [sets, setSets] = useState([]);
  const [weights, setWeights] = useState([]);
  const [counts, setCounts] = useState([]);

  const getSetsQuery = useQuery(["getSetsQuery"], getSetsRequest, {
    retry:0,
    refetchOnWindowFocus: false,
    onSuccess: (response) => {
      setSets(() => response.data.map(sets => {
          return {
            
         }
      }));
    },
    onError: (error) => {
        console.log(error);
    },
  });

  const getWeightsQuery = useQuery(["getWeightsQuery"], getWeightsRequest, {
    retry:0,
    refetchOnWindowFocus: false,
    onSuccess: (response) => {
      setSets(() => response.data.map(sets => {
          return {
            
         }
      }));
    },
    onError: (error) => {
        console.log(error);
    },
  });

  const getCountsQuery = useQuery(["getCountsQuery"], getCountsRequest, {
    retry:0,
    refetchOnWindowFocus: false,
    onSuccess: (response) => {
      setSets(() => response.data.map(sets => {
          return {
            
         }
      }));
    },
    onError: (error) => {
        console.log(error);
    },
  });
  
  return [sets, weights, counts];
};


export default useWorkouts;
