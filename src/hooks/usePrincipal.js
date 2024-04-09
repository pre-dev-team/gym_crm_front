import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

const usePrincipal = () => {
    const [accountId, setAccountId] = useState(0);
    const queryClient = useQueryClient();

    useEffect(() => {
        const principalData = queryClient.getQueryData("principalQuery")?.data.accountId;

        if (!!principalData) {
            setAccountId(() => principalData);
        }
    }, [queryClient]);

    return accountId;
};

export default usePrincipal;
