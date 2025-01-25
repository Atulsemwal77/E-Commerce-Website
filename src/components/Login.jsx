import img from '../assets/products/dl.beatsnoop 1.png';

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert('Please enter details!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('user') || '[]');
    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      alert('Login Successful!');
      // Navigate to dashboard and pass user details
      navigate('/Account', { state: { user: userFound } });
    } else {
      setMsg('Invalid Email or Password!');
    }
  };

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 p-2">
            <img src={img} className="img-fluid" />
          </div>

          <div className="col-md-6 p-2">
            <div className="text-center mb-4">
              <h3>Log in to Exclusive</h3>
              <p>Enter Your details below</p>
            </div>
            {msg && <p className="errMsg">{msg}</p>}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="mb-1 my-4">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={handleInput}
                />
              </div>
              <div className="btn text-center w-100 mt-2">
                <button type="submit" className="btn btn-danger">
                  Login
                </button>
                <p className="forget">Forgot password?</p>
                <p>
                  Don't have an account?{" "}
                  <Link to="/Signup" style={{ textDecoration: "none", color: "red" }}>
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
