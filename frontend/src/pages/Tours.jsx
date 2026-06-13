import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tours')
            .then(res => setTours(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: '100px 20px', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ color: 'white', marginBottom: '40px' }}>All Destinations</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                {tours.map(tour => (
                    <div key={tour._id} style={{ background: 'rgba(30, 41, 59, 0.7)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ height: '200px', backgroundImage: `url(${tour.image_url})`, backgroundSize: 'cover' }}></div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ color: 'white', margin: '0 0 10px 0' }}>{tour.name}</h3>
                            <p style={{ color: '#cbd5e1' }}>⭐ {tour.rating} | Starting at ₹{tour.price}</p>
                            <button style={{ width: '100%', padding: '10px', marginTop: '15px', borderRadius: '8px', background: 'linear-gradient(45deg, #FFCC70, #C850C0)', color: 'black', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tours;
