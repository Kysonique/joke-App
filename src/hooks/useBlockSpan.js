import { useEffect, useState } from "react";

export function useBlockSpan(randomJokes){
    const [change, setChange] = useState(false)
    
    useEffect(() => {
        setChange(true)
    },[randomJokes])

    return {change}
}
