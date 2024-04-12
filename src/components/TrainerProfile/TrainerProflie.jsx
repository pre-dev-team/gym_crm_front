/** @jsxImportSource @emotion/react */
import * as s from './style';

function TrainerProfile({ trainerProfile }) {
  const { name, phone, email, trainerProfileImgUrl } = trainerProfile;

  return (
    <div>
      <div css={s.profileContainer}>
        <div css={s.profileImg}>
          <img src={trainerProfileImgUrl} alt="Trainer Profile" />
        </div>
      </div>
      <div css={s.profileInfo}>
          <div>이름: {name}</div>
          <div>phone: {phone}</div>
          <div>email: {email}</div>
        </div>
    </div>
  );
}

export default TrainerProfile;