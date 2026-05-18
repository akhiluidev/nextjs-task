"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
};

export default function Cart() {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    const removeItem = (id: number) => {
        const updated = cart.filter((item) => item.id !== id);
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

            {/* HEADER */}
            <div className="bg-white p-3 sm:p-4 rounded shadow mb-6">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <Link
                        href="/products"
                        className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded w-fit text-sm sm:text-base"
                    >
                        ← Back
                    </Link>

                    <h1 className="text-lg sm:text-2xl font-bold text-center flex items-center justify-center gap-2">

                        {/* CART SVG ICON */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 sm:w-7 sm:h-7 text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>

                        Your Cart
                    </h1>

                    <div className="bg-green-100 p-2 sm:p-3 rounded text-center sm:text-right w-full sm:w-[200px]">
                        <h2 className="font-bold text-base sm:text-lg">
                            Total: ₹{total}
                        </h2>
                    </div>

                </div>
            </div>

            {cart.length === 0 ? (
                <div className="text-center text-2xl text-red-500 mt-10">
                    Cart is empty
                    <div className="mt-2">
                        <Link href="/products" className="text-blue-600 underline">
                            Go to Shopping
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow p-4"
                            >
                                <img
                                    src={item.image}
                                    className="h-40 w-full object-cover rounded"
                                    alt={item.title}
                                />

                                <h2 className="font-bold mt-2 text-base sm:text-lg">
                                    {item.title}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {item.description}
                                </p>

                                <p className="text-blue-600 font-bold mt-2">
                                    ₹{item.price}
                                </p>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                    </div>
                </>
            )}
        </div>
    );
}