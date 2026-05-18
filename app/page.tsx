"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login Function
  const handleLogin = () => {

    const userData = localStorage.getItem("user");

    if (!userData) {
      alert("Please Register First");
      return;
    }

    const storedUser = JSON.parse(userData);

    // Validate Login
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

  // Navigate Register Page
  const handleRegister = () => {
    router.push("/register");
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 px-4">

      {/* Login Card */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-md">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Login
        </h1>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition duration-300"
        >
          Login
        </button>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full border border-black mt-4 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition duration-300"
        >
          Register
        </button>

      </div>

    </div>
  );
}