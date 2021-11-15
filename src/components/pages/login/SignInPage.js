import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FilledButtonStyle } from '../../shared/sharedStyles'
import { FormStyle, InputStyle, AlertStyle } from './loginStyles'

const SignInPage = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [messageError, setMessageError] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (/\w+@\w+.com/.test(email) && password.length >= 6) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email, password])

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageError('testando')
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h1>Efetue seu login!</h1>
      <InputStyle value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='E-mail' />
      <InputStyle value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
      {messageError !== '' ? <AlertStyle><span>!</span>{messageError}</AlertStyle> : null}
      <FilledButtonStyle type='submit' disabled={isDisabled}>Entrar</FilledButtonStyle>
      <Link to='/sign-up'>Não possui uma conta? Crie uma agora!</Link>
    </FormStyle>
  )
}

export default SignInPage
