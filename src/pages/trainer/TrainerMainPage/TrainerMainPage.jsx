/** @jsxImportSource @emotion/react */
import "react-datepicker/dist/react-datepicker.css";
import * as s from "./style";
import MyMembers from "../../../components/MyMembers/MyMembers";
import TodayReservation from "../../../components/TodayReservation/TodayReservation";
import SelectReservationAllUser from "../../../components/SelectReservationAllUser/SelectReservationAllUser";
import TrainerProfile from "../../../components/TrainerProfile/TrainerProflie";
import usePrincipal from "../../../hooks/usePrincipal";
import useTrainerApis from "../../../hooks/useTrainerApis";
import DayoffRequest from "../../../components/DayoffRequest/DayoffRequest";
import { useState } from "react";

function TrainerMainPage(props) {
    const accountId = usePrincipal();
    const { trainerId, trainerProfile, setTrainerProfile, membersList } = useTrainerApis(accountId);
    return (
        <>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.trainerBox}>
                        <div css={s.trainerProfileBox}>
                            <div css={s.trainer}>트레이너 정보</div>
                            <TrainerProfile
                                trainerProfile={trainerProfile}
                                setTrainerProfile={setTrainerProfile}
                                accountId={accountId}
                            />
                        </div>
                        <div css={s.myMembersBox}>
                            <div css={s.myMembers}>내 회원들</div>
                            <MyMembers membersList={membersList} />
                        </div>
                    </div>
                    <div css={s.todayScheduleBox}>
                        <div css={s.todaySchedule}>오늘 일정 및 내일 일정</div>
                        <TodayReservation trainerId={trainerId} />
                    </div>
                </div>
                <div css={s.allReservationBox}>
                    <div css={s.dayoffBox}>
                        <div css={s.dayoff}>연차 설정</div>
                        <DayoffRequest accountId={accountId} />
                        <div css={s.select}></div>
                    </div>
                    <div css={s.allReservation}>
                        <div css={s.myReservation}>나의 예약 검색</div>
                        <SelectReservationAllUser accountId={accountId} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerMainPage;
