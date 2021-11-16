import axios from 'axios';

const URL = 'https://gamestore-back.herokuapp.com';

const doSignUp = (body) => {
  return axios.post(`${URL}/sign-up`, body)
}

const doSignIn = (body) => {
  return axios.post(`${URL}/sign-in`, body)
}

export {
  doSignUp,
  doSignIn,
}