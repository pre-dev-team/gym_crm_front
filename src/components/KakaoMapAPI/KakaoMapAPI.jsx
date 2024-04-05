import { useEffect } from 'react';

const { kakao } = window;

function KakaoMapAPI() {

  useEffect(() => {
      const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };
    
      const map = new kakao.maps.Map(container, options);
      const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch('부산 부산진구 중앙대로 668', function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
  
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });
  
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width: 150px; color: black; text-align: center; padding: 6px 0; font-size: 11px">코리아IT 피트니스(본점)</div>'
        });
        infowindow.open(map, marker);
  
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    })
  }, []);


  return (
    <div id="map" style={{
          width: "200px",
          height: "200px"
    }}></div>
  );
}

export default KakaoMapAPI;