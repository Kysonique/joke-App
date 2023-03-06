import { useEffect, useState } from "react";

export function useBlockSpan(randomJokes){
    const [change, setChange] = useState(null)
    
    useEffect(() => {
        setChange(true)
    },[randomJokes])

    return {change}
}
