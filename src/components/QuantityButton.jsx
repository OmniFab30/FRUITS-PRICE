import { useState } from "react"
import styles from "../styles/QuantityButton.module.css"

export default function QuantityButton(props){
    //state
    const [quantity, setQuantity] = useState(0)

    //quantity behavior
    //decrement
    function decrement () {
        setQuantity(prev => {
            const newQuantity = Math.max(0, prev - 1)
            props.setQuantity(newQuantity)
            return newQuantity
        });
    }

    //increment 
    function increment () {
        setQuantity(prev => {
            const newQuantity = Math.max(0, prev + 1)
            props.setQuantity(newQuantity)
            return newQuantity
        });
    }

    //render
    return (<>
        <div className={styles.quantityBox}>
            <p className={styles.label}>{props.label}</p>
            <div className={styles.quantityFrame}>
                <div className={styles.quantityContent}>
                    <CircleButton 
                        operator={"-"} 
                        onClick = {decrement}
                        disabled={quantity === 0}
                    />
                    <QuantityCounter 
                        quantity={quantity} 
                    />
                    <CircleButton 
                        operator={"+"} 
                        onClick = {increment}
                        disabled={false}
                    />
                </div>
            </div>
        </div>
    </>);
}

//quantity Counter component
function QuantityCounter({quantity}) {
    //render
    return (
        <div className={styles.quantityCounter}>
            <p>{quantity}</p>
        </div>
    );
}

//circle button component
function CircleButton({operator, onClick, disabled}) {
    return (
        <button 
            className={styles.circleButton}
            onClick={onClick}
            disabled={disabled}
        >
            {operator}
        </button>
    );
}
