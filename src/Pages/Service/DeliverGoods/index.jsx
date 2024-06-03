import style from "./index.module.css"
import smile from "../../../assets/smile.png"

const DeliverGoods = () => {
    return (
        <div>
            <div className={style.section2}>
                <div>
                    <p style={{marginBottom: "15px"}}>We have many ways to deliver your goods</p>
                    <p> Our strategically located warehouses are equipped with state-of-the-art technology to handle
                        storage, inventory management, and distribution, ensuring seamless movement of your goods
                        throughout the supply chain. Whether you require temperature-controlled transportation for
                        perishable goods or specialized handling for oversized cargo, we have the expertise and
                        equipment
                        to meet your unique requirements.</p>
                </div>
                <img src={smile} alt="image smile"/>
            </div>
        </div>
    )
}

export default DeliverGoods;