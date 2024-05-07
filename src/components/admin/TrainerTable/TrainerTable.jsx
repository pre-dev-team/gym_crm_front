/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import { deleteTrainerRequest } from "../../../apis/api/admin";
import * as s from "./style";
import { useState } from "react";
import { getTrainersByAdminRequest } from "../../../apis/api/trainer";

function TrainerTable({ setIsAdminHolidayModalOpen, setClickedTrainerId }) {
    const [trainers, setTrainers] = useState([]);

    const getAllTrainersQuery = useQuery(["getAllTrainersQuery"], getTrainersByAdminRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setTrainers(() => response.data);
        },
    });

    const deleteTrainerMutation = useMutation({
        mutationKey: "deleteTrainerMutation",
        mutationFn: deleteTrainerRequest,
        retry: 0,
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log(error.response.data);
        },
    });

    const handleHolidayViewClick = (id) => {
        setIsAdminHolidayModalOpen(() => true);
        setClickedTrainerId(() => id);
    };

    const handleDeleteTrainerClick = (trainer) => {
        if (
            window.confirm(
                `${trainer.name}트레이너를 삭제하시겠습니까? \n해당 트레이너와 관련된 데이터가 모두 삭제됩니다.`
            )
        ) {
            deleteTrainerMutation.mutate({
                trainerId: trainer.trainerId,
            });
        }
    };

    return (
        <div>
            <table css={s.table}>
                <thead css={s.th}>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>담당회원 수</th>
                        <th>평균 리뷰평점</th>
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
                                    <button onClick={() => handleDeleteTrainerClick(trainer)}>퇴사</button>
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
