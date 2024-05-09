/** @jsxImportSource @emotion/react */
import AdminModalLayout from "../AdminModalLayout/AdminModalLayout";
import * as s from "./style";
import useAdminHolidayApis from "../../../../hooks/useAdminHolidayApis";
import { useMutation, useQueryClient } from "react-query";
import { decideHolidayAppliesRequest } from "../../../../apis/api/admin";

function AdminHolidayModal({ isOpen, setIsAdminHolidayModalOpen, clickedTrainerId, setClickedTrainerId }) {
    const { unconfirmedHolidayApplies, confirmedHolidayApplies } = useAdminHolidayApis(clickedTrainerId);
    const queryClient = useQueryClient();
    const decideHolidayAppliesMutation = useMutation({
        mutationFn: decideHolidayAppliesRequest,
        mutationKey: "decideHolidayAppliesMutation",
        retry: 0,
        onSuccess: (response) => {
            alert("확인되었습니다.");
            queryClient.invalidateQueries("getUnconfirmedHolidayAppliesQuery");
            queryClient.invalidateQueries("getConfirmedHolidayAppliesQuery");
        },
    });

    const handleConfirmClick = (trainerId, holidayDate) => {
        if (window.confirm("승인하시겠습니까?")) {
            decideHolidayAppliesMutation.mutate({
                trainerId: trainerId,
                holidayDate: holidayDate,
                status: true,
            });
        }
    };

    const handleDenyClick = (trainerId, holidayDate) => {
        if (window.confirm("반려하시겠습니까?")) {
            decideHolidayAppliesMutation.mutate({
                trainerId: trainerId,
                holidayDate: holidayDate,
                status: false,
            });
        }
    };

    return (
        <AdminModalLayout isOpen={isOpen} setIsModalOpen={setIsAdminHolidayModalOpen} setValue={setClickedTrainerId}>
            <div css={s.container}>
                <div css={s.uncheckedBox}>
                    <table css={s.uncheckedTable}>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>작성일자</th>
                                <th>이름</th>
                                <th>신청일자</th>
                                <th>시간</th>
                                <th>승인</th>
                                <th>반려</th>
                            </tr>
                            {unconfirmedHolidayApplies.map((holiday, index) => {
                                return (
                                    <tr key={holiday.holidayId}>
                                        <td>{index + 1}</td>
                                        <td>{holiday.createDate}</td>
                                        <td>{holiday.name}</td>
                                        <td>{holiday.holidayDate}</td>
                                        <td>
                                            {holiday.startTimeId + 9}:00 ~ {holiday.endTimeId + 9}:00
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleConfirmClick(holiday.trainerId, holiday.holidayDate)
                                                }
                                            >
                                                승인
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDenyClick(holiday.trainerId, holiday.holidayDate)}
                                            >
                                                반려
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div css={s.checkedBox}>
                    <table css={s.checkedTable}>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>작성일자</th>
                                <th>이름</th>
                                <th>신청일자</th>
                                <th>시간</th>
                                <th>상태</th>
                            </tr>
                            {confirmedHolidayApplies.map((holiday, index) => {
                                return (
                                    <tr key={holiday.holidayId}>
                                        <td>{index + 1}</td>
                                        <td>{holiday.createDate}</td>
                                        <td>{holiday.name}</td>
                                        <td>{holiday.holidayDate}</td>
                                        <td>
                                            {holiday.startTimeId + 9}:00 ~ {holiday.endTimeId + 9}:00
                                        </td>
                                        <td>{holiday.confirm === 2 ? "반려됨" : "승인됨"}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminModalLayout>
    );
}

export default AdminHolidayModal;
