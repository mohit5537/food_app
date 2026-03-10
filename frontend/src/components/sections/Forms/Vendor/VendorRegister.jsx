"use client";

import React from "react";
import Button from "@/components/ui/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { vendorRegisterSchema } from "@/Schemas/formSchema";

const VendorRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendorRegisterSchema),
  });

  const registerVendor = (data) => {
    console.log(data, "form submitted");
  };

  console.log(errors, "errors");

  return (
    <div className="min-h-screen bg-gray-100 container mx-auto px-4 py-5">
      <h1 className="text-3xl font-bold text-center mt-5 sm:text-md">
        Vendor Register
      </h1>
      <form
        className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md"
        autoComplete="new-form"
        method="post"
        onSubmit={handleSubmit((data) => registerVendor(data))}
      >
        <div className="m-5">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            User name
          </label>
          <input
            type="text"
            name="username"
            autoComplete="new-username"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            {...register("userName")}
          />
          <p className="text-red-700 mt-1 text-sm">
            {errors?.userName?.message}
          </p>
        </div>
        <div className="m-5">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            autoComplete="new-emailaddress"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            {...register("email")}
          />
          <p className="text-red-700 mt-1 text-sm">{errors?.email?.message}</p>
        </div>
        <div className="m-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            {...register("password")}
          />
          <p className="text-red-700 mt-1 text-sm">
            {errors?.password?.message}
          </p>
        </div>
        <div className="m-5">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            autoComplete="new-confirm-password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            {...register("confirmPassword")}
          />
          <p className="text-red-700 mt-1 text-sm">
            {errors?.confirmPassword?.message}
          </p>
        </div>
        <div className="m-5">
          <Button title="Login" />
        </div>
      </form>
    </div>
  );
};

export default VendorRegister;
