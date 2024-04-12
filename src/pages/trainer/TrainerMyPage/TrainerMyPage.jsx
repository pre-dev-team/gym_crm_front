/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as s from "./style";
import ko from "date-fns/locale/ko";
import dayjs from "dayjs";
import MyMembers from "../../../components/MyMembers/MyMembers";
import { useQueryClient } from "react-query";
import TrainerProfile from "../../../components/TrainerProfile/TrainerProflie";
import { getTrainerIdByAccountIdRequest, trainerInfoRequest, trainerMyMembersRequest } from "../../../apis/api/trainer";
import { getPrincipalRequest } from "../../../apis/api/principal";
import TodayReservation from "../../../components/TodayReservation/TodayReservation";
import { getTodayReservationRequest } from "../../../apis/api/reservation";


function TrainerMyPage(props) {
  const dayjsDate = dayjs();
  const [selectDate, setSelectDate] = useState(new Date());
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData("principalQuery");
  const [membersList, setMembersList] = useState([]);
  const [trainerProfile, setTrainerProfile] = useState([]);
  const [trainerId, setTrainerId] = useState('');
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const accountId = principalData?.data.accountId;

    const fetchData = async () => {
      try {

        const membersResponse = await trainerMyMembersRequest({ accountId });
        setMembersList(membersResponse.data);
        const trainerProfileResponse = await trainerInfoRequest({ accountId });
        setTrainerProfile(trainerProfileResponse.data);

        const trainerIdResponse = await getTrainerIdByAccountIdRequest({ accountId });
        setTrainerId(trainerIdResponse.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, [principalData]);

  dayjs("2021-07-17").format("YYYY년 M월 D일");

  return (
    <>
      <div css={s.layout}>
        <div css={s.container}>
          <div css={s.trainerBox}>
            <div css={s.trainerProfileBox}>
              <div>트레이너 정보</div>
              <TrainerProfile trainerProfile={trainerProfile} />
            </div>
            <div css={s.myMembersBox}>
              <div>내 회원들</div>
              <MyMembers membersList={membersList} />
            </div>
          </div>
          <div css={s.todayScheduleBox}>
            <div>오늘 일정 및 내일 일정</div>
            <TodayReservation trainerId={trainerId} today={today} />
          </div>
        </div>
        <div css={s.allReservationBox}>
          <ul css={s.allReservation}>
            <div>전체 일정 조회</div>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );

}

export default TrainerMyPage;
