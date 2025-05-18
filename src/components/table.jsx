
const orders = {
    "order id": Array(19).fill("#281209"),
    "order date": Array(19).fill("7 July, 2023"),
    "order amount": Array(19).fill("₹1,278.23"),
    "transaction fees": Array(19).fill("₹22"),
  };
  
export default function Table(){
    return(
        <div className="flex flex-col shadow-md bg-white h-auto p-5 rounded-md box-border">

            <div className="flex justify-between  items-center align-center">

                <div className="flex border rounded-md items-center border-gray-300 h-[50px] w-[300px] gap-2 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a29a9a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    <input type="text" className="truncate h-full w-full outline-none text-xl text-gray-600 " placeholder="Search by Order ID...." />
                         
                </div>

                <div className="flex gap-4 mb-8">
                    <div className="flex border rounded-md border-gray-300  p-2 px-4 gap-2 items-center">
                         <span className="text-2xl text-gray-700">Sort</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f4a4a" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up-icon lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
                    </div>

                    <div className="border rounded-md border-gray-300  p-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f4a4a" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    </div>
                </div>
            </div>
        
            <table className="w-full table-fixed text-lg font-medium border-gray-300 border-separate border-spacing-0">
                
                <thead className="w-full bg-gray-100 ">
                    <tr className="w-full ">
                    <th className="text-left p-3 rounded-tl-lg rounded-bl-lg">Order ID</th>
                    <th className="text-left p-3 ">Order Amount</th>
                    <th className="text-right p-3 ">Order Date</th>


                     <th className="rounded-tr-lg rounded-br-lg">
                        <div className="flex items-center p-3 gap-2 justify-end">
                            <span>Transaction fees</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert-icon lucide-circle-alert relative top-[1px]"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                        </div>
                       </th> 
                    </tr>
                </thead>

            <tbody>
                {orders["order id"].map((_, i) => (
                <tr key={i} className={`text-xl font-medium ${i!==0?'border-t-3 border-gray-300':null}`}>
                    <td className="p-3 text-left text-blue-600">{orders["order id"][i]}</td>
                    <td className="p-3 text-left">{orders["order amount"][i]}</td>
                    <td className="p-3 text-right">{orders["order date"][i]}</td>
                    <td className="p-3 text-right">{orders["transaction fees"][i]}</td>
                </tr>
                ))}
            </tbody>
         </table>    
        </div> 
    )
}


          

                 

              