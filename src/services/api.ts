import axios from "axios";

export default axios.create({
    baseURL: "api.teste-frontend.ateliedepropaganda.com.br/v1",
    headers: {
        "Content-type": "application/json"
    }
});