
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [profileToggle, setProfileToggle] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
      path: "/",
    },
    {
      id: 2,
      name: "gallery",
      path: "/gallery",
    },
    {
      id: 3,
      name: "contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "application",
      path: "/application",
    },
  ];
  function handleWindowClick(event) {
    if (event.target.closest(".navbar") === null) {
      setToggle(true);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <header
        className="w-full z-50 max-w-[1450px] mx-auto pl-6 pr-7 py-3 md:px-12 xl:px-16 sticky  left-0 top-0 bg-white border-b border-green-800/20"
      >
        <nav
          className="flex relative 
       justify-between items-center navbar"
        >
          <div>
            <Link href="/">
              <Image
                height={100}
                width={200}          
                src="/images/rental.png"
                alt="navLogo"
              />
            </Link>
          </div>
          <div
            className={`absolute lg:static w-3/4 ${
              toggle ? "scale-[0] lg:scale-[1]" : "scale-1"
            } lg:w-fit min-h-[89vh] lg:min-h-fit top-[60px]  pt-7 lg:pt-0 pr-3 transition-all duration-500 -left-9 md:-left-16 origin-top-left bg-white `}
          >
            {links.map((link) => (
              <Link
                key={link.id}
                className="block text-sky-900 lg:inline uppercase  font-medium py-2 lg:py-0 ml-12 text-[0.9rem] border-b border-neel lg:border-white lg:border-b md:text-md hover:text-sky-600 hover:border-b-2 hover:border-sky-600 transition-colors duration-400 mb-5"
                href={link.path}
                onClick={() => setToggle((prev) => !prev)}
              >
                {link.name}
              </Link>
            ))}
            {/* mobile view only */}
            <button onClick={() => setToggle((prev) => !prev)} className="bg-neel py-[0.8rem] px-4 text-white uppercase font-medium rounded-xl hover:border-neel-500 block  md:hidden mt-10 ml-12 w-[78%]">
              <Link href="/application">apply now</Link>
            </button>
          </div>
          <div className="flex items-center ">
            {/* desktop view only */}
            <button className="bg-neel py-[0.5rem] px-4 text-white uppercase font-medium rounded-2xl hover:bg-neel-500  hidden md:block mr-12 lg:mr-0">
              <Link href="/application">apply now</Link>
            </button>

            <button
              className="block lg:hidden   px-1 rounded-md"
              onClick={() => setToggle((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 transition-all duration-500 text-sky-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    toggle
                      ? "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}