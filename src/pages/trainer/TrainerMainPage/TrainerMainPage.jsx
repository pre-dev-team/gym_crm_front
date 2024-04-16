/** @jsxImportSource @emotion/react */
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as s from "./style";
import dayjs from "dayjs";
import MyMembers from "../../../components/MyMembers/MyMembers";
import { useQueryClient } from "react-query";
import TodayReservation from "../../../components/TodayReservation/TodayReservation";
import SelectReservationAllUser from "../../../components/SelectReservationAllUser/SelectReservationAllUser";
import TrainerProfile from "../../../components/TrainerProfile/TrainerProflie";
import usePrincipal from "../../../hooks/usePrincipal";
import useTrainerApis from "../../../hooks/useTrainerApis";

function TrainerMainPage(props) {
    
    const [reservationList] = useState([]);
    const accountId = usePrincipal();
    const {trainerId, trainerProfile, membersList} = useTrainerApis(accountId);

    return (
        <>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.trainerBox}>
                        <div css={s.trainerProfileBox}>
                            <div>트레이너 정보</div>
                            <TrainerProfile trainerProfile={trainerProfile} />
                        </div>
                        <div css={s.myMembersBox}>
                            <div>내 회원들</div>
                            <MyMembers membersList={membersList} />
                        </div>
                    </div>
                    <div css={s.todayScheduleBox}>
                        <div>오늘 일정 및 내일 일정</div>
                        <TodayReservation trainerId={trainerId} />
                    </div>
                </div>
                <div css={s.allReservationBox}>
                    <div css={s.allReservation}>
                        <div>나의 예약 검색</div>
                        <SelectReservationAllUser accountId={accountId} />
                    </div>
                    <div>연차 설정</div>
                </div>
            </div>
        </>
    );
}

export default TrainerMainPage;
