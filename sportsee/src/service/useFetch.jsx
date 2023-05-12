import { useState, useEffect } from "react";

/**
 * @description useFetch is the creation of the API call service using the URL object
 * @param {fetch} url 
 * @returns a fetch with error handling with a useState and useEffect
 */
export default function useFetch (url)
{
    // Use hooks with useState (re-display) and useEffect
    const [data, setData] =useState(null);
    const [error, setError] = useState(null);
    const [isDataLoading, setDataLoading] = useState(true);

    // useEffect is executed when page is displayed
    useEffect(()=>
    {
            const fetchData = async () => {
                const result = await fetch(url);
                const json = await result.json();

                if (result.status === 404) 
                {
                    window.location.href = "/404";
                }
                // const user = new User();
                setData(json); // creer un objet user a partir de la cons json ligne 20
                setDataLoading(false);
            }
            
            fetchData()
                .catch((err)=>
                {
                    setError(err.message);
                    setDataLoading(false);
                    window.location.href = "/503";    
                });       
    }, [url] );

    return { data, error, isDataLoading };
};