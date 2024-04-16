/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MemberTable from "../../../components/AdminPage/MemberTable/MemberTable";
import TrainerTable from "../../../components/AdminPage/TrainerTable/TrainerTable";
import { motion } from "framer-motion";
import ReservationSearch from "../../../components/AdminPage/ReservationSearch/ReservationSearch";
import AdminPageInbodyModal from "../../../components/modals/AdminPageInbodyModal/AdminPageInbodyModal";
import AdminPageReviewModal from "../../../components/modals/AdminPageReviewModal/AdminPageReviewModal";
import { useState } from "react";
import MakeRoutine from "../../../components/MakeRoutine/MakeRoutine";

function AdminMainPage(props) {
    const [isInbodyModalOpen, setIsInbodyModalOpen] = useState(false);
    const [isReviewyModalOpen, setIsReviewModalOpen] = useState(false);
    return (
        <div css={s.layout}>
            <MakeRoutine />
            {isInbodyModalOpen ? <AdminPageInbodyModal setIsInbodyModalOpen={setIsInbodyModalOpen} /> : <></>}
            {isReviewyModalOpen ? <AdminPageReviewModal setIsReviewModalOpen={setIsReviewModalOpen} /> : <></>}
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
                        <MemberTable
                            setIsInbodyModalOpen={setIsInbodyModalOpen}
                            setIsReviewModalOpen={setIsReviewModalOpen}
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
