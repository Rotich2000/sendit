"use client"
import { useState } from 'react';
import Head from 'next/head';

const hardcodedUsers: { [key: string]: string } = {
  admin: 'admin',
  user1: 'user1',
  user2: 'user2',
};

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');

    if (hardcodedUsers[username] === password) {
      // Successful login, you can redirect to the dashboard or perform other actions
      console.log('Login successful!');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Order and Process Parcels" />
        <meta name="author" content="Sanni Michael Tomiwa" />
        <title>Send IT | Login</title>
      </Head>

      <header style={{ background: '#196282', color: '#ffffff', paddingTop: '30px', minHeight: '70px', borderBottom: '#fff 3px solid' }}>
        <div className="container">
          <div id="branding">
            <h1 style={{ margin: '0' }}>
              <a href="/">
                <span id="trackerText">Send<span id="highlighter">it</span></span>
              </a>
            </h1>
          </div>
          <nav style={{ float: 'right', marginTop: '10px' }}>
            <ul>
              <li>
                <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px' }}>Home</a>
              </li>
              <li>
                <a className="current" href="/login" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px' }}>
                  Login
                </a>
              </li>
              <li>
                <a href="/signup" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px' }}>Signup</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="login-bar"
        style={{
          width: '100%',
          backgroundColor: '#fff',
          padding: '20px',
          marginTop: '20px',
        }}
      >
        <div
          className="white-login"
          style={{
            padding: '15px',
            background: '#fff',
            color: '#ffffff',
            marginBottom: '0px',
            height: '600px',
            margin: '0',
          }}
        >
          <br />
          <br />
          <div style={{ width: '37%', margin: '-30px auto', border: '1px solid grey' }}>
            <h3 id="quoteTitle" style={{ textAlign: 'center', marginLeft: '-21px', color: '#f65383' }}>Login</h3>
            <div>
              <br />
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ 
                  width: '55%',
                  padding: '10px',
                  margin: '8px 106px',
                  textAlign: 'center',
                  display: 'inline-block',
                  border: '1px solid grey',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  fontSize: '18px',
                  color: 'black', // Set the text color to black
                }}
              />
            </div>
            <div>
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ 
                  width: '55%',
                  padding: '10px',
                  margin: '8px 106px',
                  textAlign: 'center',
                  display: 'inline-block',
                  border: '1px solid grey',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  fontSize: '18px',
                  color: 'black', // Set the text color to black
                }}
              />
            </div>
            <button
              id="buttonSubmit"
              onClick={handleLogin}
              style={{
                width: '45%',
                background: '#196282',
                color: '#ffffff',
                padding: '12px 40px',
                borderRadius: '10px',
                fontSize: '18px',
                margin: '31px 136px',
              }}
            >
              Submit
            </button>
            {error && (
              <p
                style={{
                  color: '#f00',
                  textAlign: 'center',
                  marginTop: '10px',
                }}
              >
                {error}
              </p>
            )}
          </div>
          <br />
          <br />
        </div>
      </section>

      <footer style={{ clear: 'both', position: 'absolute', left: '0', right: '0', zIndex: '10', height: '3em', padding: '1px', color: '#ffffff', backgroundColor: '#196282', textAlign: 'center', margin: '0' }}>
        <p>
          <span id="trackerText">Send<span id="highlighter">it</span></span>, Copyright &copy; 2018
        </p>
      </footer>
    </div>
  );
};

export default Login;
