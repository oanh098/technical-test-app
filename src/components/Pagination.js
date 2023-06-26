/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Pagination({currentPage,totalPage, onPageChange}){

    const getPageNumbers = () => {
        const pageNumbers = [];
        for(let i = 1; i < totalPage; i++){
            pageNumbers.push(i)
        }
        return pageNumbers
    }
    

    return(
        <>
            
    <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
            <li>
                <a onClick={() => onPageChange(currentPage-1)} disabled={currentPage===1}  href="#" className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg 
                ${
                    currentPage === 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
                >
                    Previous
                </a>
                
            </li>
            {
                getPageNumbers().map((pageNumber) => (
                    <li>
                        <a key={pageNumber} onClick={() => onPageChange(pageNumber)} href="#" 
                        className={`${currentPage === pageNumber 
                        ? ' px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' 
                        : ' px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' }`}>
                            {pageNumber}
                        </a>
                    </li>
                ))
            }
            

           



            <li>
                <a onClick={() => onPageChange(currentPage+1)} href="#" className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg 
                ${
                    currentPage === totalPage
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
                >
                    Next
                </a>
                
            </li>
        </ul>
    </nav>
        </>
        

    )
}
export default Pagination;



