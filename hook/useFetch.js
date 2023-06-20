import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from '@env';
const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const config = {
    params: {...query},
    headers: { 
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  
  useEffect(() => {
    fetchData(); // Invoke the fetchData function when the component mounts
  }, []);
  
  
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://jsearch.p.rapidapi.com/${endpoint}`,
        config
        );
        setData(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
        console.log(error);
        alert("Fetcher module failed...");
      }
    };
    
    return { data, isLoading, error };
  };
  
  export default useFetch;
