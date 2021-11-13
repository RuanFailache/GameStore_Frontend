
import axios from "axios";
const URL = 'http://localhost:4000';

function getProductById(id) {
    const promise = axios.get(`${URL}/product/${id}`);
    return promise;
}

export{ getProductById } 