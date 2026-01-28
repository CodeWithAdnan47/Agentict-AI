import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    }

    return (
        <nav style={{ background: 'white', boxShadow: 'var(--shadow)', position: 'sticky', top: 0, zIndex: 10 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>
                    ShopVerse
                </Link>

                <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <li><Link to="/" style={{ fontWeight: 500 }}>Home</Link></li>
                    <li><Link to="/about" style={{ fontWeight: 500 }}>About</Link></li>
                    <li><Link to="/products" style={{ fontWeight: 500 }}>Products</Link></li>
                </ul>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {currentUser ? (
                        <>
                            <span className="text-muted" style={{ fontSize: '0.9rem' }}>{currentUser.email}</span>
                            <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Login</Link>
                            <Link to="/signup" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Signup</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
