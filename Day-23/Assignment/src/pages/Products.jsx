import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('none');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch products');
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const categories = ['all', ...new Set(products.map(p => p.category))];

    const filteredProducts = products
        .filter(p => category === 'all' || p.category === category)
        .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === 'asc') return a.price - b.price;
            if (sortOrder === 'desc') return b.price - a.price;
            return 0;
        });

    if (loading) return (
        <div className="container page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Loading products...</div>
        </div>
    );

    if (error) return (
        <div className="container page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ color: 'var(--error-color)', fontSize: '1.25rem' }}>Error: {error}</div>
        </div>
    );

    return (
        <div className="container page-container fade-in">
            <h1 className="text-3xl text-center" style={{ marginBottom: '2rem' }}>Our Products</h1>

            {/* Controls */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '3rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--shadow)'
            }}>
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search products..."
                    className="form-input"
                    style={{ maxWidth: '300px' }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    {/* Category Filter */}
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-input"
                        style={{ width: 'auto' }}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                        ))}
                    </select>

                    {/* Sort */}
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="form-input"
                        style={{ width: 'auto' }}
                    >
                        <option value="none">Sort by Price</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid-cols-4">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-muted" style={{ padding: '3rem' }}>
                    No products found matching your criteria.
                </div>
            )}
        </div>
    );
}
