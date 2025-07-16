import React from 'react';
import { FiMenu } from 'react-icons/fi'; 

interface ProductCardProps {
  image?: string;
  name?: string;
  price?: string;
}

export function ProductCard({ image = '', name = '', price = '' }: ProductCardProps) {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '250px' }}>
      {/* ❌ Missing alt */}
      <img
        src={image}
        // alt intentionally left out
        // alt="product image"
        style={{ width: '150px', marginBottom: '1rem' }}
      />

      {/* ❌ Low contrast */}
      <p style={{ color: '#bfbfbf', backgroundColor: '#ffffff' }}>{price}</p>

     {/* ❌ Icon-only button without aria-label */}
      <button
      // aria-label="Open menu"
        style={{
          padding: '10px',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '4px',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <FiMenu />
      </button>

      {/* ❌ Input without label, but spaced clearly */}
      <input
        id="qty"
        type="text"
        // placeholder="Qty"
        style={{
          padding: '8px',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      {/* ❌ Heading structure issue */}
      <h1 style={{ marginTop: '2rem' }}>Product Details</h1>
      <h3>{name}</h3>
    </div>
  );
}
