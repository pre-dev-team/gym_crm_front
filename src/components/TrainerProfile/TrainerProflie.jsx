/** @jsxImportSource @emotion/react */
import * as s from "./style";

function TrainerProfile({ trainerProfile }) {
    const { name, phone, email, username, trainerProfileImgUrl } = trainerProfile;

    return (
        <div>
            <div css={s.profileContainer}>
                <div css={s.profileImg}>
                    <img src={trainerProfileImgUrl} alt="Trainer Profile" />
                </div>
                <div css={s.profileInfo}>
                    <div>아이디: {name}</div>
                    <div>전화번호: {phone}</div>
                    <div>이메일: {email}</div>
                </div>
            </div>
        </div>
    );
}

export default TrainerProfile;
