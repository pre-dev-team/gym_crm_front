/** @jsxImportSource @emotion/react */
import "react-datepicker/dist/react-datepicker.css";
import * as s from "./style";
import MyMembers from "../../../components/trainer/MyMembers/MyMembers";
import TodayReservation from "../../../components/trainer/TodayReservation/TodayReservation";
import SelectReservationAllUser from "../../../components/trainer/SelectReservationAllUser/SelectReservationAllUser";
import TrainerProfile from "../../../components/trainer/TrainerProfile/TrainerProflie";
import usePrincipal from "../../../hooks/usePrincipal";
import useTrainerApis from "../../../hooks/useTrainerApis";
import DayoffRequest from "../../../components/trainer/DayoffRequest/DayoffRequest";
import AdminRootLayout from "../../../components/layouts/AdminRootLayout/AdminRootLayout";
import { useRef } from "react";

function TrainerMainPage(props) {
    const accountId = usePrincipal();
    const { trainerId, trainerProfile, setTrainerProfile, membersList } = useTrainerApis(accountId);
    const fileRef = useRef();
    const handleEditPwClick = () => {
        window.open(`http://localhost:3000/tariner/edit/password`, "_blank", " width=300px, height= 300px");
    };

    return (
        <AdminRootLayout>
            <div css={s.layout}>
                <div css={s.container}>
                    <div css={s.trainerBox}>
                        <div css={s.trainerProfileBox}>
                            <div css={s.trainer}>트레이너 정보</div>
                            <TrainerProfile
                                trainerProfile={trainerProfile}
                                setTrainerProfile={setTrainerProfile}
                                accountId={accountId}
                                fileRef={fileRef}
                            />
                            <div css={s.borderBox}></div>
                            <div css={s.buttonBox}>
                                <button css={s.editPasswordButton} onClick={handleEditPwClick}>비밀번호 변경</button>
                                <button css={s.editProfileButton} onClick={() => fileRef.current.click()}>프로필 변경</button>
                            </div>
                        </div>
                        <div css={s.myMembersBox}>
                            <div css={s.myMembers}>내 회원들</div>
                            <MyMembers membersList={membersList} accountId={accountId} />
                        </div>
                    </div>
                    <div css={s.todayScheduleBox}>
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
        </AdminRootLayout>
    );
}

export default TrainerMainPage;
