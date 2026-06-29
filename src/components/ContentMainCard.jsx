import { useState } from "react";
import FruitsCard from "./FruitsCard"
import mainCard from "../styles/contentMainCard.module.css"
import PriceComponent from "./Price";

export default function ContentMainCard(){

    //state for amount 
    const [amount] = useState(50000)

    //state for expenses
    const [expensesCardFirst, setExpensesCardFirst] = useState(0)
    const [expensesCardSecond, setExpensesCardSecond] = useState(0)
    const expensesTotal = expensesCardFirst + expensesCardSecond

    //state for new amount value
    let newAmount = 0

    if(amount >= expensesTotal) {
        newAmount = amount - expensesTotal
    }

    //render
    return (<>
        <h1>FruitsPrice</h1>
        <div className={mainCard.cardMain}>
            <div className={mainCard.contentLeft}>
                <FruitsCard 
                    title="First Fruit"
                    setExpenses={setExpensesCardFirst}
                />
                <FruitsCard 
                    title="Second Fruit"
                    setExpenses={setExpensesCardSecond}
                />
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
                    priceValue={expensesTotal}
                />
                <PriceComponent 
                    color="var(--color-success)"
                    labelPrice="New Amount : "
                    priceValue={newAmount}
                />
            </div>
        </div>
    </>);
}
