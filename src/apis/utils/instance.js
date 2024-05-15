import axios from "axios";

const instance = axios.create({
    baseURL: "http://3.34.8.7",
    headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
});

export default instance;
