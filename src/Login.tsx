import React, { useState } from 'react';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }
    toast.success('Giriş başarılı!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <div className="login-container">
      <form className="login-form enhanced" onSubmit={handleSubmit}>
        <div className="logo-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQHMTbUNMzgdGg/company-logo_200_200/company-logo_200_200/0/1637262407500/iknowtechnology_logo?e=1755734400&v=beta&t=Q4pF0nCoxgQucto4ca5csisn3xZ6UMGQlEtLvIyAh8s"
            alt="iKnow Technology Logo"
            className="company-logo"
          />
        </div>
        <h2 className="login-title">iKnow Technology Yönetici Paneli </h2>
        <div className="input-group">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-posta adresinizi girin"
            autoComplete="username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Şifre</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Şifrenizi girin"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-btn" type="submit">Giriş Yap</button>
        <div className="login-links">
          <a href="#">Şifremi unuttum</a>
          <span> | </span>
          <a href="#">Kayıt Ol</a>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
