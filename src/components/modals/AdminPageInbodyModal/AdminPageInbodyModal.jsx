/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminPageInbodyModal({ setIsInbodyModalOpen }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.tableBox}>
                    <table css={s.table}>
                        <thead>
                            <tr>
                                <th>순번</th>
                                <th>날짜</th>
                                <th>담당트레이너</th>
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
                <div css={s.imgBox}>
                    <img
                        src="https://m.medifoyou.com/web/product/extra/big/201906/c9e62a65f04da6b7e7cf3950ec938257.png"
                        alt="인바디"
                    />
                </div>
                <button onClick={() => setIsInbodyModalOpen(() => false)}>닫기</button>
            </div>
        </div>
    );
}

export default AdminPageInbodyModal;
