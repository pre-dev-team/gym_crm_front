/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SelectInbodyModal({ inbodyInformation }) {
    const handleInbodyClick = (inbodyUrl) => {
        window.open(`${inbodyUrl}`, "_blank", " width=768, height=900");
    };

    return (
        <div css={s.test}>
            <table css={s.table2}>
                <thead css={s.head}>
                    <tr css={s.tr}>
                        <th>번호</th>
                        <th>이름</th>
                        <th>몸무게</th>
                        <th>근육량</th>
                        <th>체지방량</th>
                        <th>인바디</th>
                    </tr>
                </thead>
                <tbody>
                    {inbodyInformation.map((inbody, index) => (
                        <tr css={s.tr2} key={inbody.userId}>
                            <td>{index + 1}</td>
                            <td>{inbody.name}</td>
                            <td>{inbody.weight} Kg</td>
                            <td>{inbody.muscleMass} Kg</td>
                            <td>{inbody.fatMass} Kg</td>
                            <button onClick={() => handleInbodyClick(inbody.inbodyUrl)}>인바디</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SelectInbodyModal;
