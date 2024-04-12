/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import { useQuery } from 'react-query';
import { trainerMyMembersRequest } from '../../apis/api/trainer';

function MyMembers({ membersList }) {

    return (
        <div>
             <ul css={s.membersBox}>
                {membersList.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyMembers;