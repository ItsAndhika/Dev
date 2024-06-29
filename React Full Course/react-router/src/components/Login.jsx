import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const loginHandler = e => {
        e.preventDefault()
        const isLoginSuccess = true
        if(isLoginSuccess) {
            navigate('/dashboard')
        } else {
            return false
        }
    }

  return (
    <form onSubmit={loginHandler}>
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login
