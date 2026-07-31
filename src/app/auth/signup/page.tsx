"use client";
import React, { useState } from "react";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

import { authClient } from "@/app/lib/auth-client";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState<"admin" | "Staff">("admin");

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {data, error } = await authClient.signUp.email({
            name,
            password,
            email,
            role,
            callbackURL: "/dashboard/admin",
        });

        if (error) {
            toast.error("Account is not create");
            return;
        }

        if(data){
            toast.success("Account created successfully!");
        }
        
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20">
            <Card className="w-full max-w-105 rounded-3xl border border-gray-200 bg-white px-6 py-7 shadow-xl">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Create an account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Fill in the fields below to get started
                    </p>
                </div>

                <div className="my-7 h-px bg-gray-200" />

                <form onSubmit={formSubmit} className="space-y-5">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#2F96EE] focus:ring-2 focus:ring-[#2F96EE]/20"
                    />

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#2F96EE] focus:ring-2 focus:ring-[#2F96EE]/20"
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="Choose a password"
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#2F96EE] focus:ring-2 focus:ring-[#2F96EE]/20"
                    />

                    <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-700">
                            Select Your Role
                        </p>

                        <div className="flex gap-6">
                            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                                <input
                                    type="radio"
                                    name="role"
                                    value="admin"
                                    defaultChecked
                                    onChange={(e) => setRole(e.target.value as "admin" | "Staff")}
                                    className="accent-[#2F96EE]"
                                />
                                Admin
                            </label>

                            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Staff"
                                    onChange={(e) => setRole(e.target.value as "admin" | "Staff")}
                                    className="accent-[#2F96EE]"
                                />
                                Staff
                            </label>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="h-12 w-full rounded-xl bg-[#2F96EE] text-sm font-semibold text-white transition hover:bg-[#2388df]"
                    >
                        Sign Up for Free
                    </Button>
                </form>

                <div className="my-6 h-px bg-gray-200" />

                <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                        href="/auth/signin"
                        className="font-semibold text-[#2F96EE] hover:underline"
                    >
                        Sign in instead
                    </Link>
                </p>
            </Card>
        </main>
    );
};

export default SignUp;
