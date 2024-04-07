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
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectTimeId, setSelectTimeId] = useState(0);
    const [isSelect, setIsSelect] = useState(false);
    const [possibleTimes, setPossibleTimes] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const queryClient = useQueryClient();
    const principalDate = queryClient.getQueriesData("principalQuery");

    // #########################################시간관련######################################### //
    const getTimedurationQuery = useQuery(["getTimedurationQuery"], getReservationTimeRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setSchedule(() => response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    useEffect(() => {
        const today = new Date();
        const isSameDate = today.getDate() === selectDate.getDate();
        const isSameMonth = today.getMonth() === selectDate.getMonth();
        const isSameYear = today.getFullYear() === selectDate.getFullYear();
        if (isSameDate && isSameMonth & isSameYear) {
            setPossibleTimes(() => schedule.filter((time) => time.timeId + 9 > new Date().getHours() + 1));
        } else {
            setPossibleTimes(() => schedule);
        }
    }, [selectDate, selectTimeId]);
    // #########################################시간관련######################################### //
    // #########################################예약관련######################################### //

    //선택 날짜 예약정보GET
    const getDayReservationQuery = useQuery(
        ["getDayReservationQuery", selectDate],
        getDayReservationRequest({
            date: selectDate,
        }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response);
            },
        }
    );

    //로그인 유저 예약정보GET
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
    // #########################################예약관련######################################### //

    // #########################################클릭 핸들러######################################### //
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

    const handleTimeClick = (timeId) => {
        setSelectTimeId(() => timeId);
        if (selectTimeId === timeId) {
            setSelectTimeId(() => 0);
        }
    };
    // #########################################클릭 핸들러######################################### //

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
