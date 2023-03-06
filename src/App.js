import './App.css';
import JokeDisplay from './components/JokeContainer';
import NavigationBtns from './components/NavBar';
import SearchIcon from './components/assets/search.svg'
import { useState, useEffect } from 'react';
import { useBlockSpan } from './hooks/useBlockSpan';

function App() {
  
  const [randomJokes, setRandomJokes]= useState('')
  const [searchJoke, setSearchJoke] = useState([])
  const [URL, setURL] = useState("")
  const [searchValue, setSearchValue] = useState('')
  const [inputData, setInputData] = useState()
  const [hideSpan, setHideSpan] = useState(true)
  const {change} = useBlockSpan(randomJokes)


  const handleInput = ((e) => {
      console.log(e.target.value)
      setInputData(e.target.value)
  })

  const handleSubmit = ((e) => {
    setURL("https://icanhazdadjoke.com/search")
      // setSearchValue(inputData);
      // console.log(searchValue)
  })


  const handleRandomJoke = (() => {
    fetchJoke()
      console.log(randomJokes)
  })

  const CarSearch = (() =>{
    setURL("https://icanhazdadjoke.com/search?term=car");
    handleBlock()
  })  
  
  const AnimalSearch =(() => {
    setURL("https://icanhazdadjoke.com/search?term=dog%20bear%20snake")
    handleBlock()
  })

  const FoodSearch = (() => {
    setURL("https://icanhazdadjoke.com/search?term=drink%20eat%20beer")
    handleBlock()
  })

  const handleBlock =(() => {
    if (hideSpan === true){
      setHideSpan(false)
    }
  })

  useEffect(() => {
    setHideSpan(true)
  }, [randomJokes])

  async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      }
    });
    const data = await response.json();
    setRandomJokes(data.joke);
  }

  async function fetchSearch() {
    const response = await fetch(URL, {
      headers: {
        Accept: "application/json",
      }
    });
    const data = await response.json();
    setInputData(data.results.map((i) => JSON.stringify(i.joke)));
  }

  // const newSearchArr = (() => {
  //   for (let i=0; i<searchJoke.length; i++){
  //     return searchJoke[i +1];
  //   }
  // })

  useEffect(() => {
    fetchJoke()
  }, [])

  useEffect(() => {
    fetchSearch();
  }, [URL])

  


  return (
    <div className="App">
      <div className="search-setup">
        <input 
        className="searching" 
        placeholder="search dad jokes"
        onChange={handleInput}
        />
        <button type="submit" className='search-btn' onClick={handleSubmit}><img src={SearchIcon}/></button>
          <br/>
          
        <div className='search-span'>
          <span className='span1'>{inputData}</span>
        </div>
      </div>

      
   <div>
   <JokeDisplay
          Random={randomJokes}
          RefreshJoke={handleRandomJoke}

      />

        <NavigationBtns
          RefreshJoke={handleRandomJoke}
          SearchResults={searchJoke.map((i) => i.joke)}
          Cars={CarSearch}
          InputValue={handleInput}
          SubmitBtn={handleSubmit}
          Animals={AnimalSearch}
          Food={FoodSearch}
          />
   
   </div>
      
      </div>
  );
}

export default App;
