"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ContactUs() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <div className="bg-blue-600 text-white py-10 px-4 relative">

<Link
  href="/products"
  className="absolute left-4 top-4 bg-white text-blue-600 px-3 py-1 rounded shadow text-sm hover:bg-gray-100 active:scale-95 transition"
>
  ← Back
</Link>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Contact Us
        </h1>

        <p className="mt-2 text-sm sm:text-base text-center">
          We are here to help you 
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10">

        <div className="bg-white w-full max-w-5xl rounded shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          <div className="bg-blue-50 p-6 sm:p-8 flex flex-col justify-center gap-6">

            <div>
              <h2 className="text-xl font-bold">Get in Touch</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Feel free to reach out for any queries, support or feedback.
              </p>
            </div>

            <div className="space-y-3 text-sm sm:text-base text-gray-700">
              <p>Email: support@nextshop.com</p>
              <p> Phone: +91 98765 43210</p>
              <p>Location: Andhra Pradesh, India</p>
            </div>

            <div className="text-sm text-gray-500">
              Response time: within 24 hours 
            </div>

          </div>

          <div className="p-6 sm:p-8">

            <h2 className="text-xl font-bold mb-4">
              Send Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 active:scale-95 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      <footer className="bg-black text-white text-center py-4 text-sm">
        © 2026 NextShop. All rights reserved.
      </footer>

    </div>
  );
}