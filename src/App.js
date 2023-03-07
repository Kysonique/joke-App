import './App.css';
import JokeDisplay from './components/JokeContainer';
import NavigationBtns from './components/NavBar';
import SearchIcon from './components/assets/search.svg'
import { useState, useEffect } from 'react';
import { useFetchSearch } from './hooks/useFetchSearch';

function App() {
  
  const [randomJokes, setRandomJokes]= useState('')
  const [searchJoke, setSearchJoke] = useState([])
  const [URL, setURL] = useState("")
  const [inputData, setInputData] = useState([])
  const [hideSpan, setHideSpan] = useState(true)
  const [searchURL, setSearchURL] = useState("")
  const {data} = useFetchSearch(searchURL)


  const handleInput = ((e) => {
      console.log(e.target.value)
      setInputData(e.target.value)
  })

  const handleSubmit = ((e) => {
    setSearchURL(`https://icanhazdadjoke.com/search?term=${inputData}`);
    console.log(data.map((i) => i.joke));
    setSearchJoke(data.map((i) => i.joke));
    handleBlock()
  })


  const handleRandomJoke = (() => {
    fetchJoke()
    setHideSpan(true)
      console.log(randomJokes)
  })

  const CarSearch = (() =>{
    setURL("https://icanhazdadjoke.com/search?term=car");
    fetchSearch()
  })  
  
  const AnimalSearch =(() => {
    setURL("https://icanhazdadjoke.com/search?term=dog%20bear%20snake")
    fetchSearch()
  })

  const FoodSearch = (() => {
    setURL("https://icanhazdadjoke.com/search?term=drink%20eat%20beer")
    fetchSearch()
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
    const randomIndex = Math.floor(Math.random()* data.results.length)
    setRandomJokes(data.results[randomIndex].joke)
    // setInputData(data.results.map((i) => JSON.stringify(i.joke)));
  }

 
  useEffect(() => {
    fetchJoke()
  }, [])

 

  


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
          
        <div className='search-span' style={{display: (hideSpan? "none": "block")}}>
          <span className='span1'>{searchJoke}</span>
        </div>
      </div>

      
    <div>
        <JokeDisplay
          Random={randomJokes}
          RefreshJoke={handleRandomJoke}

        />

        <NavigationBtns
          Cars={CarSearch}
          Animals={AnimalSearch}
          Food={FoodSearch}
        />
    </div>
      </div>
  );
}

export default App;
