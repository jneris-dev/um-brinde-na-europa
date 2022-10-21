import axios from "axios";

export default axios.create({
    baseURL: "https://api.teste-frontend.ateliedepropaganda.com.br/v1",
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});