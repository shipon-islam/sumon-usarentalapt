
function Stepper({fillColor="bg-gray-500"}) {
  return (
    <ol className="flex items-center w-full sm:w-[90%] mx-auto mb-6">
    <li className="flex w-full items-center text-white  after:content-[''] after:w-full after:h-1 after:border-b after:border-neel after:border-4 after:inline-block ">
        <span className="flex items-center justify-center w-8 h-8 bg-neel rounded-full lg:h-12 lg:w-12 shrink-0">
            <svg className="w-3.5 h-3.5 text-gray-50 lg:w-4 lg:h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </span>
    </li>
   
    <li className="flex items-center w-10">
        <span  className={`flex items-center justify-center w-8 h-8 rounded-full lg:h-12 lg:w-12 shrink-0 ${fillColor}`} >
            <svg  className="w-4 h-4 text-gray-50 lg:w-5 lg:h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
        </span>
    </li>
</ol>
  )
}

export default Stepper