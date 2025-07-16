import React from 'react';
import { ProductCard } from './ProductCard';

export default {
  title: 'Empori/ProductCard',
  component: ProductCard,
};

export const Default = () => (
  <ProductCard
    image="/wallet.jpg"
    name="Black Leather Wallet"
    price="$29.99"
  />
);
