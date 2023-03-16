// import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
