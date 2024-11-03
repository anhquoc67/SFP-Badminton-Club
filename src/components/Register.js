// Register.js
import React, { useState } from 'react';
import '../Style/Register.css'; // Import file CSS

const Register = () => {
  // State để lưu trữ thông tin người dùng nhập
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Hàm xử lý thay đổi khi người dùng nhập dữ liệu
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Hàm xử lý khi người dùng nhấn nút đăng ký
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu có hợp lệ không (giả sử hợp lệ nếu các trường không trống)
    if (formData.name === '' || formData.email === '' || formData.password === '') {
      setError(true);
    } else {
      setError(false);
      setSubmitted(true);
      console.log('Thông tin đăng ký:', formData);
      
      // Xử lý logic đăng ký (gửi dữ liệu lên server) ở đây

      // Reset form sau khi đăng ký
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      {submitted && <p className="success-message">You have successfully registered!</p>}
      {error && <p className="error-message">Please fill in all fields.</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
