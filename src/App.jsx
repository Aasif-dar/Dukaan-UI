import Header from "./components/header"
import BurgerComp from "./components/burgercomp"
import Payments from "./components/payment"
import Table from "./components/table"
import { useState } from "react"

function App(){
  const [visibleBurger,setVisibleBurger]=useState(true)
  return(
    <div className=" relative h-screen w-screen bg-[#f9f9f9]  overflow-x-hidden">

      <div className={`h-screen  transition-all duration-500 ${visibleBurger?'md:ml-[13.5rem]':'ml-0'}`}>
             <Header visibleBurger={visibleBurger} setVisibleBurger={setVisibleBurger}></Header>

             <Payments></Payments>

               <div className="flex flex-col mx-5 p-5 gap-4">
                <span className="font-semibold text-3xl">Transactions|This Month</span>

              <Table></Table>

               </div>
            
      </div>

      <div className={`hidden md:flex flex-col items-start absolute top-0 left-0 bg-[#1e2640] h-full fixed w-auto z-10 transition-transform duration-500 ${
    visibleBurger ? "translate-x-0" : "-translate-x-full"}`}>
        <BurgerComp visibleBurger={visibleBurger} setVisibleBurger={setVisibleBurger}></BurgerComp>
        
      </div>
       
      
    </div>

             
  )
}

export default App