import React from 'react';
import TrendingSection from '../components/TrendingSection';

const Home = () => {
    return (
        <div>
            <div className="crystal-background">
                <div className="crystal crystal-1"></div>
                <div className="crystal crystal-2"></div>
                <div className="crystal crystal-3"></div>
                <div className="crystal crystal-4"></div>
                <div className="crystal crystal-5"></div>
                <div className="crystal crystal-6"></div>
            </div>

            <div className="hero-slideshow" style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center' }}>
                <div className="hero-overlay" style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '10%', pointerEvents: 'none', zIndex: 10 }}>
                    <div className="hero-section" style={{ padding: '60px', textAlign: 'left', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', maxWidth: '650px', pointerEvents: 'auto', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                        <h1 style={{ fontSize: '3.5rem', lineHeight: 1.2, marginBottom: '20px', fontWeight: 700 }}>
                            Discover the World's Most <span style={{ background: 'linear-gradient(45deg, #FFCC70, #C850C0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Breathtaking</span> Destinations
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', lineHeight: 1.6 }}>Spin the globe and book premium, curated travel experiences.</p>
                        
                        <form className="search-container" style={{ background: 'rgba(0,0,0,0.4)', padding: '10px', borderRadius: '60px', border: '1px solid rgba(255,255,255,0.15)' }}>
                            <input type="text" className="search-input" placeholder="Where to?" style={{ background: 'transparent', color: 'white', border: 'none', paddingLeft: '20px' }} />
                            <button type="submit" className="search-btn" style={{ borderRadius: '50px' }}>Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <TrendingSection />
        </div>
    );
};

export default Home;
