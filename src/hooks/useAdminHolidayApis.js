import { useState } from "react";
import { useQuery } from "react-query";
import { getConfirmedHolidayAppliesRequest, getUnconfirmedHolidayAppliesRequest } from "../apis/api/admin";
import { dateFormatter } from "../utils/dateFormatter";

const useAdminHolidayApis = () => {
    const [unconfirmedHolidayApplies, setUnconfirmedHolidayApplies] = useState([]);
    const [confirmedHolidayApplies, setConfirmedHolidayApplies] = useState([]);

    const getUnconfirmedHolidayAppliesQuery = useQuery(
        ["getUnconfirmedHolidayAppliesQuery"],
        getUnconfirmedHolidayAppliesRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
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
        ["getConfirmedHolidayAppliesQuery"],
        getConfirmedHolidayAppliesRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                const responseMap = response.data;
                const keys = Object.keys(responseMap);
                for (let key of keys) {
                    const tempList = responseMap[key];
                    const startTimeId =
                        tempList[0].timeId > tempList[1].timeId ? tempList[1].timeId : tempList[0].timeId;
                    const endTimeId = tempList[0].timeId > tempList[1].timeId ? tempList[0].timeId : tempList[1].timeId;
                    setConfirmedHolidayApplies((prev) => [
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

    return { unconfirmedHolidayApplies, confirmedHolidayApplies };
};

export default useAdminHolidayApis;
