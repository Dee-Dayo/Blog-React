import style from "./index.module.css"


const OurService = () => {
    return (
        <>
            <div className={style.transportation}>
                <p className={style.p} >Our Service</p>
                <p style={{color: "#4d4d4d"}}>We specialize in delivering seamless logistics solutions tailored to your business needs.
                    From efficient freight transportation to strategic warehousing and distribution, our dedicated
                    team ensures reliable and cost-effective services every step of the way. With a focus on
                    technology-driven efficiency and exceptional customer service, we are committed to optimizing
                    your supply chain and helping your business thrive. Contact us today to experience the difference
                    of our personalized logistics services.</p>
            </div>
        </>
    )
}

export default OurService;