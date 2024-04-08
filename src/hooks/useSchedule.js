import { useState } from "react";
import { getTimeRequest } from "../apis/api/common";
import { useQuery } from "react-query";

const useSchedule = () => {
    const [schedule, setSchedule] = useState([]);

    const getTimedurationQuery = useQuery(["getTimedurationQuery"], getTimeRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setSchedule(() => response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return schedule;
};

export default useSchedule;
