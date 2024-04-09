/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./style";
import { useRecoilState } from "recoil";
import { accountInfoAtom } from "../../../atoms/accountInfoAtom";
import MypageReservationReview from "../../../components/MypageReservationReview/MypageReservationReview";
import { motion } from "framer-motion";

function UserMyPage(props) {
    const [accountInfo, setAccountInfo] = useRecoilState(accountInfoAtom);

    return (
        <motion.div
            transition={{ duration: 1, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout}
        >
            <div css={s.infoBox}>
                <div css={s.info}>
                    <h1>내정보</h1>
                    <div>
                        <div>ID {accountInfo.username}</div>
                        <div>NAME {accountInfo.name}</div>
                        <div>📞 {accountInfo.phone}</div>
                        <div>📧 {accountInfo.email}</div>
                        <button>비밀번호 변경</button>
                    </div>
                </div>
                <div css={s.inbodyBox}>
                    <h1>인바디</h1>
                    <div css={s.listBox}>
                        <div css={s.inbodyDateBox}>
                            <Link>2024-04-09</Link>
                            <div>
                                <ul>
                                    <li>몸무게: 70kg</li>
                                    <li>근육량:</li>
                                    <li>체지방량:</li>
                                </ul>
                            </div>
                        </div>
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
