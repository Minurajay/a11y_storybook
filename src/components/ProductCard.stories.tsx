import React from 'react';
import { ProductCard } from './ProductCard';

export default {
  title: 'Empori/ProductCard',
  component: ProductCard,
};

export const Default = () => (
  <ProductCard
    image="https://via.placeholder.com/150"
    name="Black Leather Wallet"
    price="$29.99"
  />
);
