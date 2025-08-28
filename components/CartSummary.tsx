
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import Button from './Button';

const CartSummary: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
    const { cartItems, totalPrice, clearCart, cartCount } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cartItems.length === 0) return;
        const orderDetails = {
            items: cartItems,
            total: totalPrice,
        };
        navigate('/order-confirmation', { state: { order: orderDetails } });
        clearCart();
        onClose();
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Cart Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="cart-heading"
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between px-6 py-4 border-b">
                        <h2 id="cart-heading" className="text-lg font-medium text-gray-900">Shopping Cart ({cartCount})</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {cartItems.length > 0 ? (
                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((item, index) => (
                                    <li key={`${item.product.id}-${index}`} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover object-center" />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>{item.product.name}</h3>
                                                    <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                                                <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">Qty {item.quantity}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="flex-1 flex items-center justify-center px-6">
                            <div className="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                                <p className="mt-1 text-sm text-gray-500">Start adding some products!</p>
                            </div>
                        </div>
                    )}

                    {cartItems.length > 0 && (
                        <div className="border-t border-gray-200 px-6 py-4">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${totalPrice.toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                                <Button onClick={handleCheckout} className="w-full justify-center">Checkout</Button>
                            </div>
                            <div className="mt-4 text-center text-sm text-gray-500">
                                <button onClick={onClose} className="font-medium text-indigo-600 hover:text-indigo-500">
                                    or Continue Shopping <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartSummary;
