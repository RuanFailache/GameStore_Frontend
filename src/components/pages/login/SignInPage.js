import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { doSignIn } from '../../../services/api'

import { FilledButtonStyle } from '../../shared/sharedStyles'
import { FormStyle, InputStyle, AlertStyle } from './loginStyles'

const SignInPage = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [messageError, setMessageError] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)
  const navigateTo = useNavigate();

  useEffect(() => {
    if (/\w+@\w+.com/.test(email) && password.length >= 6) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email, password])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await doSignIn({ email, password });
      localStorage.setItem("user", JSON.stringify({
        token: result.data.token,
        user: { ...result.data.user },
      }));
      navigateTo('/')
    } catch (err) {
      const { status } = err.response;
      if (status === 404) {
        setMessageError('Dados de login inválidos!');
      }
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h1>Efetue seu login!</h1>
      <InputStyle value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='E-mail' />
      <InputStyle value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
      {messageError !== '' ? <AlertStyle><span>!</span>{messageError}</AlertStyle> : null}
      <FilledButtonStyle type='submit' disabled={isDisabled}>Entrar</FilledButtonStyle>
      <Link to='/sign-up'>Não possui uma conta?<br />Crie uma agora!</Link>
    </FormStyle>
  )
}

export default SignInPage
