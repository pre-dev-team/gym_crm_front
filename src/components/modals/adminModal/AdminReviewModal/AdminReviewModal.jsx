/** @jsxImportSource @emotion/react */
import AdminModalLayout from "../AdminModalLayout/AdminModalLayout";
import * as s from "./style";

function AdminReviewModal({ setIsAdminReviewModalOpen }) {
    return (
        <AdminModalLayout setIsAdminReviewModalOpen={setIsAdminReviewModalOpen}>
            <div css={s.linkBox}>
                <table css={s.table}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2024-04-15</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2024-04-15</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2024-04-15</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2024-04-15</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2024-04-15</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2024-04-15</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2024-04-15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div css={s.imgBox}>
                <img src="" alt="인바디" />
            </div>
        </AdminModalLayout>
    );
}

export default AdminReviewModal;
