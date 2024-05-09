/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style";
import useTrainerApis from "../../../../hooks/useTrainerApis";
import { useMutation } from "react-query";
import { deleteHolidayRequest } from "../../../../apis/api/holiday";

function SelectAndCancelDayOffModal({ accountId }) {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const { allHolidayList } = useTrainerApis(accountId);
    const [holidayListDayByDay, setHolidayListDayByDay] = useState([]);

    const deleteHolidayMutation = useMutation({
        mutationKey: "deleteHolidayMutation",
        mutationFn: deleteHolidayRequest,
        retry: 0,
        onSuccess: (response) => {
            alert("취소되었습니다");
            window.location.replace("/");
        },
        error: (error) => {
            console.log(error.response.data);
        },
    });

    useEffect(() => {
        const unconfirmed = allHolidayList.filter((holiday) => holiday.confirm === 0);
        const confirmed = allHolidayList.filter((holiday) => holiday.confirm === 1);
        const dinied = allHolidayList.filter((holiday) => holiday.confirm === 2);

        setHolidayListDayByDay(() => [unconfirmed, confirmed, dinied]);
    }, [allHolidayList]);

    const handleDeleteClick = (date) => {
        if (window.confirm("연차 취소하시겠습니까?")) {
            deleteHolidayMutation.mutate({
                accountId: accountId,
                holidayDate: date,
            });
        } else {
        }
    };

    return (
        <>
            <div css={s.btnWrapper}>
                <button css={s.modalOpenBtn} onClick={() => setModalOpen(true)}>
                    연차 조회
                </button>
            </div>
            {modalOpen && (
                <div css={s.modalContainer} ref={modalBackground}>
                    <div css={s.modalContent}>
                        <h1>연차 조회</h1>
                        <div css={s.layout}>
                            {holidayListDayByDay.map((list, dayIndex) => (
                                <div css={s.tableBox} key={dayIndex}>
                                    <table css={s.table}>
                                        <thead css={s.head}>
                                            <tr css={s.tr}>
                                                <th>번호</th>
                                                <th>날짜</th>
                                                <th>시간</th>
                                                <th>이름</th>
                                                <th>승인</th>
                                                <th>연차</th>
                                            </tr>
                                        </thead>
                                        <tbody css={s.body}>
                                            {list.map((holiday, index) => (
                                                <tr key={index} css={s.btr}>
                                                    <td>{index + 1}</td>
                                                    <td>{holiday.holidayDate}</td>
                                                    <td>
                                                        {holiday.startTimeId + 10}:00 ~ {holiday.endTimeId + 10}:00
                                                    </td>
                                                    <td>{holiday.name}</td>
                                                    <td>{s.searchTypeOption2[holiday.confirm]}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => handleDeleteClick(holiday.holidayDate)}
                                                            disabled={holiday.confirm !== 0}
                                                        >
                                                            연차 취소
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                        <button css={s.modalCloseBtn} onClick={() => setModalOpen(false)}>
                            창 닫기
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default SelectAndCancelDayOffModal;
