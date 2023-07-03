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
   
    {animeFetcherService}
       

    <Footer />
    </>
  );
}

export default FetchData;
