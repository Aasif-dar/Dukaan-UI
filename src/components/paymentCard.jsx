
export default function PaymentCard({title,value,type,orders}){
    return (
        <div className={`${type==='special'?'bg-[#415a77] hover:bg-[#415a97] text-white':'bg-white'} flex flex-col gap-7 p-4 rounded-[8px] shadow-lg`}>


            <div className="flex gap-2 items-center">
                <span className="text-lg font-sm ">{title}</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-help-icon lucide-circle-help   relative top-[2px]"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </div>


             <div className={`flex justify-between items-center mb-4`}>
              <span className={`text-3xl font-medium ${type==='special'||type==='moderate'?'underline decoration-green-500 decoration-2 underline-offset-7':null}`}>{value}</span>


             { (type==='special'|| type==='moderate') && <div className="flex items-center underline">

                    <span className="text-base font-base">{orders}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right relative top-[2px]"><path d="m9 18 6-6-6-6"/></svg>

            </div>
            }
            


        </div>

            { type==='special' && 
            <div className="bg-[#1b263b]  flex justify-between py-2 rounded-[8px] px-5 -mx-4 -my-4">
                 <span>Next Payment Date:</span>
                 <span className="underline decoration-green-500 decoration-1 underline-offset-7 ">Today,4:00PM</span>
            </div>
            }
             
    </div>
    )
} 