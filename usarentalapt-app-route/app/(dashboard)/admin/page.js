"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if ("sumon1234" === password) {
      window.localStorage.setItem("password", JSON.stringify("sumon1234"));
      router.push("/dashboard");
    } else {
      setError(true);
    }
  };
  return (
    <main className="min-h-[50vh]">
      <h3 className="text-2xl text-center text-neel capitalize py-8">
        admin login
      </h3>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] sm:w-[20rem] border px-8 py-12 rounded-md mx-auto space-y-4"
      >
        <div>
          <label
            htmlFor="password"
            className="capitalize font-medium pb-1 pl-1 inline-block"
          >
            password
          </label>
          <input
            placeholder="Enter admin password"
            className="outline-none block border-blue/50 border-2 bg-transparent py-3 pl-2 w-full rounded-lg"
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            name="password"
          />
        </div>
        <p>{error ? "Invalid creadential" : ""}</p>
        <button
          className="bg-neel block w-full
             uppercase font-semibold text-white py-3 mt-8 rounded-lg  sm:w-fit px-6 sm:ml-auto"
        >
          {loading ? "logging" : "login"}
        </button>
      </form>
    </main>
  );
}
