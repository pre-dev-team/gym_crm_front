/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ko from "date-fns/locale/ko";
import { motion } from "framer-motion";
import { getDayReservationRequest, userReservationRequest } from "../../../apis/api/reservation";
import DatePicker from "react-datepicker";
import { getTimeRequest } from "../../../apis/api/common";
import usePrincipal from "../../../hooks/usePrincipal";
import useSchedule from "../../../hooks/useSchedule";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function SelectTrainerModal(props) {
    const { trainerId, isClick, setIsClick } = props;
    const [selectDate, setSelectDate] = useState(new Date());
    const [possibleTimes, setPossibleTimes] = useState([]);
    const [selectTimeId, setSelectTimeId] = useState(0);
    const [reservedTimeIds, setReservedTimeIds] = useState([]);
    const accountId = usePrincipal();
    const schedule = useSchedule();

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

    useEffect(() => {
        const today = new Date();
        const isSameDate = today.getDate() === selectDate.getDate();
        const isSameMonth = today.getMonth() === selectDate.getMonth();
        const isSameYear = today.getFullYear() === selectDate.getFullYear();
        if (isSameDate && isSameMonth & isSameYear) {
            setPossibleTimes(() => schedule.filter((time) => time.timeId + 9 > new Date().getHours() + 1));
        } else {
            setPossibleTimes(() => schedule.filter((time) => !reservedTimeIds.includes(time.timeId)));
        }
    }, [selectDate, selectTimeId, reservedTimeIds]);

    const handleTimeClick = (timeId) => {
        setSelectTimeId(() => timeId);
        if (selectTimeId === timeId) {
            setSelectTimeId(() => 0);
        }
    };

    const handleReservationClick = () => {
        console.log({
            accountId: accountId,
            trainderId: trainerId,
            timeId: selectTimeId,
            date: selectDate,
        });

        if (window.confirm("예약하시겠습니까?")) {
            userReservationMutation.mutate({
                accountId: accountId,
                trainerId: trainerId,
                timeId: selectTimeId,
                date: selectDate,
            });
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

    return (
        <motion.div
            transition={{ duration: 0.2, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout(isClick)}
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
            <div>
                <button onClick={handleReservationClick}>예약하기</button>
                <button onClick={() => setIsClick(() => false)}>닫기</button>
            </div>
        </motion.div>
    );
}

export default SelectTrainerModal;
