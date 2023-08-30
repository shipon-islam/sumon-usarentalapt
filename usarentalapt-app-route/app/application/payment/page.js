import Stepper from "@/components/Stepper";
import { fetchPaymentDetails } from "@/utilites/fetchPaymentDetails";
import Link from "next/link";
export const revalidate = 1;
export default async function page() {
  const data = await fetchPaymentDetails();
  return (
    <div className="mb-16 max-w-[1450px] mx-auto px-8 sm:px-12">
      <h1 className="mb-8 text-2xl sm:text-3xl text-center text-neel font-bold bg-[#dddd] py-4 rounded-md my-6">
        Payment To Confirm
      </h1>
      <Stepper fillColor="bg-neel" />
      <div className=" sm:ml-14">
        <h2 className="text-3xl capitalize">
          Thank You, <p className="sm:inline"></p>
        </h2>
        <p className="py-6 text-xl">
          You need to pay <span className="text-red-500">${data.price} </span>to
          complete your application.
        </p>
        <p className="pb-8">
          After your payment confirmation, we will send your application to the
          property owner. Check your email (inbox/spam) for application submit
          confirmation.
        </p>
        <div className="flex justify-between sm:justify-start gap-x-2 sm:gap-x-10">
          <button className="bg-neel hover:bg-neel-500 text-white font-bold px-6 sm:px-8 py-2 uppercase rounded-md">
            <Link href="/application">previos</Link>
          </button>
          <button className=" bg-neel hover:bg-neel-500 text-white font-bold px-6 py-2 uppercase rounded-md">
            <a href={data.paylink}>
              <svg
                className="inline-block mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                fill="white"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.248 10.732c-1.627 3.478-5.558 8.213-8.042 8.213-2.448 0-2.802-5.221-4.139-8.696-.657-1.709-1.082-1.317-2.315-.454l-.752-.97c1.798-1.581 3.599-3.418 4.705-3.52 1.245-.12 2.012.731 2.299 2.554.379 2.396.908 6.114 1.832 6.114.719 0 2.495-2.95 2.585-4.004.161-1.544-1.136-1.591-2.261-1.109 1.781-5.836 9.194-4.761 6.088 1.872z" />
              </svg>
              pay venmo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
