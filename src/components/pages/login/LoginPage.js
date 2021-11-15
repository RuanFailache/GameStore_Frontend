import React from 'react'

const LoginPage = () => {
  return (
    <main>
      <h1>Efetue seu login!</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='E-mail' />
        <input type='password' placeholder='Senha' />
        <button type='submit'>Entrar</button>
      </form>
    </main>
  )
}

export default LoginPage
