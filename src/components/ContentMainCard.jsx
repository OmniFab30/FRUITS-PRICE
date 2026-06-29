import { useState } from "react";
import FruitsCard from "./FruitsCard"
import mainCard from "../styles/contentMainCard.module.css"
import PriceComponent from "./Price";

export default function ContentMainCard(){
    //state

    //state for expenses
    const [expenses, setExpenses] = useState(0)

    //state for amount
    const [amount, setAmount] = useState(50000)


    //render
    return (<>
        <h1>FruitsPrice</h1>
        <div className={mainCard.cardMain}>
            <div className={mainCard.contentLeft}>
                <FruitsCard 
                    title="First Fruit"
                    setExpenses={setExpenses}
                />
                <FruitsCard title="Second Fruit"/>
            </div>
            <div className={mainCard.contentRight}>
                <PriceComponent 
                    labelPrice="Amount : "
                    color="var(--color-warning)"
                    priceValue={amount}
                />
                <PriceComponent 
                    labelPrice="Expenses : "
                    color="var(--color-danger)"
                    priceValue={expenses}
                />
                <PriceComponent 
                    color="var(--color-success)"
                    labelPrice="New Amount : "

                />
            </div>
        </div>
    </>);
}
