
export default function BurgerComp({visibleBurger,setVisibleBurger}){
  
    return(
     <div className={`flex flex-col items-start text-white py-5 px-[10px] grow gap-4 items-center shrink-0 w-full overflow-hidden`}>
                
               <header className="flex w-[192px] gap-4 shrink-0 flex-nowrap">
                     <img src="https://my-dukaan-ui.vercel.app/static/media/logo.a7eab759424e913953ef.png" className="w-10 h-8 rounded-md" />

                     <div className="flex flex-col justify-center flex-nowrap items-start shrink-0 grow basis-0">
                               <span className="self-stretch shrink-0 basis-auto text-[15px] font-medium leading-[22px] text-[#fff] text-left whitespace-nowrap">Mehran</span>
                               <span className="shrink-0 text-[13px] font-light underline opacity-75">view store</span>
                     </div>

            <button
                onClick={() => setVisibleBurger(false)}
                className="cursor-pointer relative -top-2"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
           
            </button>

        </header>
               

            <div className="flex flex-col w-full relative h-full">
              <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700  rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Home</span>
                </div>       
                
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-ordered"><path d="M10 12h11"/><path d="M10 18h11"/><path d="M10 6h11"/><path d="M4 10h2"/><path d="M4 6h1v4"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Orders</span>
                </div>       

                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Products</span>
                </div>       
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Delivery</span>
                </div>       
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-2"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Marketing</span>
                </div>       
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Analytics</span>
                </div>       
                <div className="flex gap-2 px-4 cursor-pointer bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                    </button>

                    <span className="text-gray-100 font-semibold">Payments</span>
                </div>       
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Tools</span>
                </div>     
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-percent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Discounts</span>
                </div>     
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Audience</span>
                </div>     
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paint-roller"><rect width="16" height="6" x="2" y="2" rx="2"/><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect width="4" height="6" x="8" y="16" rx="1"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Appearence</span>
                </div>     
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Plugin</span>
            </div>     
                <div className="flex gap-2 px-4 cursor-pointer hover:bg-gray-700 w-full rounded-md py-2">
                    <button className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
                    </button>

                    <span className="text-gray-300 font-semibold">Wallet</span>
                </div>     

                    
            </div>
        <div className="flex gap-3 px-2 cursor-pointer bg-gray-700  rounded-md py-1 w-full ">
            <button className="text-gray-100 font-bold ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
            </button>
                
            <div className="flex flex-col">
            <span className="text-gray-300 font-medium text-sm">Available credits</span>

            <span className="text-gray-100 font-semibold text-base">223.10</span>
            </div>  
        </div>     
    </div>
   )
}