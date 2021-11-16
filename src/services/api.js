import axios from "axios";

const URL = 'https://gamestore-back.herokuapp.com';

const getProduct = (id) => {
  return axios.get(`${URL}/products/${id}`);
}

export {
  getProduct
}