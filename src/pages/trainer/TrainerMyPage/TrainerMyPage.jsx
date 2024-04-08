/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as s from "./style";
import ko from "date-fns/locale/ko";
import dayjs from "dayjs";
import MyMembers from "../../../components/MyMembers/MyMembers";
import { useQueryClient } from "react-query";

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
    const [accountId, setAccountId] = useState(null);

    useEffect(() => {
      console.log(principalData)
      setAccountId(() => principalData?.data.accountId)
    },[])

    dayjs("2021-07-17").format("YYYY년 M월 D일");

    return (
        <>
        <div css={s.layout}>
          <div css={s.tainerProfileBox}>
            <div>트레이너 프로필</div>
          </div>
          <div css={s.todayScheduleBox}>
            <div>내 회원들</div>
            <MyMembers accountId={accountId} />
          </div>
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
        <div css={s.myMembersBox}>
          <div>오늘 및 내일 일정</div>
          <div></div>
        </div>
        
      </>
    );
}

export default TrainerMyPage;