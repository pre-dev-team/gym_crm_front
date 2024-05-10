/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TrainerCardForReservation({ key, onClick, name, profileUrl }) {
    return (
        <div css={s.layout} key={key} onClick={onClick}>
            <div css={s.photoBox}>
                <img src={profileUrl} />
            </div>
            <div css={s.letterBox}>
                <div css={s.infoBox}>
                    <h1>{name}</h1>
                </div>
                <span>예약하기</span>
            </div>
        </div>
    );
}

export default TrainerCardForReservation;
