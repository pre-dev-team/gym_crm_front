/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import { useQuery } from "react-query";
import { getTrainersRequest } from "../../../apis/api/common";
import TrainerCardForReservation from "../../../components/TrainerCardForReservation/TrainerCardForReservation";
import SelectTrainerModal from "../../../components/modals/SelectTrainerModal/SelectTrainerModal";

function UserTrainerReservationPage(props) {
    const [trainers, setTrainers] = useState([]);
    const [isClick, setIsClick] = useState(false);
    const [selectTrainerId, setSelectTrainerId] = useState(0);
    const getTrainers = useQuery(["getTrainers"], getTrainersRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response);
            setTrainers(() => response.data);
        },
        onError: (error) => {},
    });

    const handleReservationClick = (id) => {
        setIsClick(() => true);
        setSelectTrainerId(() => id);
    };

    return (
        <div css={s.layout}>
            <div css={s.trainerBox}>
                {trainers.map((trainer) => {
                    return (
                        <>
                            <div key={trainer.trainerId}>
                                <TrainerCardForReservation
                                    key={trainer.trainerId}
                                    onClick={() => handleReservationClick(trainer.trainerId)}
                                    name={trainer.name}
                                    profileUrl={trainer.trainerProfileImgUrl}
                                />
                            </div>
                        </>
                    );
                })}
                {!!isClick ? (
                    <SelectTrainerModal setIsClick={setIsClick} isClick={isClick} trainerId={selectTrainerId} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default UserTrainerReservationPage;
