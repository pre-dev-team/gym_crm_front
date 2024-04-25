import { useState } from "react";
import { useQuery } from "react-query";
import { getConfirmedHolidayAppliesRequest, getUnconfirmedHolidayAppliesRequest } from "../apis/api/admin";
import { dateFormatter } from "../utils/dateFormatter";

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
                setUnconfirmedHolidayApplies(() => []);
                const responseMap = response.data;
                const keys = Object.keys(responseMap);
                for (let key of keys) {
                    const tempList = responseMap[key];
                    const startTimeId =
                        tempList[0].timeId > tempList[1].timeId ? tempList[1].timeId : tempList[0].timeId;
                    const endTimeId = tempList[0].timeId > tempList[1].timeId ? tempList[0].timeId : tempList[1].timeId;
                    setUnconfirmedHolidayApplies((prev) => [
                        ...prev,
                        {
                            ...tempList[0],
                            createDate: dateFormatter(tempList[0].createDate),
                            startTimeId: startTimeId,
                            endTimeId: endTimeId,
                        },
                    ]);
                }
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
                console.log(response.data);
            },
        }
    );

    return { unconfirmedHolidayApplies, confirmedHolidayApplies };
};

export default useAdminHolidayApis;
