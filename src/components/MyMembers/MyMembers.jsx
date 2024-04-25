/** @jsxImportSource @emotion/react */
import MyMembersModal from '../modals/MyMembersModal/MyMembersModal';
import * as s from './style';
import { Link } from 'react-router-dom'; // Link 컴포넌트 import

function MyMembers({ membersList }) {
    return (
        <div css={s.layout}>
            <ul css={s.membersBox}>
                {membersList.map(member => (

                    <li key={member.id} css={s.member}>
                        <p>{member.name}</p>
                        <MyMembersModal />
                        <Link to={`/inbody/${member.userId}`}><button>Inbody 입력</button></Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyMembers;

