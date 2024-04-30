import instance from "../utils/instance";

export const oAuth2GoogleRequest = async(data) => {
  const response = await instance.post("/oauth2/authorization/google", data);
  return response;
}

export const oAuth2NaverRequest = async(data) => {
  const response = await instance.post("/oauth2/authorization/naver", data);
  return response;
}

export const oAuth2KaKaoRequest = async(data) => {
  const response = await instance.post("/oauth2/authorization/kakao", data);
  return response;
}