import Group from './assets/Group2.png'
import Shape from './assets/Shape.png'

function JokeDisplay(props){

    const {Random, RefreshJoke} = props

    const x = Math.floor(Math.random() * Random.length);

    return(
        <div className="main-div">
            <div className="joke-container">
                <h1 className="joke-numb">ADVICE #{x}</h1>
                <div className='div1'>
                    <p className="joke-quote">"{Random}"</p>
                </div>
                
                <div className="random-btn">
                    <img className='line' src={Group} alt=""/>
                    <button className="Btn" onClick={RefreshJoke}><img src={Shape}/></button>
                </div>
            </div>
        </div>
    )
}


export default JokeDisplay;