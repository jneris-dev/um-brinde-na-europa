import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});