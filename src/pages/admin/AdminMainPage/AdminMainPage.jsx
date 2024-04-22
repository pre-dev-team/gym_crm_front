/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MemberTable from "../../../components/AdminPage/MemberTable/MemberTable";
import ReservationTable from "../../../components/AdminPage/ReservationTable/ReservationTable";
import TrainerTable from "../../../components/AdminPage/TrainerTable/TrainerTable";
import { motion } from "framer-motion";
import ReservationSearch from "../../../components/AdminPage/ReservationSearch/ReservationSearch";
import { useState } from "react";
import AdminModalLayout from "../../../components/modals/adminModal/AdminModalLayout/AdminModalLayout";
import AdminReviewModal from "../../../components/modals/adminModal/AdminReviewModal/AdminReviewModal";

function AdminMainPage(props) {
    const [isAdminReviewModalOpen, setIsAdminReviewModalOpen] = useState(false);
    const [isMemeberListModalOpen, setIsMemeberListModalOpen] = useState(false);
    const [isReservationListModalOpen, setIsReservationListModalOpen] = useState(false);

    return (
        <div css={s.layout}>
            {/* {isAdminReviewModalOpen ? (
                <AdminReviewModal setIsAdminReviewModalOpen={setIsAdminReviewModalOpen} />
            ) : (
                <></>
            )} */}
            <div css={s.firstBox}>
                <div css={s.listBox}>
                    <div css={s.listName}>전체 트레이너 명단</div>
                    <div css={s.list}>
                        <TrainerTable />
                    </div>
                </div>
                <div css={s.listBox}>
                    <div css={s.listName}>전체 회원 명단</div>
                    <div css={s.list}>
                        <MemberTable setIsAdminReviewModalOpen={setIsAdminReviewModalOpen} />
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
