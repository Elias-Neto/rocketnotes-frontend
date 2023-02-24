import axios from "axios"

const api = axios.create({
  baseURL: "https://rocketnotes-backend-14b2.onrender.com",
})

export default api
