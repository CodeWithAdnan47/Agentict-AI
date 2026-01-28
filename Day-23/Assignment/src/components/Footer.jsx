import React from 'react';

export default function Footer() {
    return (
        <footer style={{ background: 'var(--secondary-color)', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>ShopVerse</h2>
                <p style={{ color: '#94a3b8', textAlign: 'center', maxWidth: '500px' }}>
                    Your one-stop destination for everything you need. Quality products, best prices, and fast delivery.
                </p>
                <div style={{ borderTop: '1px solid #334155', width: '100%', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#94a3b8' }}>
                    &copy; {new Date().getFullYear()} ShopVerse. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
