/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import { useMutation, useQuery } from "react-query";
import { test } from "../../../apis/api/test";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function UserReservationPage(props) {
    const dayjsDate = dayjs();
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectPeriod, setSelectPeriod] = useState();
    const [isSelect, setIsSelect] = useState(false);

    const testQuery = useMutation({
        mutationKey: "testQuery",
        mutationFn: test,
        onSuccess: (response) => {},
        onError: (error) => {},
    });

    dayjs("2021-07-17").format("YYYY년 M월 D일");

    // const getPeriodQuery = useQuery();
    const handlePeriodClick = (periodId) => {
        setSelectPeriod(() => periodId);
    };
    return (
        <div css={s.layout}>
            <div css={s.infoBox}>
                <div>
                    📆{selectDate.toLocaleDateString("ko-KR")} 시간: {}
                </div>
            </div>
            <div>
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

            <div css={s.periodBox(isSelect)}>
                <div onClick={() => handlePeriodClick(1)} id="1" css={s.periodButton(1 === selectPeriod)}>
                    10:00 ~ 11:00
                </div>
                <div onClick={() => handlePeriodClick(2)} id="2" css={s.periodButton(2 === selectPeriod)}>
                    11:00 ~ 12:00
                </div>
                <div onClick={() => handlePeriodClick(3)} id="3" css={s.periodButton(3 === selectPeriod)}>
                    12:00 ~ 13:00
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div>트레이너 검색창</div>
                <div>트레이너 보여주는창</div>
            </div>
        </div>
    );
}

export default UserReservationPage;
