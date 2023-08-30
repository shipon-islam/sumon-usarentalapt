import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1450px] mx-auto">
      <section
        style={{
          backgroundImage: "url(/images/room.jpeg)",
        }}
        className="w-full h-[30rem] object-cover bg-no-repeat bg-cover bg-center "
      >
        <div className="grid justify-items-center items-center w-full h-full bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.6)] hover:transition-colors duration-1000 cursor-pointer px-3">
          <div className="sm:w-1/2 md:w-[85%] text-center space-y-4 text-white">
            <h3 className="text-3xl sm:text-4xl font-bold ">We provide you</h3>
            <p className="leading-8 text-lg">
              Affordable Housing ... We have several homes, apartments, studio,
              condos, sublets, rooms, roommates and more available with
              affordable financing options.
            </p>
            <button className="border-2 bg-neel px-8 py-3 sm:px-10 sm:py-5 uppercase front-bold rounded-md font-bold hover:bg-neel-500 hover:scale-[1.1] text-lg transition-transform duration-500">
              <Link href="/application">apply now</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
