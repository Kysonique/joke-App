import { useEffect, useState } from "react";

export function useFetchSearch(inputData){
    const [searchValue, setSearchValue] = useState([])

    useEffect(async () => {
        const response = await fetch(`https://icanhazdadjoke.com/search?term=${inputData}`, {
            headers: {
              Accept: "application/json",
            }
          });
          const data = await response.json();
          setSearchValue(data.results.joke)   
        },[inputData])

    return {searchValue}
}
