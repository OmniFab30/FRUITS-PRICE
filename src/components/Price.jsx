import styles from "../styles/QuantityButton.module.css"
import fruitsOptions from "../styles/fruitsOptions.module.css"

export default function PriceComponent({labelPrice, priceValue}){
    return (<>
        <div className={fruitsOptions.priceContent}>
            <p className={styles.label}>{labelPrice} :</p>
            <span className={fruitsOptions.priceValue}>{`${priceValue} Ar`}</span>
        </div>
    </>)
}