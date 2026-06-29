// import QuantityButton from "./QuantityButton";
// import { useState } from "react";
import FruitsOptions from "./FruitsOptions";
import QuantityButton from "./QuantityButton"
import fruitsCardStyle from "../styles/fruitsCard.module.css"
import { useState } from "react";


export default function FruitsCard(props) {

  const [quantity, getQuantity] = useState(0)
  const [price, getPrice] = useState(0)

  const expenses = quantity * price
  console.log(expenses)

  //render
  return (<>
    <div className={fruitsCardStyle.fruitsCard}>
        <FruitsOptions 
          cardTitle={props.title}
          getPrice={getPrice}
        />
        <QuantityButton 
          label="Quantity : "
          getQuantity={getQuantity}
        />
        <p>{props.setExpenses}</p>
    </div>
  </>);
  
}
