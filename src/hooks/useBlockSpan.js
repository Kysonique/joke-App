import { useEffect, useState } from "react";

export function BlockSpan(randomJokes){
    const [change, setChange] = useState(null)
    
    useEffect(() => {
        setChange(true)
    },[randomJokes])

    return {change}
}
