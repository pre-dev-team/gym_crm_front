/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect } from "react";
const { kakao } = window;

function KakaoMapAPI() {
    useEffect(() => {
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };

        const map = new kakao.maps.Map(container, options);
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch("부산 부산진구 중앙대로 668", function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                });

                var infowindow = new kakao.maps.InfoWindow({
                    content:
                        '<div style="width: 150px; color: black; text-align: center; padding: 6px 0; font-size: 11px">PRE-DEV</div>',
                });
                infowindow.open(map, marker);
                map.setCenter(coords);
            }
        });
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.mapBox}>
                <h1>@location</h1>
                <div
                    id="map"
                    style={{
                        width: "350px",
                        height: "350px",
                    }}
                ></div>
            </div>
            <table css={s.table}>
                <tbody>
                    <tr>
                        <th>주소</th>
                        <td>부산광역시 부산진구 중앙대로 668 A1(에이원)프라자 4층</td>
                    </tr>
                    <tr>
                        <th>상담번호</th>
                        <td>051-914-5890~2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default KakaoMapAPI;
