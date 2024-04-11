/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import instance from "../../apis/utils/instance";

function TrainerInformation(props) {
    return (
        <div>
            <div css={{ textAlign: "center" }}>트레이너 정보</div>
            <div css={s.layout}>
                <div css={s.trainerProfile}>
                    <div css={s.profileImg}>
                        <img
                            css={s.imgStyle}
                            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdi0GrI%2FbtqyyWdEYM8%2FLbDOJG6QuYVXzFI9AlMq60%2Fimg.png"
                            alt="image"
                        />
                    </div>
                    <div css={s.trainerName}>트레이너 이름</div>
                </div>
                <div></div>
                <div css={s.info}>
                    <div css={s.ratings}>별점</div>
                    <div css={s.reviews}>리뷰</div>
                </div>
            </div>
        </div>
    );
}

export default TrainerInformation;
