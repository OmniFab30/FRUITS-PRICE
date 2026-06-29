import { useState } from "react";
import fruitsOptions from "../styles/fruitsOptions.module.css"
import arrow from "../assets/icons/left.png"
import PriceComponent from "../components/Price"

export default function FruitsOptions(props){
    //state 
    const [fruits] = useState([
        {id: 0, name: "Select a Fruit", price: "_"},
        {id: 1, name: "Banana", price: 300},
        {id: 2, name: "Apple", price: 500},
        {id: 3, name: "Orange", price: 400},
        {id: 4, name: "Watermelon", price: 700},
        {id: 5, name: "Pineapple", price: 1000}
    ])

    //fruit selected state
    const [selectedFruit, setSelectedFruit] = useState(fruits[0])

    //option list
    const fruitsOptionsList = fruits.map(fruit => (
        <option 
            key={fruit.id}
            value={fruit.name}
        >
            {fruit.name}
        </option>
    ))

    //fruits Options behavior
    const priceCorresponding = (e) => {
        const fruit = fruits.find(
            fruit => fruit.name === e.target.value
        )
        setSelectedFruit(fruit)
        props.getPrice(fruit.price)
    }

    //render
    return (<>
        <div>
            <h2>{props.cardTitle}</h2>
            <div className={fruitsOptions.select_container}>
                <select 
                    name="fruitsOption"
                    onChange={priceCorresponding}
                >
                    {fruitsOptionsList}
                </select>
                <img 
                    src={arrow} 
                    className={fruitsOptions.arrow} 
                />
            </div>
            <PriceComponent 
                max-width="140px"
                color="var(--color-warning)"
                labelPrice="Price : " 
                isTrue={true}
                priceValue={selectedFruit.price}
            />
        </div>
    </>
    );
}
