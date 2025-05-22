import Hero from "../components/Hero";
import Humidity from "../components/Humidity";
import Nitrogen from "../components/Nitrogen";
import PH from "../components/PH";
import Phosphorus from "../components/Phosphorus";
import Potassium from "../components/Potassium";
import Rainfall from "../components/Rainfall";
import Temperature from "../components/Temperature";

function Home(){
    return(
        <div>
            <Hero/>
            <p className="text-center text-7xl font-medium mb-40 ">Factors that affect the Crop</p>
            <Nitrogen/>
            <Phosphorus/>
            <Potassium/>
            <PH/>
            <Rainfall/>
            <Humidity />
            <Temperature/>
        </div>
    )
}

export default Home;