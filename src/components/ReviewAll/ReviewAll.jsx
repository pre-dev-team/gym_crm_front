/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style';
import instance from '../../apis/utils/instance';


function ReviewAll(props) {

  const [ trainerReviews, setTrainerReviews ] = useState([]);

  useEffect(() => {
    const fetchTrainerReviews = async () => {
      try{
        const response = await instance.get("/trainer/all");
        setTrainerReviews(response.data);
      } catch(error) {
        console.log("error", error);
      }
    };
    fetchTrainerReviews();
  }, []);

  return (
    <div css={s.container}>
      <div css={s.title}>우리 Gym의 트레이너들을 확인하세요</div>
      <div css={s.table}>
        {trainerReviews.map((review, index) => (
          <div css={s.row} key={index}>
            <div css={s.cell}>
              <img css={s.img} src={review.trainerImage} alt="Trainer" />
            </div>
            <div css={s.cell}>
              <div css={s.trainerName}>{review.trainerName}</div>
              <div css={s.ratings}>별점: {review.reviewScore}</div>
              <div css={s.reviews}>리뷰: {review.reviewText}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewAll;