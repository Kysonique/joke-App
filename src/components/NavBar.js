import Paws from "./assets/paws.png"
import Carz from "./assets/collision.png"
import Burger from "./assets/cheeseburger.png"

function NavigationBtns(props){

    const {Cars, Animals, Food} = props

    

    

    return(
        <div className="category-btns">
            <button onClick={Cars} className="Btn1"><img src={Carz} style={{width: "40px", height:"40px"}}/></button> 
            <button onClick={Animals} className="Btn1"><img src={Paws} style={{width: "40px", height:"40px"}}/></button> 
            <button onClick={Food} className="Btn1"><img src={Burger} style={{width: "33px", height:"33px"}}/></button> 
        </div>
    )
}

export default NavigationBtns;