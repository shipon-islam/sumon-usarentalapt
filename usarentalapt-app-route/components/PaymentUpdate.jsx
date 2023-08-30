"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentUpdate = ({ payment }) => {
  const [price, setPrice] = useState(payment?.price);
  const [paylink, setPaylink] = useState(payment?.paylink);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (price && paylink) {
      try {
        setLoading(true);
        const res = await fetch(`api/payment/${payment.id}`, {
          method: "PUT",
          body: JSON.stringify({ price, paylink }),
        });
        const resData = await res.json();
        setPaylink("");
        setPrice("");
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("field can't be blanked");
    }
  };
  useEffect(() => {
    const localPassword = window.localStorage.getItem("password");
    if (!localPassword) {
      router.push("/admin");
    }
  }, []);
  return (
    <div>
      <h1 className="mb-8 text-2xl sm:text-3xl text-center text-neel font-bold bg-[#dddd] py-4 rounded-md mt-8">
        Dashboard
      </h1>
      <form
        onSubmit={handleSubmitForm}
        className="w-[90%] sm:w-[40rem] mx-auto space-y-4"
      >
        <div>
          <label
            htmlFor="price"
            className="capitalize font-medium pb-1 pl-1 inline-block"
          >
            Price
          </label>
          <input
            onChange={({ target }) => setPrice(target.value)}
            value={price}
            placeholder="E.g. 1000"
            className="outline-none block border-blue/50 border-2 bg-transparent py-3 pl-2 w-full rounded-lg"
            type="number"
            name="price"
          />
        </div>
        <div>
          <label
            htmlFor="paylink"
            className="capitalize font-medium pb-1 pl-1 inline-block"
          >
            Pay link
          </label>
          <input
            onChange={({ target }) => setPaylink(target.value)}
            placeholder="E.g. www.example.com/payment"
            className="outline-none block border-blue/50 border-2 bg-transparent py-3 pl-2 w-full rounded-lg"
            type="text"
            value={paylink}
            name="paylink"
          />
        </div>

        <button
          className="bg-neel block w-full
             uppercase font-semibold text-white py-3 mt-8 rounded-lg  sm:w-fit px-6 sm:ml-auto"
        >
          {loading ? "updating.." : "update"}
        </button>
      </form>
    </div>
  );
};
export default PaymentUpdate;
