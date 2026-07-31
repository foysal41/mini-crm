"use client";

import React, { useState } from "react";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { authClient } from "@/app/lib/auth-client";

const Signin = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email Validation
    if (!email) {
      toast.error("Email is required");
      return;
    }

    // Password Validation
    if (!password) {
      toast.error("Password is required");
      return;
    }

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Invalid email or password");
      return;
    }

    if (data) {
      toast.success("Login successful!");

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 500);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
      <Card className="w-full max-w-105 rounded-3xl border border-gray-200 bg-white px-6 py-7 shadow-xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to Mini CRM
          </p>
        </div>

        <div className="my-7 h-px bg-gray-200" />

        <form onSubmit={formSubmit} className="space-y-5">
          {/* Email */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="you@example.com"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#2F96EE] focus:ring-2 focus:ring-[#2F96EE]/20"
          />

          {/* Password */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter your password"
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#2F96EE] focus:ring-2 focus:ring-[#2F96EE]/20"
          />

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#2F96EE] text-sm font-semibold text-white transition hover:bg-[#2388df]"
          >
            Sign In
          </Button>
        </form>

        <div className="my-6 h-px bg-gray-200" />

        <p className="text-center text-sm text-gray-500">
          Dont have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-[#2F96EE] hover:underline"
          >
            Create Account
          </Link>
        </p>
      </Card>
    </main>
  );
};

export default Signin;