// import QuantityButton from "./QuantityButton";
import FruitsOptions from "./FruitsOptions";
import QuantityButton from "./QuantityButton"
import fruitsCardStyle from "../styles/fruitsCard.module.css"

export default function FruitsCard() {
  //render
  return (<>
    <div className={fruitsCardStyle.fruitsCard}>
        <FruitsOptions cardTitle="First Fruits"/>
        <QuantityButton label="Quantity : "/>
    </div>
  </>);
  
}
