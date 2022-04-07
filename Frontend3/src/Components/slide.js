import "../Css/Dashboard.css";
import { Layout} from "antd";
import { Content } from "antd/lib/layout/layout";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "./ButtonComponent/Button";
import slide1 from '../Images/slider1.jpg';
import slide2 from '../Images/slider2.jpg';
import slide3 from '../Images/slider3.jpg';
        
function Slider (){
    const properties = {
        arrows: false,
        indicators: true,
        duration: 2000,
      };
    return(
        <Layout>
            <Content>
                <div className="slider-layout"
                style={{
                    width: "98%",
                    height: "73vh",
                    backgroundColor: "red",
                    marginBottom: "2%",
                    marginTop: "6%",
                    
                }}
                >
                <Slide easing="ease" {...properties}>
                    <div className="each-slide">
                    <div
                        style={{
                        backgroundImage: `url(${slide1})`,
                        backgroundSize: "cover",
                        }}
                    ></div>
                    </div>
                    <div className="each-slide">
                    <div
                        style={{
                        backgroundImage: `url(${slide2})`,
                        }}
                    ></div>
                    </div>
                    <div className="each-slide">
                    <div
                        style={{ backgroundImage: `url(${slide3})` }}
                    ></div>
                    </div>
                </Slide>
                </div>

                <div className="buttonContainer">
                <Button />
                </div>
        </Content>
    </Layout>
    );
}
export default Slider;