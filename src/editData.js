import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditAnime from "./components/EditAnime";

function editData() {
    return(
        <>
        <Navbar />
        <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 "><EditAnime />
        </div>
        </section>
        <Footer/>
        </>

    );
};

export default editData