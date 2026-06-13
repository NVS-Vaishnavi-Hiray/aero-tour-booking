import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div style={{ padding: '100px 20px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: 'rgba(30, 41, 59, 0.8)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>Login to AeroTours</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                    <button type="submit" style={{ padding: '12px', borderRadius: '8px', background: 'linear-gradient(45deg, #FFCC70, #C850C0)', color: 'black', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
