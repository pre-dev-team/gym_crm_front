/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminPageReviewModal({ setIsReviewModalOpen }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.tableBox}>
                    <table css={s.table}>
                        <thead>
                            <tr>
                                <th>순번</th>
                                <th>날짜</th>
                                <th>해당트레이너</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a>2022-04-10</a>
                                </td>
                                <td>피카츄</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a>2022-04-10</a>
                                </td>
                                <td>피카츄</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a>2022-04-10</a>
                                </td>
                                <td>피카츄</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a>2022-04-10</a>
                                </td>
                                <td>피카츄</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a>2022-04-10</a>
                                </td>
                                <td>피카츄</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <a>2022-04-10</a>
                                </td>
                                <td>피카츄</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div css={s.reviewBox}>
                    <div css={s.title}>
                        <div>작성일: 2024-04-10</div>
                        <div>ㅁㅁㅁㅁㅁ</div>
                        <div>트레이너: 피카츄</div>
                    </div>
                    <div css={s.content}>좋아요 시바꺼</div>
                </div>
                <button onClick={() => setIsReviewModalOpen(() => false)}>닫기</button>
            </div>
        </div>
    );
}

export default AdminPageReviewModal;
