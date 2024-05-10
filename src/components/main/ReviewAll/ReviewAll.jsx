/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style"; // 스타일 파일 불러오기
import { getTopRatedTrainersInformationRequest } from "../../../apis/api/review"; // 트레이너 API 함수 불러오기
import { FaStar } from "react-icons/fa";
import { useQuery } from "react-query";

const makeStarByScore = (score) => {
    let stars = [];
    for (let i = 0; i < score; i++) {
        stars.push(<FaStar color="gold" key={i} />);
    }
    return stars;
};

function ReviewAll(props) {
    const [trainerReviews, setTrainerReviews] = useState([]); // 트레이너 리뷰 상태 관리

    const getTopRatedTrainersInformationQuery = useQuery(
        ["getTopRatedTrainersInformationQuery"],
        getTopRatedTrainersInformationRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setTrainerReviews(() => response.data);
            },
        }
    );

    return (
        <div css={s.container}>
            <h1>@TOP3 TRAINERS</h1>
            <div css={s.cardBox}>
                {trainerReviews.map((trainer, index) => {
                    return (
                        <div css={s.card} key={trainer.trainerReviewId}>
                            <div css={s.leftBox}>
                                <div css={s.photoBox}>
                                    <img src={trainer.trainerProfileImgUrl} alt="trainer" />
                                </div>
                            </div>
                            <div css={s.rightBox}>
                                <h1>
                                    @{index + 1}
                                    {trainer.trainerName}
                                </h1>
                                <div css={s.starBox}>
                                    {makeStarByScore(trainer.trainerReviewScore)}{" "}
                                    <div>({trainer.trainerReviewScore}/10)</div>
                                </div>

                                <div css={s.textBox}>"{trainer.trainerReviewText}"</div>
                                <div>-{trainer.username} 고객님</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ReviewAll;
