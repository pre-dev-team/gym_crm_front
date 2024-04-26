/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import { getInbodyInformationRequest } from "../../../apis/api/inbody";

function SelectInbodyModal({userId}) {
    const [inbodyInformation, setInbodyInformation] = useState("");

    const userInformationQuery = useQuery(
        ["userInformationQuery", userId],
        () =>
            getInbodyInformationRequest({
                userId: userId
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !!userId,
            onSuccess: response => {
                console.log(response.data);
                setInbodyInformation(response.data);
            }
        }
    );

    console.log(inbodyInformation)


    return (
        <div css={s.test}>
            <table css={s.table2}>
                <thead css={s.head}>
                    <tr css={s.tr}>
                        <th>번호</th>
                        <th>이름</th>
                        <th>시간</th>
                        <th>이름</th>
                        <th>승인</th>
                        <th>연차</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export default SelectInbodyModal;