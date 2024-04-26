export const REGEX = {
    username: {
        regexr: /^[A-Za-z0-9]{5,10}$/,
        text: "영문자,숫자 포함 5 ~ 10자",
    },
    password: {
        regexr: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,128}$/,
        text: "영문자,숫자,특수문자 포함 5 ~ 128자",
    },
    checkPassword: {
        regexr: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,128}$/,
        text: "영문자,숫자,특수문자 포함 5 ~ 128자",
    },
    name: {
        regexr: /^[가-힇]{2,}$/,
        text: "한글문자 형식이어야 합니다",
    },
    phone: {
        regexr: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
        text: "하이픈을 입력해주세요(010-0000-0000)",
    },
    email: {
        regexr: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
        text: "이메일 형식이어야 합니다",
    },
    get: function (name) {
        return this[name];
    },
};
