import axios from 'axios';

const URL = 'https://gamestore-back.herokuapp.com';

function getProducts() {
  const promise = axios.get(`${URL}/products`);
  return promise;
}

const getProduct = (id) => {
  return axios.get(`${URL}/products/${id}`);
}

const doSignUp = (body) => {
  return axios.post(`${URL}/sign-up`, body)
}

const doSignIn = (body) => {
  return axios.post(`${URL}/sign-in`, body)
}

export {
  getProducts,
  getProduct,
  doSignUp,
  doSignIn,
}
