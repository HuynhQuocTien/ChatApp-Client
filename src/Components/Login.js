import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const BASE_URL = 'http://127.0.0.1:8000/';
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${BASE_URL}login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            }
        )
    }
  return (
    <>
      <div className='container text-center'>
        <h2>LOGIN</h2>
        <form className='d-flex flex-column gap-2'>      
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            required
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            required
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <Button variant="contained" onClick={handleSubmit}>Login</Button>
        </form>
      </div>
    </>
  );
};

export default Login;