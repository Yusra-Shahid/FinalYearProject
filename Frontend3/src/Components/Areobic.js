import React, { Component } from "react";
import "../Css/Areobic.css";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExMainPage from "./ExMainPage";
import ImgMediaCard from "./ButtonComponent/View";
 import Aero1 from "../Images/Aero1.mp4";
//  import stre2 from "../Images/stre2.mp4";
 import videoBg from "../Images/videoBg.mp4";



    const Videosrc0= videoBg
    const Videosrc1 = Aero1;
    // const Videosrc2 = stre2;

export class Areobic extends Component {

    

    render() {
        return (<><Layout>
            <Navbar />

            <div className=" Stretch-fazul"></div>
            <div className={"stretch_ExContainer"}>

                <div className="Main-Context">

                </div>

                <div className="Stretching-video">
                    <video src={videoBg} autoPlay="true" controls="controls"/>
                    </div>
                <diV className="Sec-Context">Discover workouts that will fit your mood, goals, fitness level, music taste & schedule</diV>
                <div className="Gendercard">
                <div className=" card_Container1 ">
                    <div className='malercard'>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="200"
                                image="https://image.shutterstock.com/image-photo/young-man-sportswear-running-on-260nw-428663329.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Male Exersice
                                </Typography>
                                <Typography variant="body2" color="text.secondary"> across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    </div>
                    <div>
                        <div className="card_Container2 ">
                            <div className="exersice-text"></div>
                            {/* <p>1. Start by jogging forward as you swing the jump rope over your head and under your feet.<br></br>
                                2. Next, reverse your direction and jog backward as you continue to swing the jump rope.<br></br>
                                 3. Finish your set by doing a hopscotch jump for 15 seconds. 4. Rest for 15 seconds between sets.
                                <br></br> 5. Repeat 18 times.</p> */}
                        <div className='Femalercard'>
                            <Card sx={{ maxWidth: 490 }}>
                                <div>
                                    <video src={Aero1} muted="true" autoPlay="true" controls="controls"/>
                                    </div>
                               

                            </Card>
                        </div>
                        </div>
                    </div>
                </div>

            </div>


            <Footer>
                <p>Copyright © 2021 I-MedCare. All Rights Reserved</p>
            </Footer>






        </Layout>
        </>

        );

    }
}
export default Areobic;