import api from "./api";
import { Data } from "../interface/interfaces"

class DataService {
    create(data: Data) {
        return api.post<Data>("/register", data);
    }
}

export default new DataService();