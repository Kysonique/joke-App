import { useEffect, useState } from "react";

export function useFetchSearch(searchURL){
    const [searchValue, setSearchValue] = useState([])

    useEffect(() => {
      const fetchData = ( async() => {
          const response = await fetch(searchURL, {
            headers: {
              Accept: "application/json",
            }
          });
          const data = await response.json();
          setSearchValue(data.results.joke)

        })
        fetchData()
      console.log("search fetched")
      console.log(searchValue)
      }, [])

    return {searchValue}
}
