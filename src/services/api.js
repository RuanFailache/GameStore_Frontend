import axios from "axios";
const URL = 'https://gamestore-back.herokuapp.com';

function getProducts(){
    const promise = axios.get(`${URL}/products`);
    return promise;
}

function postPurchase(body){
    const promise = axios.post(`${URL}/purchases`, body);
    return promise;
}

export{ getProducts, postPurchase }