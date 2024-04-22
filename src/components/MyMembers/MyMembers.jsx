/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as s from './style';
import { useQuery } from 'react-query';
import { trainerMyMembersRequest } from '../../apis/api/trainer';
import { Link } from 'react-router-dom'; // Link 컴포넌트 import

function MyMembers({ membersList }) {
    return (
        <div css={s.layout}>
            <ul css={s.membersBox}>
                {membersList.map(member => (

                    <li key={member.id} css={s.member}>
                        <p>{member.name}</p>
                        <button css={s.selectUser}>회원정보조회</button>
                        <Link to={`/inbody/${member.userId}`}><button>Inbody 입력</button></Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyMembers;

