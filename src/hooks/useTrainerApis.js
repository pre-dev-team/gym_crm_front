import { useState } from "react";
import { useQuery } from "react-query";
import { getTrainerIdByAccountIdRequest, trainerInfoRequest, trainerMyMembersRequest } from "../apis/api/trainer";
import { selectHolidayRequest } from "../apis/api/holiday";

const useTrainerApis = (accountId) => {
    const [membersList, setMembersList] = useState([]);
    const [trainerProfile, setTrainerProfile] = useState([]);
    const [trainerId, setTrainerId] = useState("");
    const [allHolidayList, setAllHolidayList] = useState([]);
    
    const trainerMyMembersQuery = useQuery(["trainerMyMembersQuery"], () => trainerMyMembersRequest({ accountId }), {
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!accountId,
        onSuccess: (response) => {
            setMembersList(() => response.data);
        },
    });

    const trainerInfoQuery = useQuery(["trainerInfoQuery"], () => trainerInfoRequest({ accountId }), {
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!accountId,
        onSuccess: (response) => {
            setTrainerProfile(() => response.data);
        },
    });

    const getTrainerIdByAccountIdQuery = useQuery(
        ["getTrainerIdByAccountIdQuery"],
        () => getTrainerIdByAccountIdRequest({ accountId }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!accountId,
            onSuccess: (response) => {
                setTrainerId(() => response.data);
            },
        }
    );
    const selectHolidayQuery = useQuery(["selectHolidayQuery"], () => selectHolidayRequest({ accountId }), {
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!accountId,
        onSuccess: (response) => {
            setAllHolidayList(() => {
                const groupByDate = response.data.reduce((groups, holiday) => {
                    const { holidayDate } = holiday;
                    if (!groups[holidayDate]) {
                        groups[holidayDate] = [];
                    }
                    groups[holidayDate].push(holiday);
                    return groups;
                }, {});

                return Object.keys(groupByDate)
                        .map((date) => {
                            return {
                                holidayDate: date,
                                startTimeId: groupByDate[date][0]["timeId"],
                                endTimeId: groupByDate[date][groupByDate[date].length - 1]["timeId"],
                                name: groupByDate[date][0]["name"],
                                confirm: groupByDate[date][0]["confirm"],
                            };
                        })
                        .sort((a, b) => new Date(b.holidayDate) - new Date(a.holidayDate))
            });
        },
    });

    return { trainerId, trainerProfile, setTrainerProfile, membersList, allHolidayList };
};

export default useTrainerApis;
