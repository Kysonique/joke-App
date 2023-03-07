import { useEffect, useState } from "react";

export function useFetchSearch(searchURL){
  const [searchValue, setSearchValue] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(searchURL, {
            headers: {
              Accept: "application/json",
            }
          });
          const data = await response.json();
          setSearchValue(data.results)
      }
        
      fetchData()
    }, [searchURL])


  return {data: searchValue}

}
