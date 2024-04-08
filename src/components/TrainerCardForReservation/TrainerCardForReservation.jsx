/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TrainerCardForReservation({ key, onClick, name, profileUrl }) {
    return (
        <div css={s.layout} key={key}>
            <div css={s.photoBox}>
                <img src={profileUrl} />
            </div>
            <div css={s.infoBox}>
                <div css={s.nameBox}>{name}</div>
                <div css={s.buttonBox}>
                    <button onClick={onClick}>예약하기</button>
                </div>
            </div>
        </div>
    );
}

export default TrainerCardForReservation;
