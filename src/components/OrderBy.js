import React, {useState} from "react";



function OrderBy({selectItems, }){

    const [selectedItem, setSelectedItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const handleClick= () =>{
        setIsOpen(!isOpen);
    }

    
    
    return(
        <>
        
    <button id="dropdownDefaultButton" onClick={handleClick}
    data-dropdown-toggle="dropdown1" 
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 
    text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Order By <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <div  id="dropdown1" 
        className={`${isOpen ? "block" : "hidden"} z-10 
        bg-white divide-y divide-gray-100 rounded-lg 
        shadow w-44 dark:bg-gray-700
        `}>
        <ul  class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
            <a value={1}   href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li value={2} onClick={handleClick}>
            <a  href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li value={3} onClick={handleClick}>
            <a  href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li value={4} onClick={handleClick}>
            <a  href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
        </ul>
    </div>

        </>
    )
};

export default OrderBy;