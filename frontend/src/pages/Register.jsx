import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ fname: '', lname: '', email: '', password: '', phone: '', gender: 'Male' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            alert('Registration failed');
        }
    };

    return (
        <div style={{ padding: '100px 20px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: 'rgba(30, 41, 59, 0.8)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '500px' }}>
                <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>Register</h2>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <input type="text" placeholder="First Name" required onChange={e => setFormData({...formData, fname: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                    <input type="text" placeholder="Last Name" required onChange={e => setFormData({...formData, lname: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                    <input type="email" placeholder="Email" required onChange={e => setFormData({...formData, email: e.target.value})} style={{ gridColumn: 'span 2', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                    <input type="password" placeholder="Password" required onChange={e => setFormData({...formData, password: e.target.value})} style={{ gridColumn: 'span 2', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
                    <button type="submit" style={{ gridColumn: 'span 2', padding: '12px', borderRadius: '8px', background: 'linear-gradient(45deg, #FFCC70, #C850C0)', color: 'black', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
