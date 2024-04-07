import React, { useState } from "react";
import TrainerCardForReservation from "../TrainerCardForReservation/TrainerCardForReservation";
import { getUnreservedTrainersRequest, userReservationRequest } from "../../apis/api/reservation";
import { useMutation, useQuery } from "react-query";

function TrainerBoardForReservation(props) {
    const { userId, selectTimeId, selectDate } = props;
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
                console.log(response.data);
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
            console.log(response.data.timeId);
        },

        onError: (error) => {
            console.log(error);
        },
    });

    const handleResevationClick = (trainerId) => {
        console.log(unreservedTrainers);
        console.log({
            userId: userId,
            trainderId: trainerId,
            timeId: selectTimeId,
            date: selectDate,
        });

        if (window.confirm("예약하시겠습니까?")) {
            userReservationMutation.mutate({
                userId: userId,
                trainerId: trainerId,
                timeId: selectTimeId,
                date: selectDate,
            });
        }
    };
    return (
        <>
            {unreservedTrainers.map((trainer) => {
                return (
                    <TrainerCardForReservation
                        key={trainer.trainderId}
                        profileUrl={trainer.trainerProfileImgUrl}
                        name={trainer.name}
                        onClick={() => handleResevationClick(trainer.trainerId)}
                    />
                );
            })}
        </>
    );
}

export default TrainerBoardForReservation;
