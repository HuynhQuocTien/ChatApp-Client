import React,{ useState }  from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


export default function Register() {
    const BASE_URL = 'http://127.0.0.1:8000/';
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${BASE_URL}register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
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
                <h2>Register</h2>
                <form className='d-flex flex-column gap-2'>
                    <TextField
                        id="firstname"
                        label="firstname"
                        variant="outlined"
                        required
                        onChange={e => setFormData({...formData, firstname: e.target.value})}
                    /><TextField
                        id="lastname"
                        label="lastname"
                        variant="outlined"
                        required
                        onChange={e => setFormData({...formData, lastname: e.target.value})}
                    />
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        required
                        onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        required
                        onChange={e => setFormData({...formData, password: e.target.value})}
                    />
                    <Button variant="contained" onClick={handleSubmit}>Register</Button>
                </form>
            </div>
        </>
    )
}