import React from 'react';

export default function ProductCard({ product }) {
    const { title, price, image, category, rating } = product;

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', background: 'white' }}>
                <img
                    src={image}
                    alt={title}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {category}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '0.5rem 0 1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '3rem' }}>
                    {title}
                </h3>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-color)' }}>
                        ${price.toFixed(2)}
                    </span>
                    {rating && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#f59e0b' }}>
                            <span>★</span>
                            <span>{rating.rate}</span>
                            <span style={{ color: '#cbd5e1' }}>({rating.count})</span>
                        </div>
                    )}
                </div>

                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
