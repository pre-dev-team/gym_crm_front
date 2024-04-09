/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as s from "./style";
import ko from "date-fns/locale/ko";
import dayjs from "dayjs";
import MyMembers from "../../../components/MyMembers/MyMembers";
import { useQueryClient } from "react-query";
import { getTrainerIdByAccountIdRequest, trainerMyMembersRequest } from "../../../apis/api/trainer";
import { getPrincipalRequest } from "../../../apis/api/principal";
import TodayReservation from "../../../components/TodayReservation/TodayReservation";
import { getTodayReservationRequest } from "../../../apis/api/reservation";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function TrainerMyPage(props) {
    const dayjsDate = dayjs();
    const [selectDate, setSelectDate] = useState(new Date());
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const [ membersList, setMembersList ] = useState([]);
    const [trainerId, setTrainerId] = useState('');
    const [today, setToday] = useState(new Date());

    useEffect(() => {
      const fetchData = async () => {
          try {
              const principalResponse = await getPrincipalRequest();
              console.log(principalResponse);
              const accountId = principalResponse.data.accountId;

              const trainerIdResponse = await getTrainerIdByAccountIdRequest({ accountId });
              console.log(trainerIdResponse);
              setTrainerId(trainerIdResponse.data.trainerId);

              const membersResponse = await trainerMyMembersRequest({ accountId });
              setMembersList(membersResponse.data);             
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      fetchData();
    }, []);

    


    dayjs("2021-07-17").format("YYYY년 M월 D일");

    return (
        <>
        <div css={s.layout}>
          <div css={s.tainerProfileBox}>
            <div>트레이너 프로필</div>
          </div>
          <div css={s.todayScheduleBox}>
            <div>오늘 일정</div>
            <TodayReservation trainerId={trainerId} today={today}/>
          </div>
        </div>
        <div css={s.myMembersBox}>
          <div>내 회원들</div>
          <MyMembers membersList={membersList}/>
        </div>
        <div css={s.layout}>
          <div css={s.calenderBox}>
            <DatePicker
              onChange={(date) => {
                setSelectDate(date);
                console.log(date.toLocaleString("ko-KR"));
              }}
              selected={selectDate}
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              locale={ko}
              todayButton={true}
              customInput={<CustomInput />}
            />
          </div>
        </div>
      </>
    );
}

export default TrainerMyPage;