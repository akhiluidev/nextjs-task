"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login Function
  const handleLogin = () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    const userData = localStorage.getItem("user");

    // Check user exists
    if (!userData) {
      alert("Please Register First");
      return;
    }

    const storedUser = JSON.parse(userData);

    // Validate login
    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");

      router.push("/products");
    } else {
      alert("Invalid Email or Password");
    }
  };

  // Guest Login
  const handleGuest = () => {
    localStorage.setItem(
      "guestUser",
      JSON.stringify({
        name: "Guest User",
        email: "guest@gmail.com",
        role: "guest",
      })
    );

    router.push("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 px-4">

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md p-6 sm:p-8 md:p-10">

{/* 
<h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-800">
          NextShop
        </h1> */}

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-800">
          Login
        </h1>

        <div className="mb-5">
          <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 sm:p-4 outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl  p-3 sm:p-4 outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 cursor-pointer text-white py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-800 transition duration-300"
        >
          Login
        </button>

        <button
          onClick={handleGuest}
          className="w-full border border-gray-300 cursor-pointer mt-4 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-100 transition duration-300"
        >
          Continue As Guest
        </button>

      </div>
    </div>
  );
}