import React, { useState } from 'react';
import { Product } from './types/Product';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateProduct = (id: number, updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? updatedProduct : product))
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="app min-h-screen bg-[#f1f1f1] flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">CRUD Table</h1>
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg mb-8">
        <ProductForm addProduct={addProduct} />
      </div>
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <ProductList
          products={products}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
};

export default App;
