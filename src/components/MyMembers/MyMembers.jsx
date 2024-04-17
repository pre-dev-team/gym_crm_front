/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import { useQuery } from 'react-query';
import { trainerMyMembersRequest } from '../../apis/api/trainer';

function MyMembers({ membersList }) {

    return (
        <div css={s.layout}>
             <ul css={s.membersBox}>
                {membersList.map(member => (
                    <li key={member.id} css={s.member}>
                        <p>{member.name}</p>
                        <button css={s.selectUser}>회원정보조회</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyMembers;