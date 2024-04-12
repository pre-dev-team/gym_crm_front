import React, { useState } from "react";
import TrainerCardForReservation from "../TrainerCardForReservation/TrainerCardForReservation";
import { getUnreservedTrainersRequest, userReservationRequest } from "../../apis/api/reservation";
import { useMutation, useQuery } from "react-query";

function TrainerBoardForReservation(props) {
    const { accountId, selectTimeId, selectDate } = props;
    const [unreservedTrainers, setUnreservedTrainers] = useState([]);
    const getUnreservedTrainersAtTimeQuery = useQuery(
        ["getUnreservedTrainersAtTimeQuery", selectTimeId],
        () =>
            getUnreservedTrainersRequest({
                date: selectDate,
                timeId: selectTimeId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setUnreservedTrainers(() => response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const userReservationMutation = useMutation({
        mutationKey: "userReservationMutation",
        mutationFn: userReservationRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("예약완료");
            window.location.reload();
        },

        onError: (error) => {
            console.log(error);
        },
    });

    const handleResevationClick = (trainerId) => {
        console.log(unreservedTrainers);
        console.log({
            accountId: accountId,
            trainderId: trainerId,
            timeId: selectTimeId,
            date: selectDate,
        });

        if (window.confirm("예약하시겠습니까?")) {
            if (accountId !== 0 && trainerId !== 0 && selectTimeId !== 0 && selectDate) {
                userReservationMutation.mutate({
                    accountId: accountId,
                    trainerId: trainerId,
                    timeId: selectTimeId,
                    date: selectDate,
                });
            } else {
                alert("예약에러발생");
            }
        }
    };
    return (
        <>
            {unreservedTrainers.map((trainer) => {
                return (
                    <div key={trainer.trainderId}>
                        <TrainerCardForReservation
                            key={trainer.trainderId}
                            profileUrl={trainer.trainerProfileImgUrl}
                            name={trainer.name}
                            onClick={() => handleResevationClick(trainer.trainerId)}
                        />
                    </div>
                );
            })}
        </>
    );
}

export default TrainerBoardForReservation;
