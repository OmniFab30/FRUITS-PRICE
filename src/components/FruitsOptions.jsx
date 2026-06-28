import { useState } from "react";
import styles from "../styles/QuantityButton.module.css"
import fruitsOptions from "../styles/fruitsOptions.module.css"
import arrow from "../assets/icons/left.png"

export default function FruitsOptions({cardTitle = ""}){
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
    }

    //render
    return (<>
        <div>
            <h2>{cardTitle}</h2>
            <div className={fruitsOptions.select_container}>
                <select 
                name="fruitsOption"
                onChange={priceCorresponding}
                >
                    {fruitsOptionsList}
                </select>
            <img src={arrow} className={fruitsOptions.arrow} alt=""/>
            </div>
            <PriceComponent labelPrice="Price" priceValue={selectedFruit.price}/>
        </div>
    </>
    );
}

function PriceComponent({labelPrice, priceValue}){
    return (<>
        <div className={fruitsOptions.priceContent}>
            <p className={styles.label}>{labelPrice} :</p>
            <span className={fruitsOptions.priceValue}>{`${priceValue} Ar`}</span>
        </div>
    </>)
}