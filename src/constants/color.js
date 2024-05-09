export const color = {
    1: "#ffffff", // 순백색
    2: "#f8e7e7", // 연한 핑크
    3: "#e0ffff", // 연한 청록색
    4: "#e6e6fa", // 라벤더
    5: "#f0e68c", // 카키
    6: "#fafad2", // 연한 황금색
    7: "#ffe4e1", // 밝은 핑크
    8: "#d3d3d3", // 밝은 회색
    9: "#ffcccb", // 연한 살구색
    10: "#ffffe0", // 라이트 옐로우
    11: "#ffe4b5", // 모카신
    12: "#ffefd5", // 파파야휩
    13: "#fff0f5", // 라벤더 블러쉬
    14: "#faebd7", // 앤티크 화이트
    15: "#ffebcd", // 블랜디드 알몬드
    16: "#fffacd", // 레몬 샤르뱅
    17: "#fffafa", // 눈사람
    18: "#f0fff0", // 허니듀
    19: "#f5fffa", // 밝은 민트
    20: "#faf0e6", // 린넨
    get: function () {
        return this[Math.floor(Math.random() * 21 + 1)];
    },
};
