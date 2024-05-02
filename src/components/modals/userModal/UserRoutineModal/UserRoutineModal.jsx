/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getUserInbodyRequest } from "../../../../apis/api/inbody";
import { useNavigate } from "react-router-dom";
import { workout } from "../../../../assets/workoutImg/workoutImg";
import { getRoutineByReservationIdRequest } from "../../../../apis/api/workout";

function UserRoutineModal({ isModalOpen, setIsModalOpen, clickedReservationId }) {
    const [routines, setRoutines] = useState([]);
    const getUserRoutineQuery = useQuery(
        ["getUserRoutineQuery", clickedReservationId],
        () =>
            getRoutineByReservationIdRequest({
                reservationId: clickedReservationId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setRoutines(() => response.data);
            },
            enabled: !!clickedReservationId,
        }
    );
    return (
        <motion.div
            transition={{ duration: 0.2, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout(isModalOpen)}
        >
            <div css={s.routineCardBox}>
                {routines.map((routine) => {
                    return (
                        <motion.div
                            css={s.routineCard}
                            transition={{ duration: 0.2, delay: (routine.workoutRoutineOrder - 1) * 0.7 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div css={s.indexBox}>
                                <h1>{routine.workoutRoutineOrder}</h1>
                            </div>
                            <div css={s.routineInfoBox}>
                                <div css={s.routineImgBox}>
                                    <img src={workout[routine.workoutCategoryId].img} alt="" />
                                </div>
                                <div css={s.infoTableBox}>
                                    <table css={s.table}>
                                        <tbody>
                                            <tr>
                                                <td>{routine.workoutCategoryName}</td>
                                                <td>{routine.workoutName}</td>
                                            </tr>
                                            <tr>
                                                <td>무게</td>
                                                <td>{routine.workoutRoutineWeight}kg</td>
                                            </tr>
                                            <tr>
                                                <td>세트</td>
                                                <td>{routine.workoutRoutineSet}set</td>
                                            </tr>
                                            <tr>
                                                <td>횟수</td>
                                                <td>{routine.workoutRoutineCount}회</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
            <button css={s.close} onClick={() => setIsModalOpen(() => false)}>
                닫기
            </button>
        </motion.div>
    );
}

export default UserRoutineModal;
