/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Dialog({ image, closeModal, children}){
       
    return (
        <div id="info-popup" 
        tabindex="-1" 
        className="overflow-y-auto overflow-x-hidden fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-modal md:h-full">
         <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
         <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
            {children}
        </div>
        </div>
        </div>
             
    );
}
export default Dialog;