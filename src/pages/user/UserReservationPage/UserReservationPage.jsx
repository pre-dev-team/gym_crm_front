/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import { useMutation } from "react-query";
import { userReservationRequest } from "../../../apis/api/reservation";
import TrainerCardForReservation from "../../../components/TrainerCardForReservation/TrainerCardForReservation";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function UserReservationPage(props) {
    const dayjsDate = dayjs();
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectPeriod, setSelectPeriod] = useState(0);
    const [isSelect, setIsSelect] = useState(false);
    const [possiblePeriod, setPossiblePeriod] = useState([]);

    useEffect(() => {
        setPossiblePeriod(() =>
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter((time) => time + 9 > new Date().getHours() + 1)
        );
    }, [selectPeriod]);

    const userReservationQuery = useMutation({
        mutationKey: "userReservationQuery",
        mutationFn: userReservationRequest,
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log(error);
        },
        retry: 0,
    });

    const handleResevationClick = (trainerId) => {
        console.log({
            userId: null,
            trainderId: trainerId,
            timeId: selectPeriod,
            date: selectDate,
        });

        if (window.confirm("예약하시겠습니까?")) {
            userReservationQuery.mutate({
                userId: null,
                trainderId: trainerId,
                timeId: selectPeriod,
                date: selectDate,
            });
        }
    };

    dayjs("2021-07-17").format("YYYY년 M월 D일");

    const handlePeriodClick = (periodId) => {
        setSelectPeriod(() => periodId);
    };

    return (
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

            <div css={s.periodBox(isSelect)}>
                {possiblePeriod.map((periodId) => {
                    return (
                        <div
                            key={periodId}
                            onClick={() => handlePeriodClick(periodId)}
                            id={periodId}
                            css={s.periodButton(periodId === selectPeriod)}
                        >
                            {periodId + 9}:00 ~ {periodId + 10}:00
                        </div>
                    );
                })}
            </div>
            <div css={s.trainerBox}>
                <TrainerCardForReservation profileUrl={null} name={null} onClick={() => handleResevationClick(1)} />
                <TrainerCardForReservation profileUrl={null} name={null} onClick={() => handleResevationClick(1)} />
                <TrainerCardForReservation profileUrl={null} name={null} onClick={() => handleResevationClick(1)} />
                <TrainerCardForReservation profileUrl={null} name={null} onClick={() => handleResevationClick(1)} />
            </div>
        </div>
    );
}

export default UserReservationPage;
