/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import { getAllTrainersRequest } from "../../../apis/api/admin";
import * as s from "./style";
import { useEffect, useState } from "react";

function TrainerTable({ setIsAdminHolidayModalOpen, setClickedTrainerId }) {
    const [trainers, setTrainers] = useState([]);

    const getAllTrainersQuery = useQuery([""], getAllTrainersRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setTrainers(() => response.data);
        },
    });

    const handleHolidayViewClick = (id) => {
        setIsAdminHolidayModalOpen(() => true);
        setClickedTrainerId(() => id);
    };

    return (
        <div>
            <table css={s.table}>
                <thead css={s.th}>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>담당회원 수</th>
                        <th>평균평점</th>
                        <th>연차정보조회</th>
                        <th>퇴사</th>
                    </tr>
                </thead>
                <tbody css={s.tb}>
                    {trainers.map((trainer) => {
                        return (
                            <tr>
                                <td>{trainer.trainerId}</td>
                                <td>{trainer.name}</td>
                                <td>{trainer.memberCount}</td>
                                <td>{trainer.avgScore === null ? 0 : trainer.avgScore}</td>
                                <td>
                                    <button onClick={() => handleHolidayViewClick(trainer.trainerId)}>연차조회</button>
                                </td>
                                <td>
                                    <button>퇴사</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TrainerTable;
