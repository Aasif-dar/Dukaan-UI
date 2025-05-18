
export default function Header({visibleBurger,setVisibleBurger}){

    return(
        <div className=" w-full flex justify-between  bg-white h-[60px] border-solid border-b border-gray-300 mb-6">
            
           

            <div className="flex items-center px-6 gap-4">

                <button onClick={()=> setVisibleBurger(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                </button>


                 <span className="text-[16px] text-gray-800 px-4">
                   Payments
                </span>

                <div className="flex gap-2 items-center ">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL5SURBVHgBzVbZcRpBEB0QpSooPnAE3hBwBF7+uI8IBBFYRABEIDIAReA19x8QgXEEWkdgAuDwe0svHlZ7SR8uvaphh5npft09PT2j1H9GIu5C0zRzmUymmUwmjUQi8Zlj5/P59/F43OG7W61Wdhw9kYTVatXEp0fOiKWb0+n0vFgsxuo9hMVi0UilUiOXiN7AMwtKd/DS5hj6Bvp5jDcwb8g6G14Xgjz2JazX6w9QNkQ3h7ZF689ms40KASMB4pEQ70HaWS6XViRhqVRq3t3dfRdru/P5fKjeABD31WULFLxvTyaT50BCCeNPdHOwtjOdTsc+Ck31bz83fp7XarU2jOV27A+Hwxc9vDeElUrlBUQGugMo6vsYM1Ke5GGGInwt756B9BFzT2JUwR1Pup1yudwmGZrtJSMQ5rWQbbG/Hazrci1aXgy5AaLDrdhQRqLiIHVlTiYfxOKOVxgCTXwcY6DI1KaGmFu7Sn3COxAje0J+8ZDh4oR45xUi8pqCG/DsSdf0zlEXj5Ny6oaZuxIiJI5C7MUP5QMJ3R5h3XjnEJm9CgHPLr+sUg6Xx4Odn5Bk6zhAZy9MVgoFDTN0QkOstVUMMDzpdNqEx99orOyt5bfW1enW35R6B7LZLBPlGhUQt+LKuoQ2f1gb4wghET5xT4PKlw6pt0qS50KIQZuDmtWhwNohZFQUmay9yQ+H8P7+3kIJGrHq4+9jlBI51LEAzxrQy5PgEDpuWZbF1N6w0uhVIQhMGjm7oZAbhOu24LCvhAL3UPfClPA2QdL8gcUvUcZJAWeGjt2xK6FUGDYTRTwwrMhIfZ/NoHUwpufWZv3W0T1knFmU92hPvIT9FGENhX+hbaX/CiLbl+pU0OdeXcDaXUbwph+oN0C7logW5K1QQoK3gzwXcnyj8DKO88RQ8tiiZ/h2/S7wwEdUs9k0cLDX+uMIjcX95hGlLqWtIdlIMNRtNytjE7qQELfR/RqxNNZjK/ZDmB6jODBD2QwZtlmlWDjkLH88/AXZQnwz3pegoAAAAABJRU5ErkJggg==" alt="" className="shrink-0 w-[14px] h-[14px]"/>
                    <div className="flex items-center cursor-help">
                        <span className="text-[12px] shrink-0 text-gray-700 ">
                            How it works
                        </span>
                    </div>
                </div>
            </div> 
             
             <div className="hidden md:flex md:w-[150px] lg:w-[400px] relative rounded-md justify-center items-center shrink-0 flex-nowrap border-none">

                  <div className="absolute inset-y-0 start-0 ps-3 flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&s" alt="" className="w-[20px] h-[20px] mix-blend-multiply"/>
                  </div>
                 
                    <input type="search" placeholder="Search features,tutorials,etc." className="truncate w-full bg-gray-200 gap-10 text-left  basis-auto font-normal shrink-0 rounded-md flex-nowrap px-[16px] py-[9px] items-center pl-10 outline-none" />
                  
             </div>
            <div className="flex justify-center items-center gap-4 px-10">
               
                <button className="rounded-full h-10 w-10 bg-gray-200 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-more"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
                </button>
                <button className="rounded-full h-10 w-10 bg-gray-200 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down-dash"><path d="M15 5H9"/><path d="M15 9v3h4l-7 7-7-7h4V9z"/></svg>
                </button>
                  
                
            </div>
        </div>
    )
}