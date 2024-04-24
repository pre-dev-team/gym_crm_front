/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import * as s from "./style";
import { Link } from "react-router-dom"; // Link 컴포넌트 import

function MyMembers({ membersList }) {
    const handleInbodyClick = () => {
        window.open();
    };
    useEffect(() => {});
    return (
        <div css={s.layout}>
            <ul css={s.membersBox}>
                {membersList.map((member) => (
                    <li key={member.id} css={s.member}>
                        <p>{member.name}</p>
                        <button css={s.selectUser} onClick={() => console.log(membersList)}>
                            회원정보조회
                        </button>
                        <Link to={`/inbody?userId=${member.userId}`}>인바디입력</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyMembers;
