/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AgreementAccordion from "../../../components/auth/AgreementAccordion/AgreementAccordion";
import { privateInfomationTerm, reservationCancelAndReviewTerm } from "./terms";
import * as s from "./style";
import { useMutation } from "react-query";
import { deleteUserAccountRequest } from "../../../apis/api/account";
import usePrincipal from "../../../hooks/usePrincipal";


function UserResignPage(props) {
    const userAccountId = usePrincipal();
    const [check, setCheck] = useState({
        "개인정보 삭제": false,
        "예약취소&리뷰보존": false,
    });
    const [agree, setAgree] = useState(false);
    useEffect(() => {
        const agreeList = Object.values(check);
        if (!agreeList.includes(false)) {
            setAgree(() => true);
        } else {
            setAgree(() => false);
        }
    }, [check]);

    const deleteUserAccountMutation = useMutation({
        retry: 0,
        mutationFn: deleteUserAccountRequest,
        mutationKey: "deleteUserAccountMutation",
        onSuccess: (response) => {
            localStorage.clear("accessToken");
            window.location.replace("/");
        },
    });

    const handleResignClick = () => {
        deleteUserAccountMutation.mutate(userAccountId);
    };
    return (
        <motion.div
            transition={{ duration: 0.3, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout(agree)}
        >
            <h1>회원 탈퇴</h1>
            <AgreementAccordion
                content={privateInfomationTerm}
                title={"개인정보 삭제"}
                check={check}
                setCheck={setCheck}
            />
            <AgreementAccordion
                content={reservationCancelAndReviewTerm}
                title={"예약취소&리뷰보존"}
                check={check}
                setCheck={setCheck}
            />
            <button onClick={handleResignClick} disabled={!agree}>
                탈퇴하기
            </button>
        </motion.div>
    );
}

export default UserResignPage;
