"use client";
import { contactSchema } from "@/yapSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      alert("Message send successfuly");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <main>
      <h3 className="text-2xl text-center capitalize py-8 font-semibold text-neel">
        contact us
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[90%] sm:w-[40rem] mx-auto space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="capitalize font-medium pb-1 pl-1 inline-block"
          >
            Name
          </label>
          <input
            placeholder="Enter your name"
            className="outline-none block border-blue/50 border-2 bg-transparent py-3 pl-2 w-full rounded-lg"
            type="text"
            name="name"
            {...register("name")}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="capitalize font-medium pb-1 pl-1 inline-block"
          >
            Email
          </label>
          <input
            placeholder="Enter your email"
            className="outline-none block border-blue/50 border-2 bg-transparent py-3 pl-2 w-full rounded-lg"
            type="email"
            name="email"
            {...register("email")}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="capitalize font-medium pb-1 pl-1 inline-block"
          >
            Phone/mobile
          </label>
          <input
            placeholder="Enter your phone no.."
            className="outline-none block border-blue/50 border-2 bg-transparent py-3 pl-2 w-full rounded-lg"
            type="text"
            name="phone"
            {...register("phone")}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="capitalize font-medium pb-1 pl-1 inline-block"
          >
            message
          </label>
          <textarea
            placeholder="write message"
            type="text"
            className="outline-none block border-blue border-2 bg-transparent py-3 pl-2 w-full rounded-lg "
            name="message"
            {...register("message")}
          ></textarea>
        </div>
        <button
          className="bg-neel block w-full
             uppercase font-semibold text-white py-3 mt-8 rounded-lg  sm:w-fit px-6 sm:ml-auto"
        >
          {loading ? "sending" : "send"}
        </button>
      </form>
    </main>
  );
}
