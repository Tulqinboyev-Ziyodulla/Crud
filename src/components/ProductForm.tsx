import React, { useState } from 'react';
import { Product } from '../types/Product';

interface ProductFormProps {
    addProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState<number | ''>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && price) { addProduct({ id: Date.now(), name, price: Number(price) }); setName(''); setPrice(''); }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6" >
            <div className="flex flex-col gap-4">
                <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" > Add Product </button>
            </div>
        </form>
    );
};

export default ProductForm;
