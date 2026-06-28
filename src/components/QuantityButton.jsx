import { useState } from "react"
import styles from "../styles/QuantityButton.module.css"

export default function QuantityButton({label = ""}){
    //state
    const [quantity, setQuantity] = useState(0)

    //quantity behavior
    //decrement
    function decrement () {
        setQuantity(quantity => Math.max(0, quantity - 1))
    }

    //increment 
    function increment () {
        setQuantity(quantity => quantity + 1)
    }

    //render
    return (<>
        <div className={styles.quantityBox}>
            <p className={styles.label}>{label}</p>
            <div className={styles.quantityFrame}>
                <div className={styles.quantityContent}>
                    <CircleButton 
                    operator={"-"} 
                    onClick = {decrement}
                    disabled={quantity === 0}
                    />
                    <QuantityCounter quantity={quantity} />
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
