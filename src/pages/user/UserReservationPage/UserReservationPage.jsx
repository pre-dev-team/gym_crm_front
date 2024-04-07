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
    const [schedule, setSchedule] = useState([]);
    const [possibleTimes, setPossibleTimes] = useState([]);
    const [reservedTimeId, setReservedTimeId] = useState([]);
    const [userId, setUserId] = useState(0);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    // #########################################시간관련######################################### //
    // 시간DB 가져옴
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

    //선택 날짜 예약정보를 통해 예약한 시간대는 불활성화 시킴
    const getDayReservationQuery = useQuery(
        ["getDayReservationQuery", selectDate],

        () =>
            getDayReservationRequest({
                date: selectDate,
                userId: userId,
                trainerId: 0,
            }),

        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setReservedTimeId(() => response.data.map((time) => time.timeId));
            },
        }
    );

    useEffect(() => {
        setUserId(() => principalData?.data.userId);
        const today = new Date();
        const isSameDate = today.getDate() === selectDate.getDate();
        const isSameMonth = today.getMonth() === selectDate.getMonth();
        const isSameYear = today.getFullYear() === selectDate.getFullYear();
        if (isSameDate && isSameMonth & isSameYear) {
            setPossibleTimes(() => schedule.filter((time) => time.timeId + 9 > new Date().getHours() + 1));
        } else {
            setPossibleTimes(() => schedule.filter((time) => !reservedTimeId.includes(time.timeId)));
        }
    }, [selectDate, selectTimeId]);
    // #########################################예약관련######################################### //

    //로그인 유저 예약
    const userReservationMutation = useMutation({
        mutationKey: "userReservationMutation",
        mutationFn: userReservationRequest,
        retry: 0,

        onSuccess: (response) => {
            console.log(response.data.timeId);
        },

        onError: (error) => {
            console.log(error);
        },
    });
    // #########################################예약관련######################################### //

    // #########################################클릭 핸들러######################################### //
    const handleResevationClick = (trainerId) => {
        console.log({
            userId: userId,
            trainderId: trainerId,
            timeId: selectTimeId,
            date: selectDate,
        });

        if (window.confirm("예약하시겠습니까?")) {
            userReservationMutation.mutate({
                userId: userId,
                trainerId: trainerId,
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
                    }}
                    selected={selectDate}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    locale={ko}
                    todayButton={true}
                    customInput={<CustomInput />}
                />
            </div>

            <div css={s.periodBox}>
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
                <TrainerCardForReservation profileUrl={null} name={null} onClick={() => handleResevationClick(2)} />
                <TrainerCardForReservation profileUrl={null} name={null} onClick={() => handleResevationClick(3)} />
            </div>
        </div>
    );
}

export default UserReservationPage;
