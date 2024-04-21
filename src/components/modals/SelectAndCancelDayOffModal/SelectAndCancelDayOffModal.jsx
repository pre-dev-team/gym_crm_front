/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import * as s from "./style";
import useTrainerApis from "../../../hooks/useTrainerApis";
import { useMutation } from "react-query";
import { deleteHolidayRequest } from "../../../apis/api/holiday";

function SelectAndCancelDayOffModal({accountId, selectDate}) {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const { holidayList } = useTrainerApis(accountId);


    const deleteHolidayMutation = useMutation({
        mutationKey: "deleteHolidayMutation",
        mutationFn: deleteHolidayRequest,
        retry: 0,
        onSuccess: response => {
            console.log(response)
        }
    })

    const handleDeleteClick = () => {
        if(window.confirm("연차 취소하시겠습니까?")) {
            deleteHolidayMutation.mutate({
                accountId: accountId,
                holidayDate: selectDate
            })
        }else {
            
        }
        alert("취소되었습니다");
    }

    return (
        <>
            <div css={s.btnWrapper}>
                <button css={s.modalOpenBtn} onClick={() => setModalOpen(true)}>
                    연차 조회
                </button>
            </div>
            {
                modalOpen &&
                <div css={s.modalContainer} ref={modalBackground}>
                    <div css={s.modalContent}>
                        <h1>연차 조회</h1>
                        <div css={s.layout}>
                            <table css={s.table}>
                                <thead css={s.head}>
                                    <tr css={s.tr}>
                                        <th>번호</th>
                                        <th>날짜</th>
                                        <th>시간</th>
                                        <th>이름</th>
                                        <th>연차</th>
                                    </tr>
                                </thead>
                                <tbody css={s.body}>
                                    {holidayList.map(holiday => (
                                        <tr key={holiday.id} css={s.btr}>
                                            <td>{holiday.holidayId}</td>
                                            <td>{holiday.holidayDate}</td>
                                            <td>{holiday.timeId}</td>
                                            <td>{holiday.name}</td>
                                            <td>
                                                <button onClick={handleDeleteClick}>연차 취소</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <button css={s.modalCloseBtn} onClick={() => setModalOpen(false)}>
                            모달 닫기
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default SelectAndCancelDayOffModal;