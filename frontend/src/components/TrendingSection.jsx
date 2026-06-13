import { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingSection = () => {
    const [destinations, setDestinations] = useState([]);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        // Fetch from backend
        axios.get(`http://localhost:5000/api/tours/trending?category=${category}`)
            .then(res => setDestinations(res.data.data || []))
            .catch(err => console.error(err));
    }, [category]);

    return (
        <div className="trending-section" style={{ padding: '60px 20px', background: 'linear-gradient(180deg, #000 0%, #0f172a 100%)', position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ color: 'white', fontSize: '36px', margin: '0 0 10px 0', fontWeight: 700 }}>Today's Trending Searches</h2>
                <p style={{ color: '#94a3b8', margin: '0 0 30px 0', fontSize: '16px' }}>Discover what other travelers are exploring right now.</p>

                <div className="trending-categories" style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '15px', marginBottom: '20px' }}>
                    {['all', 'Beaches', 'Hill Stations', 'Spiritual', 'Hidden Gems'].map(cat => (
                        <button key={cat} onClick={() => setCategory(cat)} className={`category-pill ${category === cat ? 'active' : ''}`} style={category === cat ? { background: 'linear-gradient(45deg, #FFCC70, #C850C0)', color: '#000', border: 'none', padding: '10px 24px', borderRadius: '30px', fontWeight: 600 } : { background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 24px', borderRadius: '30px', fontWeight: 500 }}>
                            {cat === 'all' ? '🔥 Trending Today' : cat}
                        </button>
                    ))}
                </div>

                <div id="trending-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                    {destinations.map(dest => (
                        <div key={dest._id} className="trending-card" style={{ background: 'rgba(30, 41, 59, 0.7)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                <div style={{ width: '100%', height: '100%', backgroundImage: `url(${dest.image_url || '/assets/images/default.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, color: 'white', border: `1px solid ${dest.badge.includes('🔥') ? '#ef4444' : '#3b82f6'}` }}>
                                    {dest.badge}
                                </div>
                            </div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ margin: 0, color: 'white', fontSize: '20px' }}>{dest.name}</h3>
                                <p style={{ color: '#94a3b8', fontSize: '13px' }}>Starting from ₹{dest.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingSection;
