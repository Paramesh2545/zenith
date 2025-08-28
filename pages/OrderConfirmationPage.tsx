
import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import Button from '../components/Button';
import type { CartItem } from '../types';

interface Order {
    items: CartItem[];
    total: number;
}

const OrderConfirmationPage: React.FC = () => {
    const location = useLocation();
    const order = location.state?.order as Order | undefined;

    if (!order || order.items.length === 0) {
        // Redirect to home if there's no order data, which can happen on page refresh
        // or if checkout was attempted with an empty cart.
        return <Navigate to="/" replace />;
    }

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    const estimatedDelivery = deliveryDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold font-serif text-gray-900">Thank you for your order!</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Your order has been placed successfully. A confirmation email has been sent to you.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-12 bg-gray-50 p-8 rounded-lg border">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                    <ul className="divide-y divide-gray-200">
                        {order.items.map((item, index) => (
                            <li key={`${item.product.id}-${index}`} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{item.product.name}</h3>
                                        <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.color} / {item.size}</p>
                                    <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t border-gray-200 pt-6 mt-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total</p>
                            <p>${order.total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mt-8 text-center">
                    <p className="text-gray-600">Estimated Delivery Date: <span className="font-medium text-gray-900">{estimatedDelivery}</span></p>
                    <Link to="/shop">
                        <Button variant="secondary" className="mt-8">
                            Continue Shopping
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
