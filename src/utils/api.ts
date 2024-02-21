import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:8090/",
    baseURL: "https://api-ecosys.azurewebsites.net/",
})

export default api