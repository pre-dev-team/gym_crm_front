/** @jsxImportSource @emotion/react */
import * as s from "./style";
import MemberTable from "../../../components/AdminPage/MemberTable/MemberTable";
import ReservationTable from "../../../components/AdminPage/ReservationTable/ReservationTable";
import TrainerTable from "../../../components/AdminPage/TrainerTable/TrainerTable";
import { motion } from "framer-motion";

function AdminMainPage(props) {
    return (
        <div css={s.layout}>
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
                        <MemberTable />
                    </div>
                </div>
            </div>
            <div css={s.secoundBox}>
                <div css={s.reservationBox}>
                    <div css={s.listName}>전체 예약 조회</div>
                    <div css={s.list}>
                        <ReservationTable />
                    </div>
                </div>
                <div css={s.graphbox}>그래프</div>
            </div>
        </div>
    );
}

export default AdminMainPage;
