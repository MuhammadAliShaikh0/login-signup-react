import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="toggle">
          <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
        </div>
        {isLogin ? (
          <div className="form">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required /><br />
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <div className="form">
            <h2>Signup</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required /><br />
              <button type="submit">Signup</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
