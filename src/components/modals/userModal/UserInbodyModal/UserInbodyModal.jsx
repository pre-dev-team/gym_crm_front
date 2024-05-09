/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import * as s from "./style";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getUserInbodyRequest } from "../../../../apis/api/inbody";
import { useNavigate } from "react-router-dom";

function UserInbodyModal({ accountId, isInbodyModalOpen, setIsInbodyModalOpen }) {
    const [inbodyInfos, setInbodyInfos] = useState([]);
    const [selectedInbodyImgUrl, setSelectedInbodyImgUrl] = useState("");
    const navigator = useNavigate();
    useEffect(() => {
        console.log(selectedInbodyImgUrl);
    }, [selectedInbodyImgUrl]);

    const getUserInbodyQuery = useQuery(
        ["getUserInbodyQuery"],
        () =>
            getUserInbodyRequest({
                accountId: accountId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!accountId,
            onSuccess: (response) => {
                setInbodyInfos(() =>
                    response.data.map((res) => {
                        return {
                            inbodyId: res.inbodyId,
                            inbodyUrl: res.inbodyUrl,
                            date: res.createDate,
                            weight: res.weight,
                            muscleMass: res.muscleMass,
                            fatMass: res.fatMass,
                        };
                    })
                );
            },
        }
    );

    return (
        <motion.div
            transition={{ duration: 0.2, delay: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            css={s.layout(isInbodyModalOpen)}
        >
            <div css={s.tableBox}>
                <table css={s.table}>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>체중</th>
                            <th>골격근량</th>
                            <th>체지방량</th>
                            <th>조회</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inbodyInfos.map((info) => {
                            return (
                                <tr key={info.inbodyId}>
                                    <td>{info.date}</td>
                                    <td>{info.muscleMass}kg</td>
                                    <td>{info.weight}kg</td>
                                    <td>{info.fatMass}kg</td>
                                    <td>
                                        <button
                                            disabled={info.inbodyUrl.length === 0}
                                            onClick={() => setSelectedInbodyImgUrl(info.inbodyUrl)}
                                        >
                                            조회
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div css={s.imgBox}>
                <img src={selectedInbodyImgUrl} onClick={() => window.open(selectedInbodyImgUrl)} />
            </div>
            <button css={s.close} onClick={() => setIsInbodyModalOpen(() => false)}>
                닫기
            </button>
        </motion.div>
    );
}

export default UserInbodyModal;
