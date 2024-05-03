/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MemberTable from "../../../components/admin/MemberTable/MemberTable";
import TrainerTable from "../../../components/admin/TrainerTable/TrainerTable";
import ReservationSearch from "../../../components/admin/ReservationSearch/ReservationSearch";
import { useState } from "react";
import AdminReviewModal from "../../../components/modals/adminModal/AdminReviewModal/AdminReviewModal";
import AdminHolidayModal from "../../../components/modals/adminModal/AdminHolidayModal/AdminHolidayModal";
import AdminReservationChart from "../../../components/admin/AdminReservationChart/AdminReservationChart";
import AdminRootLayout from "../../../components/layouts/AdminRootLayout/AdminRootLayout";

function AdminMainPage(props) {
    const [isAdminReviewModalOpen, setIsAdminReviewModalOpen] = useState(false);
    const [isAdminHolidayModalOpen, setIsAdminHolidayModalOpen] = useState(false);
    const [clickedUserId, setClickedUserId] = useState(0);
    const [clickedTrainerId, setClickedTrainerId] = useState(0);

    const handleTrainerRegisterClick = () => {
        window.open(`http://localhost:3000/admin/register/trainer`, "_blank", " width=300px, height=400px");
    };

    const handleEditPwClick = () => {
        window.open(`http://localhost:3000/admin/edit/password`, "_blank", " width=300px, height= 300px");
    };

    return (
        <AdminRootLayout>
            <button css={s.editAdminPwButton} onClick={handleEditPwClick}>
                관리자 비밀번호 변경
            </button>
            <div css={s.layout}>
                <AdminReviewModal
                    isOpen={isAdminReviewModalOpen}
                    setIsAdminReviewModalOpen={setIsAdminReviewModalOpen}
                    clickedUserId={clickedUserId}
                />
                <AdminHolidayModal
                    isOpen={isAdminHolidayModalOpen}
                    setIsAdminHolidayModalOpen={setIsAdminHolidayModalOpen}
                    clickedTrainerId={clickedTrainerId}
                    setClickedTrainerId={setClickedTrainerId}
                />
                <div css={s.firstBox}>
                    <div css={s.listBox}>
                        <div css={s.listName}>
                            전체 트레이너 명단
                            <button onClick={handleTrainerRegisterClick}>트레이너 등록</button>
                        </div>
                        <div css={s.list}>
                            <TrainerTable
                                setClickedTrainerId={setClickedTrainerId}
                                setIsAdminHolidayModalOpen={setIsAdminHolidayModalOpen}
                            />
                        </div>
                    </div>
                    <div css={s.listBox}>
                        <div css={s.listName}>전체 회원 명단</div>
                        <div css={s.list}>
                            <MemberTable
                                setIsAdminReviewModalOpen={setIsAdminReviewModalOpen}
                                setClickedUserId={setClickedUserId}
                            />
                        </div>
                    </div>
                </div>
                <div css={s.secoundBox}>
                    <div css={s.reservationBox}>
                        <div css={s.listName}>전체 예약 조회</div>
                        <div css={s.list}>
                            <ReservationSearch />
                        </div>
                    </div>
                    <div css={s.chartBox}>
                        <div css={s.listName}>예약 현황 차트</div>
                        <AdminReservationChart />
                    </div>
                </div>
            </div>
        </AdminRootLayout>
    );
}

export default AdminMainPage;
