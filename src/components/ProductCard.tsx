import React from 'react';

interface ProductCardProps {
  image?: string;
  name?: string;
  price?: string;
}

export function ProductCard({ image = '', name = '', price = '' }: ProductCardProps) {
  return (
    <div>
      <img src={image} alt={name || 'Product image'} />
      <h2>{name}</h2>
      <p>{price}</p>
      <button>Add to cart</button>
    </div>
  );
}
