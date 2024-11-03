// Login.js
import React, { useState } from 'react';
import '../Style/Login.css';// Import file CSS

const Login = () => {
  // State để lưu trữ email và mật khẩu
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Hàm xử lý khi người dùng thay đổi input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Hàm xử lý khi người dùng nhấn nút đăng nhập
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra email và mật khẩu có hợp lệ không (giả sử hợp lệ nếu email và password không trống)
    if (email === '' || password === '') {
      setError(true);
    } else {
      setError(false);
      console.log('Đăng nhập thành công với email:', email);
      // Xử lý đăng nhập (gửi dữ liệu lên server)
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p className="error-message">Please enter both email and password.</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
