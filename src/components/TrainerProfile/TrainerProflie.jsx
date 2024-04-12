/** @jsxImportSource @emotion/react */
import * as s from './style';

function TrainerProfile({ trainerProfile }) {
  const { username, phone, email, trainerProfileImgUrl } = trainerProfile;

  return (
    <div>
      <div css={s.profileContainer}>
        <div css={s.profileImg}>
          <img src={trainerProfileImgUrl} alt="Trainer Profile" />
        </div>
        <div css={s.profileInfo}>
          <div>아이디: {username}</div>
          <div>전화번호: {phone}</div>
          <div>이메일: {email}</div>
        </div>
      </div>
    </div>
  );
}

export default TrainerProfile;