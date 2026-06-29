import { useEffect } from "react";
import FruitsOptions from "./FruitsOptions";
import QuantityButton from "./QuantityButton"
import fruitsCardStyle from "../styles/fruitsCard.module.css"
import { useState } from "react";


export default function FruitsCard(props) {

  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const expenses = price * quantity

  useEffect(() => {
    props.setExpenses(expenses);
  }, [expenses, props]);

  //render
  return (<>
    <div className={fruitsCardStyle.fruitsCard}>
        <FruitsOptions 
          cardTitle={props.title}
          setPrice={setPrice}
        />
        <QuantityButton 
          label="Quantity : "
          setQuantity={setQuantity}
        />
        <p>{props.setExpenses}</p>
    </div>
  </>);
  
}
