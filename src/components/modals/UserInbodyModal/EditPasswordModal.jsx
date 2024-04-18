/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getUserInbodyRequest } from "../../../apis/api/inbody";

function UserInbodyModal({ accountId, isInbodyModalOpen, setIsInbodyModalOpen }) {
    const [inbodyInfos, setInbodyInfos] = useState([]);
    const [selectedInbodyImgUrl, setSelectedInbodyImgUrl] = useState("");
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
                            <th>근골격량</th>
                            <th>체지방량</th>
                            <th>스캔조회</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inbodyInfos.map((info) => {
                            return (
                                <tr key={info.inbodyId}>
                                    <td>{info.date}</td>
                                    <td>{info.muscleMass}</td>
                                    <td>{info.weight}</td>
                                    <td>{info.fatMass}</td>
                                    <td>
                                        <button onClick={() => setSelectedInbodyImgUrl(info.inbodyUrl)}>조회</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div css={s.imgBox}>
                <img src={selectedInbodyImgUrl} alt="" />
            </div>
        </motion.div>
    );
}

export default UserInbodyModal;
