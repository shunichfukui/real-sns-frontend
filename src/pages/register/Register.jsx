import axios from 'axios';
import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Register.css"

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const gotoLoginPage = () => {
    navigate("/login");
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      // パスワードと確認用のパスワードがあっているか確認
      if (password.current.value !== passwordConfirmation.current.value) {
          passwordConfirmation.current.setCustomValidity('パスワードと確認用パスワードが違います。')
      } else {
          try {
              const user = {
                  username: username.current.value,
                  email: email.current.value,
                  password: password.current.value,
              };
              await axios.post("/auth/register", user)
              navigate("/login");

          } catch (err) {
              console.log(err);
          }
      }
  };

  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className='registerLogo'>Real SNS</h3>
                <span className="registerDesc">本格的なsnsを、自分の手で。</span>
            </div>
            <div className="registerRight">
                <form className="registerBox" onSubmit={(e) => handleSubmit(e)}>
                    <p className="registerMessage">新規登録はこちらから</p>
                    <input type="text" className='registerInput' required ref={username} placeholder='ユーザー名' />
                    <input type="email" className='registerInput' required ref={email} placeholder='Eメール' />
                    <input type="password" className='registerInput' required ref={password} placeholder='パスワード' minLength="6" />
                    <input type="password" className='registerInput' required ref={passwordConfirmation} placeholder='確認用パスワード' minLength="6" />
                    <button className="registerButton" type='submit'>サインアップ</button>
                    <button className="loginRegisterButton" onClick={gotoLoginPage}>ログイン</button>
                </form>
            </div>
        </div>
    </div>
  )
}
