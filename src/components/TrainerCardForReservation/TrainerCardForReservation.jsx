/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TrainerCardForReservation({ onClick, name }) {
    return (
        <div css={s.layout}>
            <div css={s.photoBox}>
                <img src="https://avatars.githubusercontent.com/u/155143881?v=4&size=40" />
            </div>
            <div css={s.infoBox}>
                <div css={s.nameBox}>트레이너이름{name}</div>
                <div css={s.buttonBox}>
                    <button onClick={onClick}>예약하기</button>
                </div>
            </div>
        </div>
    );
}

export default TrainerCardForReservation;
