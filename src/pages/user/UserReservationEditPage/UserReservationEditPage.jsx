/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import { useMutation, useQuery } from "react-query";
import { cancelReservationByUserRequest, getUserAllReservationRequest } from "../../../apis/api/reservation";
import usePrincipal from "../../../hooks/usePrincipal";
import { dateFormatter } from "../../../utils/dateFormatter";
import { useNavigate } from "react-router-dom";

const CustomInput = ({ value, onClick }) => (
    <button css={s.customButton} onClick={onClick}>
        {value}
    </button>
);

function UserReservationEditPage(props) {
    const [allUserReservations, setAllUserReservations] = useState([]);
    const [comingReservations, setComingReservations] = useState([]);
    const navigate = useNavigate();
    const accountId = usePrincipal();

    const deleteReservationByUserMutation = useMutation({
        mutationKey: "deleteReservationByUserMutation",
        mutationFn: cancelReservationByUserRequest,
        retry: 0,
        onSuccess: (response) => {
            window.location.reload();
        },
        onError: (error) => {
            alert(error.response.data);
        },
    });

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
                            trainerName: res.trainerName,
                            timeId: res.timeId,
                            timeDuration: res.timeDuration,
                        };
                    })
                );
            },
            enabled: !!accountId,
        }
    );

    useEffect(() => {
        const today = dateFormatter(new Date());
        setComingReservations(() => allUserReservations.filter((res) => res.reservationDate >= today));
    }, [allUserReservations]);

    // #########################################클릭 핸들러######################################### //

    const handleEditClick = (reservationId) => {
        if (window.confirm("변경하시겠습니까?")) {
            navigate(`/user/reservation/make?reservationId=${reservationId}`);
        }
    };
    const handleCancelClick = (reservationId) => {
        if (window.confirm("취소하시겠습니까?")) {
            deleteReservationByUserMutation.mutate({
                reservationId: reservationId,
            });
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
            <h1>나의 예약</h1>
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
                                    <button onClick={() => handleEditClick(reservation.reservationId)}>변경</button>
                                    <button onClick={() => handleCancelClick(reservation.reservationId)}>취소</button>
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
