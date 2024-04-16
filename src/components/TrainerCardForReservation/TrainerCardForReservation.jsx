/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TrainerCardForReservation({ key, onClick, name, profileUrl }) {
    return (
        <div css={s.layout} key={key}>
            <div css={s.photoBox}>
                <img src={profileUrl} />
            </div>
            <div css={s.infoBox}>
                <h1>{name}</h1>
            </div>
        </div>
    );
}

export default TrainerCardForReservation;
