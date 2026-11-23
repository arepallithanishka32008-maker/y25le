import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
  { id: 2, name: "Headphones", price: 2000, category: "Accessories" },
  { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
  { id: 4, name: "Backpack", price: 1500, category: "Bags" },
];

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((p) => (
        <ProductCard key={p.id} name={p.name} price={p.price} category={p.category} />
      ))}
    </div>
  );
}


export default App
