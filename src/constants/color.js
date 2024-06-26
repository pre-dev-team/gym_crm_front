export const randomColor = {
    1: "#33ff33", // 형광 녹색
    2: "#ff33ff", // 형광 핑크
    3: "#ffff33", // 형광 노랑
    4: "#33ffff", // 형광 청록색
    5: "#ff3333", // 형광 빨강
    6: "#ff6633", // 형광 주황
    7: "#33ff66", // 밝은 형광 녹색
    8: "#ff3399", // 형광 분홍
    9: "#66ff33", // 밝은 형광 녹색
    10: "#ffcc33", // 형광 금색
    11: "#33ccff", // 밝은 형광 파랑
    12: "#cc33ff", // 형광 보라
    13: "#ff66cc", // 형광 라즈베리
    14: "#ccff33", // 형광 라임
    15: "#ff9966", // 밝은 형광 주황
    16: "#99ff33", // 라임 그린
    17: "#ff6633", // 형광 살몬
    18: "#ff3399", // 형광 핫 핑크
    19: "#ffcc00", // 형광 머스타드
    20: "#ccff66", // 연한 형광 녹색
    get: function () {
        return this[Math.floor(Math.random() * 21 + 1)];
    },
};
