import Hero from "./Hero";
import TrackDelivery from "./TrackDelivery";
import CostOfDelivery from "./CostOfDelivery";
import HandlingTransportation from "./HandlingTransportation";
import Guarantee from "./Guarantee";

const Home = () => {
    return (
        <div>
            <Hero/>
            <TrackDelivery/>
            <CostOfDelivery/>
            <HandlingTransportation/>
            <Guarantee/>
        </div>
    )
}

export default Home;