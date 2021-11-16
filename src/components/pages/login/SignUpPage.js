import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { doSignUp } from '../../../services/api'

import { FilledButtonStyle } from '../../shared/sharedStyles'
import { FormStyle, InputStyle, AlertStyle } from './loginStyles'

const SignUpPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (name.length >= 3 && /\w+@\w+.com/.test(email) && password.length >= 6 && confirmPassword.length >= 6) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [name, email, password, confirmPassword])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('As senhas devem ser iguais')
      setPassword('')
      setConfirmPassword('')
      return;
    }
    try {
      await doSignUp({ name, password, email });
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setMessage('Cadastro efetuado com sucesso!')
    } catch (err) {
      const { status } = err.response;
      if (status === 409) {
        setMessage('E-mail já existente!')
      }
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h1>Efetue seu cadastro!</h1>
      <InputStyle value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome' />
      <InputStyle value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='E-mail' />
      <InputStyle value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
      <InputStyle value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' placeholder='Confirme sua senha' />
      {message !== '' ? <AlertStyle><span>!</span>{message}</AlertStyle> : null}
      <FilledButtonStyle type='submit' disabled={isDisabled}>Entrar</FilledButtonStyle>
      <Link to='/sign-in'>Já possui uma conta?</Link>
    </FormStyle>
  )
}

export default SignUpPage
