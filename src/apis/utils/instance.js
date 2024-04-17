import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
  }
});

// 요청 시 인증 헤더 제거
instance.interceptors.request.use(config => {
  // 특정 엔드포인트에 대해 인증이 필요하지 않은 경우에만 인증 헤더를 제거
  if (config.url === '/review/toprated') {
    delete config.headers.Authorization;
  }
  return config;
});

export default instance;
