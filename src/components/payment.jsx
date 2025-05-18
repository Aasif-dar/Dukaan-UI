import PaymentCard from "./paymentCard"
export default function Payments (){

  return (
      <div className="p-5 flex flex-col  mx-5">


                <div className="flex justify-between mb-5">
                        <span className="text-[20px] font-medium">Overview</span>
                        <div className="border border-gray-300  bg-white text-gray-700 flex gap-3 justify-center items-center">
                                <span>Last Month</span>

                                <span >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#484747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                </span>
                        </div>
                                
                </div>
             
             <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 items-start">

                <PaymentCard title={"Next Payout"} value={"₹2,312.23"} type={"special"} orders={"23 Orders"}></PaymentCard>
           
                 <PaymentCard title={"Online Orders"} value={"231"} type={"moderate"} orders={"13 Orders"}></PaymentCard>
                 <PaymentCard title={"Amount Received"} value={"₹23,92,312.19"} type={"Normal"}></PaymentCard>
             </div>
      </div>
   )
}