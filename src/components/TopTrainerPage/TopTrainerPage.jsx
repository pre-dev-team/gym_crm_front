/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style'; // 스타일 파일 불러오기
import { useQueryClient } from 'react-query';
import { getTopRatedTrainersInformationRequest } from '../../apis/api/trainer'; // 트레이너 API 함수 불러오기

function TopTrainerPage(props) {
  const [trainerReviews, setTrainerReviews] = useState([]); // 트레이너 리뷰 상태 관리
  const queryClient = useQueryClient(); // 쿼리 클라이언트 사용

  useEffect(() => {
    const fetchTopRatedTrainersInformation = async () => {
      try {
        // Step 1: 상위 3명의 트레이너 정보를 가져옵니다.
        console.log("Fetching top rated trainers information...");
        const response = await getTopRatedTrainersInformationRequest(); // API 호출
        const topRatedTrainers = response.data; // 상위 트레이너 정보
        console.log("Top rated trainers data:", topRatedTrainers); // 상태 확인
        // Step 2: 각 트레이너의 가장 높은 점수를 가진 리뷰를 선택합니다.
        console.log("Selecting top reviews for each trainer...");
        const topReviews = topRatedTrainers.map(trainer => ({
            trainerName: trainer.trainerName,
            trainerProfileImgUrl: trainer.trainerProfileImgUrl,
            reviewScore: trainer.reviewScore,
            reviewText: trainer.reviewText
        }));

        // 선택된 리뷰를 상태에 설정
        console.log("Setting trainer reviews to state...");
        setTrainerReviews(topReviews);
      } catch (error) {
        console.log("Error occurred while fetching top rated trainers information:", error);
      }
    };

    fetchTopRatedTrainersInformation(); // 페이지 로드 시 데이터 가져오기
  }, []); // 페이지 로드 시 한 번만 실행

  return (
    <div css={s.container}>
      <div css={s.title}>Top Rated Trainers</div>
      <div css={s.table}>
        {trainerReviews.map((review, index) => (
          <div css={s.row} key={index}>
            <div css={s.cell}>
              <img css={s.img} src={review.trainerProfileImgUrl} alt="Trainer" />
            </div>
            <div css={s.cell}>
              <div css={s.trainerName}>{review.trainerName}</div>
              <div css={s.ratings}>{review.reviewScore}점</div>
              <div css={s.reviews}>{review.reviewText}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopTrainerPage;
