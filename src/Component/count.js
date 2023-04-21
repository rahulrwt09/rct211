import { useEffect, useState } from "react";

function useCounter(ivalue,step){
    const[ count, setcount] = useState(ivalue);
    useEffect(()=>{
        const interval= setInterval(()=>{
            setcount((prev)=>prev+step)
        }, 1000);
        return ()=>clearTimeout(interval)
    }, [step]);
    return count;

}
export default useCounter