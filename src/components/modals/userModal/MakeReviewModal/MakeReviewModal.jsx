/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import StarScore from "../../../common/StarScore/StarScore";
import * as s from "./style";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { userReviewRequest } from "../../../../apis/api/review";

function MakeReviewModal({ accountId, trainerId, isReviewModalOpen, setIsReviewModalOpen }) {
    const [score, setScore] = useState(0);
    const [text, setText] = useState("");
    
    const handleTextChane = (e) => {
        setText(() => e.target.value);
    };

    useEffect(() => {
        const escModalClose = (e) => {
            if (e.key === "Escape") {
                setIsReviewModalOpen(() => false);
            }
        };

        window.addEventListener("keydown", escModalClose);
        return () => window.removeEventListener("keydown", escModalClose);
    }, [isReviewModalOpen]);

    const reviewSubmitMutation = useMutation({
        mutationKey: "reviewSubmitMutation",
        mutationFn: userReviewRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("리뷰 작성완료");
            window.location.reload();
        },
        onError: (error) => {},
    });

    const handleReviewClick = () => {
        if (window.confirm("리뷰를 작성하시겠습니까?")) {
            if (accountId !== 0 && trainerId !== 0) {
                reviewSubmitMutation.mutate({
                    accountId: accountId,
                    trainerId: trainerId,
                    reviewText: text,
                    reviewScore: score,
                });
            } else {
                alert("예약에러발생");
            }
        }
    };
    return (
        <motion.div
            transition={{ duration: 0.2, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout(isReviewModalOpen)}
        >
            <div css={s.reviewBox}>
                <h1>리뷰작성하기</h1>
                <div css={s.starBox}>
                    <StarScore setScore={setScore} />
                </div>
                <div css={s.textBox}>
                    <textarea maxLength={49} value={text} onChange={(e) => handleTextChane(e)}></textarea>
                </div>
                <h2>{text.length}/50 (50자 제한)</h2>
                <div css={s.buttonBox}>
                    <button onClick={handleReviewClick}>작성완료</button>
                    <button onClick={() => setIsReviewModalOpen(() => false)}>닫기</button>
                </div>
            </div>
        </motion.div>
    );
}

export default MakeReviewModal;
