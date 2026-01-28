import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/products');
        } catch (err) {
            setError('Failed to log in: ' + err.message);
        }

        setLoading(false);
    }

    return (
        <div className="container page-container fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '2rem' }}>
                <h2 className="text-2xl text-center" style={{ marginBottom: '1.5rem' }}>Log In</h2>

                {error && <div style={{ background: '#fee2e2', color: '#ef4444', padding: '0.75rem', borderRadius: 'var(--border-radius)', marginBottom: '1rem' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button disabled={loading} className="btn btn-primary" style={{ width: '100%' }}>
                        {loading ? 'Logging In...' : 'Log In'}
                    </button>
                </form>

                <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
                    Need an account? <Link to="/signup" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
