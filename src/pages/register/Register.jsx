import React from 'react'
import "./Register.css"

export default function Register() {
  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className='registerLogo'>Real SNS</h3>
                <span className="registerDesc">本格的なsnsを、自分の手で。</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <p className="registerMessage">新規登録はこちらから</p>
                    <input type="text" className='registerInput' placeholder='ユーザー名' />
                    <input type="text" className='registerInput' placeholder='Eメール' />
                    <input type="text" className='registerInput' placeholder='パスワード' />
                    <input type="text" className='registerInput' placeholder='確認用パスワード' />
                    <button className="registerButton">サインアップ</button>
                    <button className="loginRegisterButton">ログイン</button>
                </div>
            </div>
        </div>
    </div>
  )
}
