import { useNavigate } from "react-router-dom";
 import { useLocation } from 'react-router-dom';

export function NavbarComp() {

    const navigate = useNavigate();
     const location = useLocation();
  



  return (

    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">

    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">

        {/* Logo */}

        <a href="#" className="flex items-center">
            <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Gamification</span>
        </a>

        {/* For Smaller Screen */}
        <div className="flex items-center lg:order-2">


            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

            <a href=""
             onClick={()=>navigate("/login")}
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Login</a>

            <button data-collapse-toggle="mobile-menu-2" type="button"
				className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span className="sr-only">Open main menu</span>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</button>
        </div>

        {/* For Bigger Screen */}
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="#"

                        className={`block py-2 pl-3 pr-4 ${location.pathname ==="/" ? 'dark:text-white': 'dark:text-gray-400'} bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 `}


                        aria-current="page" onClick={()=>navigate("/")}>Home</a>
                </li>

                <li>
                    <a href="#"
                        onClick={()=>navigate("/about")}
                        className={`block py-2 pl-3 pr-4 ${location.pathname ==="/about" ? 'dark:text-white': 'dark:text-gray-400'} bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 `}>
                            
                            About Project</a>
                </li>
                <li>
                    <a href="#"
                    onClick={()=>navigate("/features")}
                        className={`block py-2 pl-3 pr-4 ${location.pathname ==="/features" ? 'dark:text-white': 'dark:text-gray-400'} bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 `}>Features</a>
                </li>

               

            
            </ul>
        </div>


    </div>
</nav>


   
  );
}

