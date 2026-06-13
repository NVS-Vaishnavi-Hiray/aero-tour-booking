import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="nav-logo">
                <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '24px', fontWeight: '700' }}>
                    <span style={{ color: '#C850C0' }}>✈</span> AeroTours
                </Link>
            </div>
            <div className="nav-links" id="navLinks">
                <Link to="/tours">Destinations</Link>
                <Link to="/itinerary">Build Itinerary</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/compare">Compare</Link>
                <Link to="/contact">Contact</Link>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to="/login" className="nav-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>Login</Link>
                    <Link to="/register" className="nav-btn">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
