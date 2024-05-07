/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import "dayjs/locale/ko";
import { useQuery } from "react-query";
import { getTrainersByUserRequest } from "../../../apis/api/trainer";
import TrainerCardForReservation from "../../../components/user/TrainerCardForReservation/TrainerCardForReservation";
import SelectTrainerModal from "../../../components/modals/userModal/SelectTrainerModal/SelectTrainerModal";
import { useSearchParams } from "react-router-dom";

function UserReservationPage(props) {
    const [trainers, setTrainers] = useState([]);
    const [isClick, setIsClick] = useState(false);
    const [selectTrainerId, setSelectTrainerId] = useState(0);
    const [searchParams] = useSearchParams();
    const prevReservationId = searchParams.get("reservationId");
    const getTrainers = useQuery(["getTrainers"], getTrainersByUserRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setTrainers(() => response.data);
        },
        onError: (error) => {},
    });

    const handleReservationClick = (id) => {
        setIsClick(() => true);
        setSelectTrainerId(() => id);
    };

    return (
        <motion.div
            transition={{ duration: 1, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            <h1>트레이너를 선택하세요</h1>
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
                    <SelectTrainerModal
                        setIsClick={setIsClick}
                        isClick={isClick}
                        trainerId={selectTrainerId}
                        prevReservationId={prevReservationId}
                    />
                ) : (
                    <></>
                )}
            </div>
        </motion.div>
    );
}

export default UserReservationPage;
