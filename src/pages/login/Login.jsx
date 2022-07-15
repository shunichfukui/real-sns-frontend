import React, { useContext, useRef } from 'react'
import "./Login.css"
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const handleSubmit = (e) => {
      e.preventDefault();
      loginCall(
          {
              email: email.current.value,
              password: password.current.value,
          },
          dispatch
      )
  };

  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Real SNS</h3>
                <span className="loginDesc">本格的なsnsを、自分の手で。</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                    <p className="loginMessage">ログインはこちらから</p>
                    <input type="email" required ref={email} className='loginInput' placeholder='Eメール' />
                    <input type="password" required ref={password} minLength="6" className='loginInput' placeholder='パスワード' />
                    <button className="loginButton">ログイン</button>
                    <span className="loginForgot">パスワードを忘れた方へ</span>
                    <button className="loginRegisterButton">アカウント作成</button>
                </form>
            </div>
        </div>
    </div>
  )
}
