import React, { useState } from 'react';
import { Product } from '../types/Product';

interface ProductListProps {
    products: Product[];
    updateProduct: (id: number, updatedProduct: Product) => void;
    deleteProduct: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
    products,
    updateProduct,
    deleteProduct,
}) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editName, setEditName] = useState('');
    const [editPrice, setEditPrice] = useState<number | ''>('');

    const startEditing = (product: Product) => {
        setEditingId(product.id);
        setEditName(product.name);
        setEditPrice(product.price);
    };

    const saveEdit = () => {
        if (editingId !== null && editName && editPrice) {
            updateProduct(editingId, { id: editingId, name: editName, price: Number(editPrice) });
            setEditingId(null);
            setEditName('');
            setEditPrice('');
        }
    };

    return (
        <ul className="space-y-4">
            {products.map((product) => (
                <li key={product.id} className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg" > {editingId === product.id ? (
                    <div className="flex items-center gap-4 w-full">
                        <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="p-2 border rounded-lg flex-1" />
                        <input type="number" value={editPrice} onChange={(e) => setEditPrice(Number(e.target.value))} className="p-2 border rounded-lg flex-1" />
                        <button onClick={saveEdit} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" > Save </button>
                        <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600" > Cancel </button>
                    </div>
                ) : (
                    <>
                        <span>
                            {product.name} - ${product.price}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => startEditing(product)}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteProduct(product.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </>
                )}
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
