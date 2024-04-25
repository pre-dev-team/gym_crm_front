/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MyMembers({ membersList }) {
    const handleInbodyClick = (id) => {
        window.open(`http://localhost:3000/inbody?dlsqkel=${id + 11}`, "_blank", " width=355, height=360");
    };
    return (
        <div css={s.layout}>
            <ul css={s.membersBox}>
                {membersList.map((member) => (
                    <li key={member.userId} css={s.member}>
                        <p>{member.name}</p>
                        <button css={s.memeberInfoButton} onClick={() => console.log(membersList)}>
                            회원정보조회
                        </button>
                        <button css={s.memeberInfoButton}>
                            <a onClick={() => handleInbodyClick(member.userId)}>인바디입력</a>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyMembers;
