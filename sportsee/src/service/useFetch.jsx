import { useState, useEffect } from "react";

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

                setData(json);
                setDataLoading(false);
            }
            
            fetchData()
                .catch((err)=>
                {
                    setError(err.message);
                    setDataLoading(false);
                    throw Error("Pas de panique, c'est juste une erreur");    
                });       
    }, [url] );

    return { data, error, isDataLoading };
};