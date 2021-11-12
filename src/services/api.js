import axios from "axios";
const URL = 'http://localhost:4000';

function getProducts(){
    const promise = axios.get(`${URL}/products`);
    return promise;
}

export{ getProducts }