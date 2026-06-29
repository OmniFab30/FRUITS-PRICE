import styles from "../styles/QuantityButton.module.css"
import fruitsOptions from "../styles/fruitsOptions.module.css"

export default function PriceComponent(props){

    //render
    return (<>
        <div className={fruitsOptions.priceContent}>
            <p className={props.isTrue ? styles.label : styles.labelFalse}>{props.labelPrice}</p>
            <span 
                style={{
                    color: props.color,
                    maxWidth: props.width
                }}
                className={props.isTrue ? fruitsOptions.priceValue: fruitsOptions.priceValueFalse}
            >
                {`${props.priceValue} Ar`}
            </span>
        </div>
    </>)
}