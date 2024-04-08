/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import ko from "date-fns/locale/ko";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import { getTimeRequest } from "../../../apis/api/common";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function SelectTrainerModal({ trainerId, isClick, setIsClick }) {
    const [selectDate, setSelectDate] = useState(new Date());
    const [schedule, setSchedule] = useState([]);
    const [possibleTimes, setPossibleTimes] = useState([]);
    const [selectTimeId, setSelectTimeId] = useState(0);
    const getTimedurationQuery = useQuery(["getTimedurationQuery"], getTimeRequest, {
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

    const handleTimeClick = (timeId) => {
        setSelectTimeId(() => timeId);
        if (selectTimeId === timeId) {
            setSelectTimeId(() => 0);
        }
    };

    const handleReservationClick = () => {
        setIsClick(() => false);
    };

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
            <button onClick={handleReservationClick}>예약하기</button>
        </motion.div>
    );
}

export default SelectTrainerModal;
