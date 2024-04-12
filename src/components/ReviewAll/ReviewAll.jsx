/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import * as s from './style'; // 스타일 파일 불러오기
import { useQueryClient } from 'react-query';
import { getTopRatedTrainersInformationRequest } from '../../apis/api/trainer'; // 트레이너 API 함수 불러오기

function ReviewAll(props) {
  const [trainerReviews, setTrainerReviews] = useState([]); // 트레이너 리뷰 상태 관리
  const queryClient = useQueryClient(); // 쿼리 클라이언트 사용
  const principalData = queryClient.getQueryData("principalQuery"); // 사용자 데이터 가져오기

  useEffect(() => {
    const fetchTopRatedTrainersInformation = async () => {
      try {
        // 사용자 데이터가 없으면 종료
        if (!principalData) {
          console.log("Principal data is empty. Skipping fetch...");
          return;
        }

        // Step 1: 상위 3명의 트레이너 정보를 가져옵니다.
        console.log("Fetching top rated trainers information...");
        const response = await getTopRatedTrainersInformationRequest(); // API 호출
        const topRatedTrainers = response.data; // 상위 트레이너 정보

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
  }, [principalData]); // 사용자 데이터가 변경될 때마다 실행

  return (
    <div css={s.container}>
      <div css={s.title}>우리 Gym의 트레이너들을 확인하세요</div>
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

export default ReviewAll;

// /** @jsxImportSource @emotion/react */
// import { useEffect, useState } from 'react';
// import * as s from './style'; // 스타일 파일 불러오기
// import { useQueryClient } from 'react-query';
// import { getTopRatedTrainersInformationRequest } from '../../apis/api/trainer'; // 트레이너 API 함수 불러오기

// function ReviewAll(props) {
//   const [trainerReviews, setTrainerReviews] = useState([]); // 트레이너 리뷰 상태 관리
//   const queryClient = useQueryClient(); // 쿼리 클라이언트 사용
//   const principalData = queryClient.getQueryData("principalQuery"); // 사용자 데이터 가져오기

//   useEffect(() => {
//     const fetchTopRatedTrainersInformation = async () => {
//       try {
//         // 사용자 데이터가 없으면 종료
//         if (!principalData) {
//           console.log("Principal data is empty. Skipping fetch...");
//           return;
//         }

//         // Step 1: 상위 3명의 트레이너 정보를 가져옵니다.
//         console.log("Fetching top rated trainers information...");
//         const response = await getTopRatedTrainersInformationRequest(); // API 호출
//         const topRatedTrainers = response.data; // 상위 트레이너 정보

//         // Step 2: 각 트레이너의 가장 높은 점수를 가진 리뷰를 선택합니다.
//         console.log("Selecting top reviews for each trainer...");
//         const topReviews = await Promise.all(topRatedTrainers.map(async trainer => {
//           // 각 트레이너의 리뷰 중 가장 높은 점수를 가진 리뷰 선택
//           const topReview = trainer.reviews.reduce((max, review) => (review.reviewScore > max.reviewScore ? review : max), trainer.reviews[0]);
//           return { ...topReview, trainerName: trainer.trainerName, trainerProfileImgUrl: trainer.trainerProfileImgUrl };
//         }));

//         // 선택된 리뷰를 상태에 설정
//         console.log("Setting trainer reviews to state...");
//         setTrainerReviews(topReviews);
//       } catch (error) {
//         console.log("Error occurred while fetching top rated trainers information:", error);
//       }
//     };

//     fetchTopRatedTrainersInformation(); // 페이지 로드 시 데이터 가져오기
//   }, [principalData]); // 사용자 데이터가 변경될 때마다 실행

//   return (
//     <div css={s.container}>
//       <div css={s.title}>우리 Gym의 트레이너들을 확인하세요</div>
//       <div css={s.table}>
//         {trainerReviews.map((review, index) => (
//           <div css={s.row} key={index}>
//             <div css={s.cell}>
//               <img css={s.img} src={review.trainerProfileImgUrl} alt="Trainer" />
//             </div>
//             <div css={s.cell}>
//               <div css={s.trainerName}>{review.trainerName}</div>
//               <div css={s.ratings}>{review.reviewScore}점</div>
//               <div css={s.reviews}>{review.reviewText}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ReviewAll;

// /** @jsxImportSource @emotion/react */
// import { useEffect, useState } from 'react';
// import * as s from './style';
// import { useQueryClient } from 'react-query';
// import { getTopRatedTrainersInformationRequest } from '../../apis/api/trainer';

// function ReviewAll(props) {
//   const [trainerReviews, setTrainerReviews] = useState([]);
//   const queryClient = useQueryClient();
//   const principalData = queryClient.getQueryData("principalQuery");

//   useEffect(() => {
//     const fetchTopRatedTrainersInformation = async () => {
//       try {
//         // Step 1: 상위 3명의 트레이너 정보를 가져옵니다.
//         const response = await getTopRatedTrainersInformationRequest();
//         const topRatedTrainers = response.data;

//         // Step 2: 각 트레이너의 가장 높은 점수를 가진 리뷰를 선택합니다.
//         const topReviews = await Promise.all(topRatedTrainers.map(async trainer => {
//           const topReview = trainer.reviews.reduce((max, review) => (review.reviewScore > max.reviewScore ? review : max), trainer.reviews[0]);
//           return { ...topReview, trainerName: trainer.trainerName, trainerProfileImgUrl: trainer.trainerProfileImgUrl };
//         }));

//         setTrainerReviews(topReviews);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     if (principalData) {
//       fetchTopRatedTrainersInformation();
//     }
//   }, [principalData]);

//   return (
//     <div css={s.container}>
//       <div css={s.title}>우리 Gym의 트레이너들을 확인하세요</div>
//       <div css={s.table}>
//         {trainerReviews.map((review, index) => (
//           <div css={s.row} key={index}>
//             <div css={s.cell}>
//               <img css={s.img} src={review.trainerProfileImgUrl} alt="Trainer" />
//             </div>
//             <div css={s.cell}>
//               <div css={s.trainerName}>{review.trainerName}</div>
//               <div css={s.ratings}>{review.reviewScore}점</div>
//               <div css={s.reviews}>{review.reviewText}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ReviewAll;



// /** @jsxImportSource @emotion/react */
// import { useEffect, useState } from 'react';
// import * as s from './style';
// import { useQueryClient } from 'react-query';
// import { getTrainerReviews, getTrainerIdByAccountIdRequest } from '../../apis/api/trainer';

// function ReviewAll(props) {
//   const [trainerReviews, setTrainerReviews] = useState([]);
//   const queryClient = useQueryClient();
//   const principalData = queryClient.getQueryData("principalQuery");

//   useEffect(() => {
//     const fetchTrainerReviews = async () => {
//       try {
//         const username = principalData?.data.username;
//         const response = await getTrainerReviews({ username });
//         const trainerIds = response.data.map(review => review.trainerId);
//         const uniqueTrainerIds = [...new Set(trainerIds)];
//         const top3TrainerIds = uniqueTrainerIds.slice(0, 3);
//         const topReviews = await Promise.all(top3TrainerIds.map(async trainerId => {
//           const trainerReviews = await getTrainerReviews({ trainerId });
//           return trainerReviews.data.reduce((max, review) => (review.reviewScore > max.reviewScore ? review : max), trainerReviews.data[0]);
//         }));
//         setTrainerReviews(topReviews);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     if (principalData) {
//       fetchTrainerReviews();
//     }
//   }, [principalData]);

//   return (
//     <div css={s.container}>
//       <div css={s.title}>우리 Gym의 트레이너들을 확인하세요</div>
//       <div css={s.table}>
//         {trainerReviews.map((review, index) => (
//           <div css={s.row} key={index}>
//             <div css={s.cell}>
//               <img css={s.img} src={review.trainerProfileImgUrl} alt="Trainer" />
//             </div>
//             <div css={s.cell}>
//               <div css={s.trainerName}>{review.trainerName}</div>
//               <div css={s.ratings}>{review.reviewScore}점</div>
//               <div css={s.reviews}>{review.reviewText}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ReviewAll;



// /** @jsxImportSource @emotion/react */
// import { useEffect, useState } from 'react';
// import * as s from './style';
// import { useQueryClient } from 'react-query';
// import { getTrainerReviews } from '../../apis/api/trainer'; // 이 부분 수정

// function ReviewAll(props) {
//   const [trainerReviews, setTrainerReviews] = useState([]);
//   const queryClient = useQueryClient();
//   const principalData = queryClient.getQueryData("principalQuery");

//   useEffect(() => {
//     const username = principalData?.data.username;
//     console.log(username);
//     const fetchTrainerReviews = async () => {
//       try {
//         const response = await getTrainerReviews({ username });
//         setTrainerReviews(response.data);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     fetchTrainerReviews();
//   }, [principalData]);

//   return (
//     <div css={s.container}>
//       <div css={s.title}>우리 Gym의 트레이너들을 확인하세요</div>
//       <div css={s.table}>
//         {trainerReviews.map((review, index) => (
//           <div css={s.row} key={index}>
//             <div css={s.cell}>
//               <img css={s.img} src={review.trainerProfileImgUrl} alt="Trainer" />
//             </div>
//             <div css={s.cell}>
//               <div css={s.trainerName}>{review.trainerName}</div>
//               <div css={s.ratings}>{review.reviewScore}점</div>
//               <div css={s.reviews}>{review.reviewText}</div>
//             </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default ReviewAll;
