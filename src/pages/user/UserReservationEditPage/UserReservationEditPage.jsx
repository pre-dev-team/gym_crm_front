/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import ko from "date-fns/locale/ko";
import { useQuery } from "react-query";
import { getDayReservationRequest, getUserAllReservationRequest } from "../../../apis/api/reservation";
import TrainerBoardForReservation from "../../../components/TrainerBoardForReservation/TrainerBoardForReservation";
import usePrincipal from "../../../hooks/usePrincipal";
import useSchedule from "../../../hooks/useSchedule";
import { dateFormatter } from "../../../utils/dateFormatter";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function UserReservationEditPage(props) {
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectTimeId, setSelectTimeId] = useState(0);
    const [possibleTimes, setPossibleTimes] = useState([]);
    const [reservedTimeId, setReservedTimeId] = useState([]);
    const [allUserReservations, setAllUserReservations] = useState([]);
    const [comingReservations, setComingReservations] = useState([]);
    const accountId = usePrincipal();
    const schedule = useSchedule();

    const getUserAllReservationQuery = useQuery(
        ["getUserAllReservationRequest"],
        () =>
            getUserAllReservationRequest({
                accountId: accountId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setAllUserReservations(() =>
                    response.data.map((res) => {
                        return {
                            reservationId: res.reservationId,
                            reservationDate: res.reservationDate,
                            trainerId: res.trainerId,
                            trainerName: res.name,
                            timeId: res.timeId,
                            timeDuration: res.timeDuration,
                        };
                    })
                );
            },
            enabled: !!accountId,
        }
    );

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
        const today = dateFormatter(new Date());
        setComingReservations(() => allUserReservations.filter((res) => res.reservationDate >= today));
    }, [allUserReservations]);

    useEffect(() => {
        const today = new Date();
        const isSameDate = today.getDate() === selectDate.getDate();
        const isSameMonth = today.getMonth() === selectDate.getMonth();
        const isSameYear = today.getFullYear() === selectDate.getFullYear();
        console.log(comingReservations);
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
            <h1>나의예약</h1>
            <div css={s.reservationBox}>
                {comingReservations.length === 0 ? (
                    <>예약 없음</>
                ) : (
                    comingReservations.map((reservation) => {
                        return (
                            <div css={s.reservationCard}>
                                <table css={s.table}>
                                    <thead>
                                        <tr>
                                            <th>날짜</th>
                                            <th>시간</th>
                                            <th>트레이너</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{reservation.reservationDate}</td>
                                            <td>{reservation.timeDuration}</td>
                                            <td>{reservation.trainerName}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div css={s.buttonBox}>
                                    <button>변경</button>
                                    <button>취소</button>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
            {/* <DatePicker
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
            <div css={s.trainerBox}>
                <TrainerBoardForReservation accountId={accountId} selectTimeId={selectTimeId} selectDate={selectDate} />
            </div> */}
        </motion.div>
    );
}

export default UserReservationEditPage;
