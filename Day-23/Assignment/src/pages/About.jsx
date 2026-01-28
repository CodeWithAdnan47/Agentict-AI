import React from 'react';

export default function About() {
    return (
        <div className="container page-container fade-in">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="text-3xl text-center" style={{ marginBottom: '3rem' }}>About ShopVerse</h1>

                <div className="card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                    <h2 className="text-2xl" style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Our Mission</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        At ShopVerse, our mission is to provide equal access to high-quality goods for consumers around the world.
                        We believe that shopping should be simple, transparent, and enjoyable. We curate the best products so you don't have to.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                    <div className="card" style={{ padding: '2rem' }}>
                        <h3 className="text-xl" style={{ marginBottom: '1rem' }}>What We Sell</h3>
                        <p className="text-muted">
                            We offer a wide range of products including top-tier electronics, fashionable clothing for men and women,
                            and exquisite jewelry. Our inventory is constantly updated with the latest trends.
                        </p>
                    </div>
                    <div className="card" style={{ padding: '2rem' }}>
                        <h3 className="text-xl" style={{ marginBottom: '1rem' }}>Why Choose Us</h3>
                        <p className="text-muted">
                            Fast shipping, 24/7 customer support, and a no-questions-asked return policy make us the preferred choice
                            for millions of shoppers. We value your trust above all else.
                        </p>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h2 className="text-2xl" style={{ marginBottom: '2rem' }}>Meet the Team</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {['Alice', 'Bob', 'Charlie'].map((name) => (
                            <div key={name} className="card" style={{ width: '150px', padding: '1.5rem' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e2e8f0', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                                    {name[0]}
                                </div>
                                <h4 style={{ fontWeight: 600 }}>{name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
