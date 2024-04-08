/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import { useQuery } from "react-query";
import { trainerMyMembersRequest } from '../../apis/api/trainer';

function MyMembers({ accountId }) {
    const [ membersList, setMembersList ] = useState([]);

    const getMembersQuery = useQuery(
        ["getMembersQuery"],
        () => trainerMyMembersRequest({
            accountId: accountId
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response);
            },
            onError: error => {

            }
            ,enabled: !!accountId
        }
    )

    return (
        <div>
            <li>하나</li>
            <li>둘</li>
        </div>
    );
}

export default MyMembers;