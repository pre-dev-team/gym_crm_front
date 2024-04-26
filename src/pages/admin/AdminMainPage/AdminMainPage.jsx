/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MemberTable from "../../../components/AdminPage/MemberTable/MemberTable";
import TrainerTable from "../../../components/AdminPage/TrainerTable/TrainerTable";
import { motion } from "framer-motion";
import ReservationSearch from "../../../components/AdminPage/ReservationSearch/ReservationSearch";
import { useState } from "react";
import AdminReviewModal from "../../../components/modals/adminModal/AdminReviewModal/AdminReviewModal";
import AdminHolidayModal from "../../../components/modals/adminModal/AdminHolidayModal/AdminHolidayModal";

function AdminMainPage(props) {
    const [isAdminReviewModalOpen, setIsAdminReviewModalOpen] = useState(false);
    const [isAdminHolidayModalOpen, setIsAdminHolidayModalOpen] = useState(false);
    const [clickedUserId, setClickedUserId] = useState(0);
    const [clickedTrainerId, setClickedTrainerId] = useState(0);

    const handleTrainerRegisterClick = () => {
        window.open(`http://localhost:3000/admin/register/trainer`, "_blank", " width=300px, height=400px");
    };

    return (
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
                <div css={s.graphbox}>그래프</div>
            </div>
        </div>
    );
}

export default AdminMainPage;
