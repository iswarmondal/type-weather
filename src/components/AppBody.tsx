import "./css/style.css";
import Sun from "../assets/sun.gif";
import Cloud from "../assets/cloud.gif";

const AppBody = (props: any) => {
    let gif: string = "";
    if(props.weather == "clear") {
        gif = Sun;
    } if(props.weather == "rain") {
        gif = Cloud;
    }
    return (
        <>
            <div className="container-fluid">
                <section>
                    <h1>{Math.floor(props.temp - 273)} C</h1>
                    <img src={gif} alt="" />
                </section>
            </div>
        </>
    )
}

export default AppBody;