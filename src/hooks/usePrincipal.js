import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

const usePrincipal = () => {
    const [accountId, setAccountId] = useState(0);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery")?.data.accountId;

    useEffect(() => {
        if (!!principalData) {
            setAccountId(() => principalData);
        }
    }, [principalData]);

    return accountId;
};

export default usePrincipal;
