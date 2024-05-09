/** @jsxImportSource @emotion/react */
import MyMembersModal from "../../modals/trainerModal/MyMembersModal/MyMembersModal";
import * as s from "./style";

function MyMembers({ membersList, accountId }) {
    const handleInbodyClick = (id) => {
        window.open(`http://localhost:3000/inbody?dlsqkel=${id + 11}`, "_blank", " width=355, height=360");
    };

    return (
        <div css={s.layout}>
            <table css={s.table}>
                <thead css={s.head}>
                    <tr>
                        <th>이름</th>
                        <th>조회버튼</th>
                        <th>인바디버튼</th>
                    </tr>
                </thead>
                <tbody css={s.membersBox}>
                    {membersList.map((member) => (
                        <tr key={member.userId}>
                            <td>{member.name}</td>
                            <td>
                                <MyMembersModal accountId={accountId} userId={member.userId} />
                            </td>
                            <td>
                                <button css={s.memeberInfoButton} onClick={() => handleInbodyClick(member.userId)}>
                                    인바디입력
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyMembers;
