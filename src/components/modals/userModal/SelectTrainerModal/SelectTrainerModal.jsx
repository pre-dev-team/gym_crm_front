/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import ko from "date-fns/locale/ko";
import { motion } from "framer-motion";
import {
    editReservationByUserRequest,
    getDayReservationRequest,
    userReservationRequest,
} from "../../../../apis/api/reservation";
import DatePicker from "react-datepicker";
import usePrincipal from "../../../../hooks/usePrincipal";
import useSchedule from "../../../../hooks/useSchedule";
import { getDayTrainerHolidayRequst } from "../../../../apis/api/holiday";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function SelectTrainerModal({ trainerId, setIsClick, prevReservationId }) {
    const [selectDate, setSelectDate] = useState(new Date());
    const [possibleTimes, setPossibleTimes] = useState([]);
    const [selectTimeId, setSelectTimeId] = useState(0);
    const [reservedTimeIds, setReservedTimeIds] = useState([]);
    const [holidayTimeIds, setHolidayTimeIds] = useState([]);
    const [isClose, setIsClose] = useState(true);
    const accountId = usePrincipal();
    const schedule = useSchedule();

    useEffect(() => {
        const escModalClose = (e) => {
            if (e.key === "Escape") {
                setIsClick(() => false);
            }
        };

        window.addEventListener("keydown", escModalClose);
        return () => window.removeEventListener("keydown", escModalClose);
    }, [setIsClick]);

    const getDayReservationQuery = useQuery(
        ["getDayReservationQuery", selectDate],
        () =>
            getDayReservationRequest({
                date: selectDate,
                accountId: 0,
                trainerId: trainerId,
            }),

        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setReservedTimeIds(() => response.data.map((time) => time.timeId));
            },
            onError: (error) => {},
            enabled: !!trainerId,
        }
    );

    const getDayTrainerHolidayQuery = useQuery(
        ["getDayTrainerHolidayQuery", selectDate],
        () =>
            getDayTrainerHolidayRequst({
                trainerId: trainerId,
                holidayDate: selectDate,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setHolidayTimeIds(() => response.data);
            },
            enabled: !!trainerId,
        }
    );

    useEffect(() => {
        const today = new Date();
        const isSameDate = today.getDate() === selectDate.getDate();
        const isSameMonth = today.getMonth() === selectDate.getMonth();
        const isSameYear = today.getFullYear() === selectDate.getFullYear();
        if (isSameDate && isSameMonth & isSameYear) {
            setPossibleTimes(() =>
                schedule
                    .filter((time) => time.timeId + 9 > new Date().getHours() + 1)
                    .filter((time) => ![...reservedTimeIds, ...holidayTimeIds].includes(time.timeId))
            );
        } else {
            setPossibleTimes(() =>
                schedule.filter((time) => ![...reservedTimeIds, ...holidayTimeIds].includes(time.timeId))
            );
        }
    }, [selectDate, selectTimeId, reservedTimeIds, holidayTimeIds]);

    const handleTimeClick = (timeId) => {
        setSelectTimeId(() => timeId);
        if (selectTimeId === timeId) {
            setSelectTimeId(() => 0);
        }
    };

    const userReservationMutation = useMutation({
        mutationKey: "userReservationMutation",
        mutationFn: userReservationRequest,
        retry: 0,

        onSuccess: (response) => {
            setIsClick(() => false);
            alert("예약완료");
            window.location.reload();
        },

        onError: (error) => {
            console.log(error);
        },
    });

    const editReservationByUserMutation = useMutation({
        mutationKey: "editReservationByUserMutation",
        mutationFn: editReservationByUserRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("변경완료");
            window.location.reload();
        },
    });

    const handleReservationClick = (prevReservationId) => {
        if (!!prevReservationId) {
            if (window.confirm("변경하시겠습니까?")) {
                editReservationByUserMutation.mutate({
                    prevReservationId: prevReservationId,
                    accountId: accountId,
                    trainerId: trainerId,
                    timeId: selectTimeId,
                    date: selectDate,
                });
            }
        } else {
            if (window.confirm("예약하시겠습니까?")) {
                userReservationMutation.mutate({
                    accountId: accountId,
                    trainerId: trainerId,
                    timeId: selectTimeId,
                    date: selectDate,
                });
            }
        }
    };

    const handleCloseClick = () => {
        setIsClick(() => false);
    };

    return (
        <motion.div
            transition={{ duration: 0.2, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout(isClose)}
        >
            <DatePicker
                onChange={(date) => {
                    setSelectDate(() => date);
                }}
                selected={selectDate}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                locale={ko}
                todayButton={true}
                customInput={<CustomInput />}
            />
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
            <div css={s.buttonBox}>
                <button onClick={() => handleReservationClick(prevReservationId)}>
                    {!!prevReservationId ? "예약 변경하기" : "예약하기"}
                </button>
                <button onClick={handleCloseClick}>닫기</button>
            </div>
        </motion.div>
    );
}

export default SelectTrainerModal;
