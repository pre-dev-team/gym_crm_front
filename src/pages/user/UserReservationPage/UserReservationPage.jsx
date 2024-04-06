/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
    getDayReservationRequest,
    getReservationTimeRequest,
    userReservationRequest,
} from "../../../apis/api/reservation";
import TrainerCardForReservation from "../../../components/TrainerCardForReservation/TrainerCardForReservation";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function UserReservationPage(props) {
    const dayjsDate = dayjs();
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectTimeId, setSelectTimeId] = useState(0);
    const [isSelect, setIsSelect] = useState(false);
    const [possibleTimes, setPossibleTimes] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const queryClient = useQueryClient();
    const principalDate = queryClient.getQueriesData("principalQuery");

    const getTimedurationQuery = useQuery(["getTimedurationQuery"], getReservationTimeRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response);
            setSchedule(() => response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const getDayReservationQuery = useQuery(["getDayReservationQuery"], getDayReservationRequest(selectDate), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response);
            setSchedule(() => response.data);
        },
    });

    useEffect(() => {
        setPossibleTimes(() => schedule.filter((time) => time.timeId + 9 > new Date().getHours() + 1));
    }, [selectTimeId]);

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
            timeId: selectTimeId,
            date: selectDate,
        });

        if (window.confirm("예약하시겠습니까?")) {
            userReservationQuery.mutate({
                userId: null,
                trainderId: trainerId,
                timeId: selectTimeId,
                date: selectDate,
            });
        }
    };

    dayjs("2021-07-17").format("YYYY년 M월 D일");

    const handleTimeClick = (timeId) => {
        setSelectTimeId(() => timeId);
        if (selectTimeId === timeId) {
            setSelectTimeId(() => 0);
        }
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
                {possibleTimes.map((time) => {
                    return (
                        <div
                            key={time.timeId}
                            onClick={() => handleTimeClick(time.timeId)}
                            id={time.timeId}
                            css={s.periodButton(time.timeId === selectTimeId)}
                        >
                            {time.timeDuration}
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
