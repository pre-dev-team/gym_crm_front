import { useState } from "react";
import { useQuery } from "react-query";
import { getConfirmedHolidayAppliesRequest, getUnconfirmedHolidayAppliesRequest } from "../apis/api/admin";

const useAdminHolidayApis = (trainerId) => {
    const [unconfirmedHolidayApplies, setUnconfirmedHolidayApplies] = useState([]);
    const [confirmedHolidayApplies, setConfirmedHolidayApplies] = useState([]);

    const getUnconfirmedHolidayAppliesQuery = useQuery(
        ["getUnconfirmedHolidayAppliesQuery", trainerId],
        () =>
            getUnconfirmedHolidayAppliesRequest({
                trainerId: trainerId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!trainerId,
            onSuccess: (response) => {
                setUnconfirmedHolidayApplies(() => response.data);
            },
        }
    );

    const getConfirmedHolidayAppliesQuery = useQuery(
        ["getConfirmedHolidayAppliesQuery", trainerId],
        () =>
            getConfirmedHolidayAppliesRequest({
                trainerId: trainerId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!trainerId,
            onSuccess: (response) => {
                setConfirmedHolidayApplies(() => response.data);
            },
        }
    );

    return { unconfirmedHolidayApplies, confirmedHolidayApplies };
};

export default useAdminHolidayApis;
