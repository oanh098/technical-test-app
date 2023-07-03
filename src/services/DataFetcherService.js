import axios from "axios";
import { useEffect, useState } from "react";

const DataFetcherService = ({ url, queryParams, render }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
         setLoading(true);
        
        try {
            let response;
            if(queryParams && Object.keys(queryParams).length > 0 ){
                response = await axios.get(url, {
                    params: {
                        q: queryParams,
                        sfw: true,
                    }
            });
            } else {
                response = await axios.get(url);
            }

            setData(response.data.data);
            
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }       
    };

    useEffect(() => {
        fetchData();
    },[]);

    return render({ data }, loading, error);
};

export default DataFetcherService;