/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchInput from './components/SearchInput';
import AnimeFetcherService from './services/AnimeFetcherService';

function FetchData() {
    
    const [animeFetcherService, setAnimeFetcherService] = useState(null);

    
    const handleSearch = async (searchQuery) => {
        console.log ('searchQuery: ', searchQuery)
        setAnimeFetcherService(<AnimeFetcherService url='https://api.jikan.moe/v4/anime' queryParams={searchQuery} />)
    }    
    
    useEffect(() => {
        setAnimeFetcherService(<AnimeFetcherService url='https://api.jikan.moe/v4/anime' />);
    }, [])

  return (
    <>     
    <Navbar />
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="grid grid-cols-3">
                <div className='col-span-2'><SearchInput  onSearch={handleSearch} /></div>
            </div>
        </div>
    </section>
   
    {animeFetcherService}
       

    <Footer />
    </>
  );
}

export default FetchData;
