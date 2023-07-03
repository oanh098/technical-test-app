import { useState } from "react";
import DataFetcherService from "./DataFetcherService";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import ConfirmationDialog from "../components/ConfirmationDialog";
const AnimeFetcherService = ({url, queryParams}) => {
    const AnimeFetcher = () => {
        const [currentPage, setCurrentPage] = useState(1);
        const handlePageChange = (page) => {
            setCurrentPage(page);
        }
        const [selectedImage, setSelectedImage] = useState(null);
        const handleImageClick= (image) => {
            setSelectedImage(image);
            setTimeout(() => {
                setModalVisible(true);
            }, 100)
            
            //alert('state modalVisible: ' + modalVisible);
        }
        const startIndex = (currentPage - 1) * 10;
        const endIndex = startIndex + 10;
        const [modalVisible, setModalVisible] = useState(false);
        return (   
               
            <DataFetcherService
                url={url}
                queryParams={queryParams}
                render={({data}, isLoading, error) => {
                    let paginatedData = [];
                    if(!isLoading) {
                        paginatedData = data.slice(startIndex, endIndex);
                    }
                    return(
                        <>
                            {isLoading ? (
                                <>
                                <section className="bg-white dark:bg-gray-900">
                                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                                    <p>Loading...</p>
                                </div>
                                </div>
                                </section></>

                            ):(
                                <>
                                <section className="bg-white dark:bg-gray-900">
                                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                                {paginatedData.map((item) => (
                                <div key={item.mail_id} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                    <a onClick={() => handleImageClick(item.images.jpg.image_url)} >
                                        <img  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                                        src={item.images.jpg.image_url} alt={item.title} />
                                    </a>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            <a href="#">{item.title}</a>
                                        </h3>
                                        <span className="text-gray-500 dark:text-gray-400">{item.title}</span>
                                        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                        <ul className="flex space-x-4 sm:mt-0">
                                            <li>
                                                <Link to={`/editAnime/${item.mal_id}`}  href="/editAnime" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">                                                
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M17 19V20C17.0084 20.2562 16.9149 20.5053 16.7401 20.6927C16.5652 20.8801 16.3232 20.9906 16.067 21H3.93303C3.67687 20.9906 3.43487 20.8801 3.26 20.6927C3.08514 20.5053 2.99166 20.2562 3.00003 20V7.828C3.00014 7.29761 3.21093 6.78899 3.58603 6.414L6.41403 3.586C6.78901 3.2109 7.29764 3.00011 7.82803 3H16.067C16.3232 3.00939 16.5652 3.11989 16.7401 3.30731C16.9149 3.49473 17.0084 3.74381 17 4M8.00003 3V7C8.00003 7.26522 7.89467 7.51957 7.70714 7.70711C7.5196 7.89464 7.26525 8 7.00003 8H3.00003M16.14 8.772L18.885 11.518M20.1 7.612C20.2941 7.80582 20.448 8.03599 20.553 8.28934C20.658 8.54269 20.7121 8.81425 20.7121 9.0885C20.7121 9.36275 20.658 9.63431 20.553 9.88766C20.448 10.141 20.2941 10.3712 20.1 10.565L13.45 17.211L9.75703 17.95L10.496 14.258L17.142 7.612C17.3359 7.41722 17.5664 7.26267 17.8202 7.15721C18.074 7.05175 18.3462 6.99746 18.621 6.99746C18.8959 6.99746 19.168 7.05175 19.4218 7.15721C19.6756 7.26267 19.9061 7.41722 20.1 7.612Z" 
                                                    stroke="#2F2F38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                ))}
                                </div>  
                                </div>
                                </section> 
                                
                                <section className="bg-white dark:bg-gray-900">
                                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                                    <Pagination 
                                        currentPage={currentPage} 
                                        totalPage={Math.ceil(data.length / 10)} 
                                        onPageChange={handlePageChange} />
            
                                    </div>
                                </section>
                                </>
                                
                            )}
                            
                            
                            {/* {modalVisible && (
                                        <Dialog image={selectedImage} closeModal={() => setModalVisible(false)} />
                                    )} */}
                            {modalVisible && (
                                <ConfirmationDialog image={selectedImage} closeModal={() => setModalVisible(false)} />
                            )}
                        
                        </>
                    );
                        
                } 
                
            }>

            </DataFetcherService>
        )
    };

    

    return (<>
        <AnimeFetcher />       

    </>)
};

export default AnimeFetcherService;