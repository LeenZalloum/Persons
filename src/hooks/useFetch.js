import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     useEffect(()=>{
       const abortCont = new AbortController();
 
    
        fetch(url,{signal : abortCont.signal})
        .then(res =>{
            if(!res.ok){
                throw new Error('could not fetsh the data for that resource');
            }
            return res.json();
        })
        .then(data=>{
            setData(data.data);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
            if(err.name ==="AbortError"){
            console.log("fetch abort");
        }else{
            setError(err.message);
            setIsPending(false);}
        })

    return () =>{ 
        abortCont.abort();
        setData(null);
        setError(null);
    }
     },[url]);

     return{data, isPending, error}
}

export default useFetch;