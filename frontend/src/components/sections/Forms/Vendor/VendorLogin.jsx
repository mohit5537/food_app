"use client";

import Button from "@/components/ui/Button/Button";
import React from "react";
import { useForm } from "react-hook-form";

export default function VendorLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 container mx-auto px-4 py-5">
      <h1 className="text-3xl font-bold text-center mt-5">Login</h1>
      <form
        onSubmit={handleSubmit((data) => console.log(data, "form data"))}
        className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md"
        autoComplete="off"
        method="post"
      >
        <div className="m-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email", { required: "Email address is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            autoComplete="new-email"
          />
          <p className="text-red-700 mt-1">{errors?.email?.message}</p>
        </div>
        <div className="m-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            autoComplete="new-password"
          />
          <p className="text-red-700 mt-1">{errors?.password?.message}</p>
        </div>
        <div className="m-5">
          <Button title="Login" />
        </div>
      </form>
    </div>
  );
}
