export const REGEX = {
    userUsername: {
        regexr: /^[A-Za-z0-9]{5,10}$/,
        text: "영문자,숫자 포함 5 ~ 10자",
    },
    userPassword: {
        regexr: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,128}$/,
        text: "영문자,숫자,특수문자 포함 5 ~ 128자",
    },
    userName: {
        regexr: /^[가-힇]{2,}$/,
        text: "한글문자 형식이어야 합니다",
    },
    userPhone: {
        regexr: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
        text: "전화번호 형식이어야 합니다",
    },
    userEmail: {
        regexr: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
        text: "이메일 형식이어야 합니다",
    },
};
