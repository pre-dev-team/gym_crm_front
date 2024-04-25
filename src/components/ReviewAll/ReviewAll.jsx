/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style"; // 스타일 파일 불러오기
import { getTopRatedTrainersInformationRequest } from "../../apis/api/review"; // 트레이너 API 함수 불러오기
import { FaStar } from "react-icons/fa";

const makeStarByScore = (score) => {
    let stars = [];
    for (let i = 0; i < score; i++) {
        stars.push(<FaStar color="gold" key={i} />);
    }
    return stars;
};

function ReviewAll(props) {
    const [trainerReviews, setTrainerReviews] = useState([]); // 트레이너 리뷰 상태 관리

    useEffect(() => {
        const fetchTopRatedTrainersInformation = async () => {
            try {
                // Step 1: 상위 3명의 트레이너 정보를 가져옵니다.
                console.log("Fetching top rated trainers information...");
                const response = await getTopRatedTrainersInformationRequest(); // API 호출
                const topRatedTrainers = response.data; // 상위 트레이너 정보

                // Step 2: 각 트레이너의 가장 높은 점수를 가진 리뷰를 선택합니다.
                console.log("Selecting top reviews for each trainer...");
                const topReviews = topRatedTrainers.map((trainer) => ({
                    trainerName: trainer.trainerName,
                    trainerProfileImgUrl: trainer.trainerProfileImgUrl,
                    reviewScore: trainer.reviewScore,
                    reviewText: trainer.reviewText,
                }));

                // 선택된 리뷰를 상태에 설정
                console.log("Setting trainer reviews to state...");
                setTrainerReviews(topReviews);
            } catch (error) {
                console.log("Error occurred while fetching top rated trainers information:", error);
            }
        };

        fetchTopRatedTrainersInformation(); // 페이지 로드 시 데이터 가져오기
    }, []); // 사용자 데이터가 변경될 때마다 실행

    return (
        <div css={s.container}>
            <h1>@TOP3 TRAINERS</h1>
            <div css={s.cardBox}>
                {trainerReviews.map((trainer, index) => {
                    return (
                        <div css={s.card} key={index}>
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
                                    {makeStarByScore(trainer.reviewScore)}({trainer.reviewScore}/10)
                                </div>
                                <div css={s.textBox}>"{trainer.reviewText}"</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ReviewAll;
