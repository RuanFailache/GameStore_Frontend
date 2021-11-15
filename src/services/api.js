import axios from "axios";
const URL = 'https://gamestore-back.herokuapp.com';

function getProducts(){
    const promise = axios.get(`${URL}/products`);
    return promise;
}

export{ getProducts }