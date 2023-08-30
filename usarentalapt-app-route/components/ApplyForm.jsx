"use client";
import { memberRegisterSchema } from "@/yapSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Stepper from "./Stepper";

export default function ApplyForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(memberRegisterSchema),
  });

  const onSubmit = async (data) => {
    if (data.isAggred) {
      setLoading(true);
      try {
        console.log(data)
        const res = await fetch("/api/email", {
          method: "POST",
          body: JSON.stringify(data),
        });
        const resData = await res.json();
        if (resData) {
          router.push("/application/payment");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <div className="mb-20  px-8 pt-8 pb-10 rounded-md ">
      <div className="container w-full mx-auto">
        <h1 className="mb-8 text-2xl sm:text-3xl text-center text-neel font-bold bg-[#dddd] py-4 rounded-md">
          Application
        </h1>
        <div>
          <Stepper />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="grid sm:grid-cols-2 gap-x-10">
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="firstname"
                >
                  First Name:
                </label>
                <input
                  autoComplete="true"
                  type="text"
                  className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                    errors.firstname ? "border-red-500" : "border-gray-400"
                  }`}
                  name="firstname"
                  {...register("firstname")}
                />
                <p className="text-sm ml-1 mb-2 text-red-500">
                  {errors.firstname?.message}
                </p>
              </div>
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="lastname"
                >
                  last name:
                </label>
                <input
                  autoComplete="true"
                  type="text"
                  className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                    errors.lastname ? "border-red-500" : "border-gray-400"
                  }`}
                  {...register("lastname")}
                />
                <p className="text-sm ml-1 mb-2 text-red-500">
                  {errors.lastname?.message}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10">
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="email"
                >
                  email:
                </label>
                <input
                  autoComplete="true"
                  type="email"
                  className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                    errors.email ? "border-red-500" : "border-gray-400"
                  }`}
                  name="email"
                  placeholder="E.g. john@doe.com"
                  {...register("email")}
                />
                <p className="text-sm ml-1 mb-2 text-red-500">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="phone"
                >
                  phone/mobile:
                </label>
                <input
                  autoComplete="true"
                  type="text"
                  className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                    errors.phone ? "border-red-500" : "border-gray-400"
                  }`}
                  name="phone"
                  placeholder="E.g. +1 3004005000"
                  {...register("phone")}
                />
                <p className="text-sm ml-1 mb-2 text-red-500">
                  {errors.phone?.message}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10">
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="dob"
                >
                  date of birth:
                </label>
                <input
                  autoComplete="true"
                  type="text"
                  placeholder="E.g. mm/dd/year"
                  className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                    errors.dob ? "border-red-500" : "border-gray-400"
                  }`}
                  name="dob"
                  
                  {...register("dob")}
                />
                <p className="text-sm ml-1 mb-2 text-red-500">
                  {errors.dob?.message}
                </p>
              </div>
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="security"
                >
                  social security#:
                </label>
                <input
                  autoComplete="true"
                  type="text"
                  className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                    errors.security ? "border-red-500" : "border-gray-400"
                  }`}
                  name="text"
                  
                  {...register("security")}
                />
                <p className="text-sm ml-1 mb-2 text-red-500">
                  {errors.security?.message}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-1 gap-x-10">
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="currentAddress"
                >
                  current address:
                </label>
                <input
                  autoComplete="true"
                  type="text"
                  className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                    errors.currentAddress ? "border-red-500" : "border-gray-400"
                  }`}
                  name="currentAddress"
                  {...register("currentAddress")}
                />
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.currentAddress?.message}
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-x-5">
                <div>
                  <label
                    className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                    htmlFor="state"
                  >
                    state:
                  </label>
                  <input
                    autoComplete="true"
                    type="text"
                    className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                      errors.state ? "border-red-500" : "border-gray-400"
                    }`}
                    name="state"
                    {...register("state")}
                  />
                  <p className=" text-sm ml-1 mb-2 text-red-500">
                    {errors.state?.message}
                  </p>
                </div>
                <div>
                  <label
                    className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                    htmlFor="city"
                  >
                    city:
                  </label>
                  <input
                    autoComplete="true"
                    type="text"
                    className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                      errors.city ? "border-red-500" : "border-gray-400"
                    }`}
                    name="city"
                    {...register("city")}
                  />
                  <p className=" text-sm ml-1 mb-2 text-red-500">
                    {errors.city?.message}
                  </p>
                </div>
                <div>
                  <label
                    className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                    htmlFor="zipCode"
                  >
                    zip code:
                  </label>
                  <input
                    autoComplete="true"
                    type="text"
                    className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                      errors.zipCode ? "border-red-500" : "border-gray-400"
                    }`}
                    name="zipCode"
                    {...register("zipCode")}
                  />
                  <p className=" text-sm ml-1 mb-2 text-red-500">
                    {errors.zipCode?.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10">
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="bedRooms"
                >
                  Bed Rooms:
                </label>
                <select
                  className="block border-2 border-gray-400 w-full px-3 py-[0.7rem] rounded focus:outline-dotted"
                  name="bedRooms"
                  {...register("bedRooms")}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.bedRooms?.message}
                </p>
              </div>
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="bathRooms"
                >
                  Bath Rooms:
                </label>
                <select
                  className="block border-2 border-gray-400 w-full px-3 py-[0.7rem] rounded focus:outline-dotted"
                  name="bathRooms"
                  {...register("bathRooms")}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.bathRooms?.message}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10">
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="maritalStatus"
                >
                  Marital status:
                </label>
                <select
                  className="block border-2 border-gray-400 w-full px-3 py-[0.7rem] rounded focus:outline-dotted"
                  name="maritalStatus"
                  {...register("maritalStatus")}
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="wedowed">Wedowed</option>
                  <option value="separated">Separated</option>
                  <option value="devorced">Devorced</option>
                </select>
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.maritalStatus?.message}
                </p>
              </div>{" "}
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="pets"
                >
                  How Many pets you have?
                </label>
                <select
                  className="block border-2 border-gray-400 w-full px-3 py-[0.7rem] rounded focus:outline-dotted"
                  name="pets"
                  {...register("pets")}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.pets?.message}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-10">
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="vehicle"
                >
                  do you have a vehicle?
                </label>
                <select
                  className="block border-2 border-gray-400 w-full px-3 py-[0.7rem] rounded focus:outline-dotted "
                  name="livingUnits"
                  {...register("vehicle")}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                  
                </select>
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.vehicle?.message}
                </p>
              </div><div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="livingUnits"
                >
                  How Many will be living in this unit?
                </label>
                <select
                  className="block border-2 border-gray-400 w-full px-3 py-[0.7rem] rounded focus:outline-dotted "
                  name="livingUnits"
                  {...register("livingUnits")}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.livingUnits?.message}
                </p>
              </div>
              
            </div>
            <div className="grid sm:grid-cols-2 gap-x-10">
            <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="employmentStatus"
                >
                 Employment status:
                </label>
                <select
                  className="block border-2 border-gray-400 w-full px-3 py-[0.7rem] rounded focus:outline-dotted "
                  name="employmentStatus"
                  {...register("employmentStatus")}
                >
                  <option value="employed">Employed</option>
                  <option value="retired">Retired</option>
                  <option value="student">Student</option>
                  <option value="never employed">Never Employed</option>
                  <option value="other">Other</option>
                </select>
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.employmentStatus?.message}
                </p>
              </div>
              <div>
                <label
                  className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                  htmlFor="salary"
                >
                  current salary (monthly):
                </label>
                <input
                  autoComplete="true"
                  type="text"
                  className={`block border-2 border-gray-400 w-full px-3 py-[0.6rem] rounded focus:outline-dotted ${
                    errors.salary ? "border-red-500" : "border-gray-400"
                  }`}
                  name="salary"
                  {...register("salary")}
                />
                <p className=" text-sm ml-1 mb-2 text-red-500">
                  {errors.salary?.message}
                </p>
              </div>
            </div>
            <div>
              <label
                className="mb-1 inline-block ml-1 capitalize font-semibold text-gray-600"
                htmlFor="aboutYourself"
              >
                write about yourself:
              </label>
              <textarea
                className="block border-2 border-gray-400 w-full px-3  pt-2  rounded focus:outline-dotted h-24 max-h-24 sm:max-h-16 sm:h-16"
                name="aboutYourself"
                {...register("aboutYourself")}
              ></textarea>

              <p className=" text-sm ml-1 mb-2 text-red-500">
                {errors.aboutYourself?.message}
              </p>
            </div>
            <div className="text-center flex gap-x-2">
              <input
                {...register("isAggred")}
                className="w-5 h-5"
                type="checkbox"
              />
              <p>
                I accept{" "}
                <Link
                  className="no-underline border-b border-blue text-blue text-red-500"
                  href="/terms-condition"
                >
                  Terms and Conditions
                </Link>
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="  md:w-fit text-center py-3 px-8 ml-auto rounded bg-neel shadow-sm hover:bg-neel-500 mt-6 sm:mt-0 text-white  my-1 font-semibold uppercase block"
          >
            {loading ? "submiting..." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
