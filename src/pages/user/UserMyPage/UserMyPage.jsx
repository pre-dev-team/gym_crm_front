/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";
import { useRecoilState } from "recoil";
import { accountInfoAtom } from "../../../atoms/accountInfoAtom";
import MypageReservationReview from "../../../components/user/MypageReservationReview/MypageReservationReview";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import EditPasswordModal from "../../../components/modals/EditPasswordModal/EditPasswordModal";
import { useEffect, useRef, useState } from "react";
import UserInbodyModal from "../../../components/modals/UserInbodyModal/UserInbodyModal";
function UserMyPage(props) {
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoAtom);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isInbodyModalOpen, setIsInbodyModalOpen] = useState(false);
    const modalRef = useRef();

    return (
        <motion.div
            transition={{ duration: 1, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            {isPasswordModalOpen ? (
                <EditPasswordModal
                    accountId={accountInfo.accountId}
                    isPasswordModalOpen={isPasswordModalOpen}
                    setIsPasswordModalOpen={setIsPasswordModalOpen}
                />
            ) : (
                <></>
            )}
            {isInbodyModalOpen ? (
                <UserInbodyModal
                    accountId={accountInfo.accountId}
                    isInbodyModalOpen={isInbodyModalOpen}
                    setIsInbodyModalOpen={setIsInbodyModalOpen}
                />
            ) : (
                <></>
            )}
            <div css={s.infoBox}>
                <div css={s.info}>
                    <div css={s.names}>
                        <h2>{accountInfo.name} 님</h2>
                        <div>@{accountInfo.username}</div>
                    </div>
                    <div css={s.contact}>
                        <h2>{accountInfo.phone}</h2>
                        <h2>{accountInfo.email}</h2>
                    </div>
                    <div css={s.buttonBox}>
                        <button onClick={() => setIsPasswordModalOpen(() => true)}>
                            <FaChevronRight fontSize={"10px"} />
                            비밀번호 변경
                        </button>
                        <button onClick={() => setIsInbodyModalOpen(() => true)}>
                            <FaChevronRight fontSize={"10px"} />
                            인바디 조회
                        </button>
                    </div>
                </div>
            </div>
            <div css={s.reservationBox}>
                <MypageReservationReview accountId={accountInfo.accountId} />
            </div>
        </motion.div>
    );
}

export default UserMyPage;
