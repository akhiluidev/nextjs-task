"use client";

import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <div className="bg-blue-600 text-white py-8 sm:py-10 px-4 text-center">

        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">
          About NextShop
        </h1>

        <p className="mt-2 text-sm sm:text-base lg:text-lg">
          Your trusted online shopping destination 
        </p>

        <div className="mt-5">
          <Link
            href="/products"
            className="inline-block bg-white text-blue-600 px-3 sm:px-4 py-2 rounded hover:bg-gray-200 transition text-sm sm:text-base"
          >
            ← Back to Products
          </Link>
        </div>

      </div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-6 sm:py-10 space-y-6">

        <div className="bg-white p-4 sm:p-6 rounded shadow">
          <h2 className="text-lg sm:text-xl font-bold mb-2">Who We Are</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            NextShop is a modern e-commerce platform built to provide users
            with a smooth and fast online shopping experience. We focus on
            quality products, best prices, and easy navigation.
          </p>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded shadow">
          <h2 className="text-lg sm:text-xl font-bold mb-2">What We Offer</h2>
          <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-1">
            <li>Latest smartphones & gadgets</li>
            <li>High-performance laptops</li>
            <li>Accessories & electronics</li>
            <li>Easy cart & fast checkout experience</li>
          </ul>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded shadow">
          <h2 className="text-lg sm:text-xl font-bold mb-2">Why Choose Us?</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We provide user-friendly design, responsive UI, and secure shopping
            experience. Our goal is to make online shopping simple and enjoyable
            for everyone.
          </p>
        </div>

        <div className="bg-blue-50 p-4 sm:p-6 rounded border border-blue-200 text-center">
          <h2 className="text-lg sm:text-xl font-bold">Contact Us</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Email: support@nextshop.com <br />
            Phone: +91 98765 43210
          </p>
        </div>

      </div>

      <footer className="bg-black text-white text-center py-3 sm:py-4 text-sm sm:text-base">
        © 2026 NextShop. All rights reserved.
      </footer>

    </div>
  );
}