/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import { useQuery } from "react-query";
import { getDayReservationRequest } from "../../../apis/api/reservation";
import TrainerBoardForReservation from "../../../components/TrainerBoardForReservation/TrainerBoardForReservation";
import usePrincipal from "../../../hooks/usePrincipal";
import useSchedule from "../../../hooks/useSchedule";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function UserReservationPage(props) {
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectTimeId, setSelectTimeId] = useState(0);
    const [possibleTimes, setPossibleTimes] = useState([]);
    const [reservedTimeId, setReservedTimeId] = useState([]);
    const accountId = usePrincipal();
    const schedule = useSchedule();

    const getDayReservationQuery = useQuery(
        ["getDayReservationQuery", selectDate],

        () =>
            getDayReservationRequest({
                date: selectDate,
                accountId: accountId,
                trainerId: 0,
            }),

        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setReservedTimeId(() => response.data.map((time) => time.timeId));
            },
            onError: (error) => {},
            enabled: !!accountId,
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
            setPossibleTimes(() => schedule.filter((time) => !reservedTimeId.includes(time.timeId)));
        }
    }, [selectDate, selectTimeId, reservedTimeId]);

    // #########################################클릭 핸들러######################################### //

    const handleTimeClick = (timeId) => {
        setSelectTimeId(() => timeId);
        if (selectTimeId === timeId) {
            setSelectTimeId(() => 0);
        }
    };

    return (
        <motion.div
            transition={{ duration: 1, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            <div css={s.calenderBox}>
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
                <TrainerBoardForReservation accountId={accountId} selectTimeId={selectTimeId} selectDate={selectDate} />
            </div>
        </motion.div>
    );
}

export default UserReservationPage;
