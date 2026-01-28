import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section style={{
                padding: '5rem 0',
                background: 'linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%)',
                textAlign: 'center',
                marginBottom: '3rem',
                borderRadius: '0 0 50% 50% / 40px'
            }}>
                <div className="container">
                    <h1 className="text-3xl" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                        Welcome to <span style={{ color: 'var(--primary-color)' }}>ShopVerse</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Discover the best products at unbeatable prices. From fashion to electronics, we have it all.
                    </p>
                    <Link to="/products" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Featured Section */}
            <section className="container" style={{ marginBottom: '5rem' }}>
                <h2 className="text-2xl text-center" style={{ marginBottom: '3rem' }}>Featured Categories</h2>
                <div className="grid-cols-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    {[
                        { name: "Electronics", img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" },
                        { name: "Jewelery", img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" },
                        { name: "Men's Clothing", img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
                        { name: "Women's Clothing", img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" }
                    ].map((cat, index) => (
                        <div key={index} className="card" style={{ textAlign: 'center', transition: 'transform 0.3s' }}>
                            <div style={{ height: '200px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                                <img src={cat.img} alt={cat.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', transition: 'transform 0.5s' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 className="text-xl">{cat.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
