import boxes from "../../../assets/boxes.png"
import style from "./index.module.css"

const CostOfDelivery = () => {
    return (
        <>
            <div className={style.section2}>
                <img src={boxes} alt="delivery image"/>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Cost of Delivery</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Food</td>
                            <td>#1, 500</td>
                        </tr>
                        <tr>
                            <td>Cloth</td>
                            <td>#2, 000</td>
                        </tr>
                        <tr>
                            <td>Television</td>
                            <td>#5, 000</td>
                        </tr>
                        <tr>
                            <td>Laptop</td>
                            <td>#8, 000</td>
                        </tr>
                        <tr>
                            <td>Others</td>
                            <td>#10, 000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CostOfDelivery;