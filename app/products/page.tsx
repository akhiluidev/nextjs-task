"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Product = {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
    description: string;
};

export default function Products() {
    const router = useRouter();

    const productsData: Product[] = [
        {
            id: 1,
            title: "iPhone 15",
            category: "Mobile",
            price: 79999,
            image: "/images/iphone15.jpeg",
            description: "Latest Apple smartphone with powerful performance.",
        },
        {
            id: 2,
            title: "Samsung Galaxy S24",
            category: "Mobile",
            price: 69999,
            image: "/images/download.jpeg",
            description: "Premium Android mobile with excellent camera.",
        },
        {
            id: 3,
            title: "MacBook Pro",
            category: "Laptop",
            price: 149999,
            image: "/images/macbook.jpeg",
            description: "Powerful laptop for developers and designers.",
        },
        {
            id: 4,
            title: "Sony Headphones",
            category: "Accessories",
            price: 9999,
            image: "/images/headphones.jpeg",
            description: "Noise cancellation wireless headphones.",
        },
    ];

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [cartCount, setCartCount] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [userType, setUserType] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("user");
        const guest = localStorage.getItem("guest");

        if (user) setUserType("Logged In User");
        else if (guest) setUserType("Guest User");
        else setUserType("No User");

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartCount(cart.length);
    }, []);

    const filteredProducts = useMemo(() => {
        return productsData.filter((p) => {
            return (
                (category === "All" || p.category === category) &&
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        });
    }, [search, category]);

    const addToCart = (product: Product) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        setCartCount(cart.length);
        alert("Added to cart Successfully");
    };

    return (
        <div className="min-h-screen bg-gray-100">

            <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center relative">
                <h1 className="text-xl font-bold">NextShop</h1>

                <div className="flex gap-5 items-center">
                    {/* <Link href="/">Home</Link> */}
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>

                    <Link href="/cart" className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
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

                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                            {cartCount}
                        </span>
                    </Link>

                    <div className="relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="p-1 cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <circle cx="12" cy="5" r="1.5" />
                                <circle cx="12" cy="12" r="1.5" />
                                <circle cx="12" cy="19" r="1.5" />
                            </svg>
                        </button>

                        {showMenu && (
                            <div className="absolute right-0 top-10 bg-white text-black p-3 rounded shadow w-[140px]">
                                <button
                                    onClick={() => router.push("/login")}
                                    className="bg-blue-600 text-white w-full py-2 rounded"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="p-6 flex flex-col md:flex-row gap-4 justify-between">
                <input
                    className="p-3 border rounded w-full md:w-[300px]"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="p-3 border rounded w-full md:w-[200px]"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </div>

            <div className="px-6 pb-10">
                {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl font-semibold mt-10">
                        No Products Found 😔
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((p) => (
                            <div key={p.id} className="bg-white rounded shadow p-3">

                                <img
                                    src={p.image}
                                    className="h-40 w-full object-cover rounded"
                                    alt={p.title}
                                />

                                <h2 className="font-bold mt-2">{p.title}</h2>
                                <p className="text-sm text-gray-600">
                                    {p.description}
                                </p>

                                <div className="flex justify-between mt-2">
                                    <span className="font-bold text-blue-600">
                                        ₹{p.price}
                                    </span>
                                    <span className="text-sm">{p.category}</span>
                                </div>

                                <button
                                    onClick={() => addToCart(p)}
                                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
                                >
                                    Add To Cart
                                </button>

                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* FOOTER */}
            <footer className="bg-black w-full fixed text-white text-center py-4">
                © 2026 NextShop
            </footer>
        </div>
    );
}