import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getTrainerIdByAccountIdRequest, trainerInfoRequest, trainerMyMembersRequest } from "../apis/api/trainer";

const useTrainerApis = (accountId) => {
    const [membersList, setMembersList] = useState([]);
    const [trainerProfile, setTrainerProfile] = useState([]);
    const [trainerId, setTrainerId] = useState("");

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

    return {trainerId, trainerProfile, membersList};
};

export default useTrainerApis;
