"use client";

import Button from "@/components/ui/Button/Button";
import DropdownWithCheckbox from "@/components/ui/DropdownWithCheckbox";
import TextField from "@/components/ui/TextField";
import { registerFirmSchema } from "@/Schemas/firmRegisterSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

const categoryTypes = [
  { foodType: "Non-Veg", value: "non-veg" },
  { foodType: "Veg", value: "veg" },
];

const regionTypes = [
  { title: "Continental", value: "continental" },
  { title: "South-Indian", value: "south-indian" },
  { title: "North-Indian", value: "north-indian" },
  { title: "Chinese", value: "chinese" },
  { title: "Bakery", value: "bakery" },
];

const FirmRegister = ({ vendorName = "Guest" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firmName: "",
      area: "",
      region: [],
      category: [],
      offer: "",
    },
    resolver: yupResolver(registerFirmSchema),
  });

  console.log(errors, "errors");

  const addNewFirm = (data) => {
    console.log(data, "data submitted");
  };
  return (
    <>
      <h2 className="font-semibold text-center text-xl">
        Welcome {vendorName}
      </h2>
      <h4 className="font-bold text-center text-lg">
        Register your Firm here....
      </h4>
      <form onSubmit={handleSubmit((data) => addNewFirm(data))} method="post">
        <div className="m-4">
          <label htmlFor="firmName" className="font-bold">
            Firm Name
          </label>
          <TextField {...register("firmName")} />
        </div>
        <div className="grid grid-cols-2 gap-4 m-4">
          <div>
            <label htmlFor="area" className="font-bold">
              Area
            </label>
            <TextField {...register("area")} />
          </div>
          <div>
            <label htmlFor="region" className="font-bold">
              Region
            </label>
            <DropdownWithCheckbox
              name="region"
              items={regionTypes}
              {...register("region")}
            />
          </div>
        </div>
        <div className="m-4 flex justify-between items-center">
          <label htmlFor="category" className="font-bold">
            Category
          </label>
          {categoryTypes.map((category) => {
            return (
              <div className="" key={category.value}>
                <input
                  type="checkbox"
                  name="category"
                  value={category.value}
                  {...register("category")}
                />
                <label htmlFor={category.value} className="ml-2">
                  {category.foodType}
                </label>
              </div>
            );
          })}
        </div>
        <div className="m-4">
          <label htmlFor="offer" className="font-bold">
            Offer
          </label>
          <textarea
            name="offer"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            {...register("offer")}
          ></textarea>
        </div>
        <div className="m-4 flex justify-between">
          <Button title="Reset" className="lg:w-xs xs:w-auto bg-gray-800" />
          <Button title="Submit" className="lg:w-xs xs:w-auto" />
        </div>
      </form>
    </>
  );
};

export default FirmRegister;
