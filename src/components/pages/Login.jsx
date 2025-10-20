import React, { useState } from 'react';
import './Login.css';

const Login = () => {

  const [showAccordion, setShowAccordion] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    policy: false,
  });

  const onChangeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('Authentication Data:', formData);

    
  };

  const toggleAccordion = () => {
    setShowAccordion((prev) => !prev);
  };


  return (
    <div className="login-container">
      <form onSubmit={onSubmit} className="login-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        {!isLogin && (
          <div className="accordion-section">
            <button
              type="button"
              className="accordion-toggle"
              onClick={toggleAccordion}
            >
              {showAccordion ? 'Hide Policy Agreement' : 'Show Policy Agreement'}
            </button>

            {showAccordion && (
              <div className="accordion-content">
                <label htmlFor="policy">
                  <input
                    type="checkbox"
                    id="policy"
                    name="policy"
                    checked={formData.policy}
                    onChange={onChangeHandler}
                  />
                  I agree to the privacy policy.
                </label>
              </div>
            )}
          </div>
        )}

        <button type="submit" className="submit-button">
          Submit
        </button>

        <button
          type="button"
          className="switch-button"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          Switch to {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
