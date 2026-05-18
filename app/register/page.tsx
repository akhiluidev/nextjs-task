"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {

    const router = useRouter();

    const [user, setUser] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (
            !user.name ||
            !user.phoneNumber ||
            !user.email ||
            !user.password
        ) {
            alert("Please Fill All Fields");
            return;
        }

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        console.log("Saved User:", user);

        alert("Register Successful");

        router.push("/login");
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">

            <form
                onSubmit={handleRegister}
                className="
          bg-white
          w-full
          max-w-md
          p-6
          sm:p-8
          rounded-2xl
          shadow-xl
          flex
          flex-col
          gap-5
        "
            >

                <h1 className="
          text-2xl
          sm:text-3xl
          font-bold
          text-center
          text-blue-600
        ">
                    Register Form
                </h1>

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                    className="
            border
            border-gray-300
            p-3
            rounded-lg
            outline-none
            focus:border-blue-500
            text-sm
            sm:text-base
          "
                />

                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    value={user.phoneNumber}
                    onChange={handleChange}
                    required
                    className="
            border
            border-gray-300
            p-3
            rounded-lg
            outline-none
            focus:border-blue-500
            text-sm
            sm:text-base
          "
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    className="
            border
            border-gray-300
            p-3
            rounded-lg
            outline-none
            focus:border-blue-500
            text-sm
            sm:text-base
          "
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter a Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    className="
            border
            border-gray-300
            p-3
            rounded-lg
            outline-none
            focus:border-blue-500
            text-sm
            sm:text-base
          "
                />

                <button
                    type="submit"
                    className="
            bg-blue-600
            text-white
            cursor-pointer
            p-3
            rounded-lg
            hover:bg-blue-700
            transition
            duration-300
            text-sm
            sm:text-base
            font-semibold
          "
                >
                    Register
                </button>

                <button
                    onClick={() => router.push("/login")}
                    className="
    bg-blue-600
    text-white
    p-3
    rounded-lg
    hover:bg-blue-700
    transition
    duration-300
    cursor-pointer
    text-sm
    sm:text-base
    font-semibold
  "
                >
                    Already have account? Login
                </button>
            </form>

        </div>
    );
}