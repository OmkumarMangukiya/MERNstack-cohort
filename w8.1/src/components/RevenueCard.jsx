/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const RevenueCard = ({
    title,

    showWarning,
    orderCount,
    amount,
}) => {
    return (
        
        <div className="bg-white-500 rounded shadow-lg p-5 m-1 grid gap-2">
            <div className="text-slate-600 flex text-sm ">
                {title}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>


            </div>
          
            <div className="flex justify-between ">
                <div className="font-bold text-lg">
                    ${amount}
                </div>
                <div className="text-blue-600">
                    {orderCount ? <div className="flex">
                        {orderCount} order(s) <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </div> : null}
                </div>
            </div>
        </div>
    )
}