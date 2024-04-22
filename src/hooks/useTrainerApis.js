import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getTrainerIdByAccountIdRequest, trainerInfoRequest, trainerMyMembersRequest } from "../apis/api/trainer";
import { deleteHolidayRequest, selectHolidayRequest } from "../apis/api/holiday";

const useTrainerApis = (accountId) => {
    const [membersList, setMembersList] = useState([]);
    const [trainerProfile, setTrainerProfile] = useState([]);
    const [trainerId, setTrainerId] = useState("");
    const [allHolidayList, setAllHolidayList] = useState([]);

    const trainerMyMembersQuery = useQuery(["trainerMyMembersQuery"], () => trainerMyMembersRequest({accountId}),{
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!accountId,
        onSuccess: response => {
            setMembersList(() => response.data);
        }
    });
    const trainerInfoQuery = useQuery(["trainerInfoQuery"], () => trainerInfoRequest({accountId}),{
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!accountId,
        onSuccess: response => {
            setTrainerProfile(() => response.data);
        }
    });
    const getTrainerIdByAccountIdQuery = useQuery(["getTrainerIdByAccountIdQuery"], () => getTrainerIdByAccountIdRequest({accountId}),{
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!accountId,
        onSuccess: response => {
            setTrainerId(() => response.data);
        }
    });
    const selectHolidayQuery = useQuery(["selectHolidayQuery"], () => selectHolidayRequest({accountId}), {
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: !!accountId,
        onSuccess: response => {
            setAllHolidayList(() => response.data);
        }
    });

    return {trainerId, trainerProfile, membersList, allHolidayList };
};

export default useTrainerApis;
