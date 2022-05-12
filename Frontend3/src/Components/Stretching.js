import React, { Component } from "react";
import "../Css/Stretching.css";
import { Layout } from "antd";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Footer } from "antd/lib/layout/layout";
import Navbar from "./navbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExMainPage from "./ExMainPage";
import ImgMediaCard from "./ButtonComponent/View";
 import videoBg from "../Images/videoBg.mp4";
 import stre1 from "../Images/stre1.mp4";
 import stre2 from "../Images/stre2.mp4";


 
    const Videosrc = videoBg;

export class Stretching extends Component {

    

    render() {
        return (<><Layout>
            <Navbar />

            <div className=" Stretch-fazul"></div>
            <div className={"stretch_ExContainer"}>

                <div className="Main-Context">
<p>your favorite workout</p>
                </div>

                <div className="Stretching-video">
                    <video src={videoBg} muted="true" autoPlay="true" controls="controls"/>
                    </div>
                <diV className="Sec-Context">Discover workouts that will fit your mood, goals, fitness level, music taste & schedule</diV>
                <div className="Gendercard">
                <div className=" card_Container1 ">

                    <div className='malercard'>
                        
                        <Card sx={{ maxWidth: 450 }}>
                        <div>
                
                <video src={stre1} muted="true" autoPlay="true" controls="controls"/>
                </div>
                    
                        </Card>
                    </div>
                    <div className="stre-text">
                        <p>Sit on the floor or a mat and bring your feet together so that your soles touch and your knees bend to opposite sides. With a straight spine, grasp your feet, then lean slowly forward and gently push your thighs down with your elbows until you feel the stretch along your inner thighs. Hold for 15 to 30 seconds.</p>
                    </div>
                    </div>
                    <div>
                        <div className="card_Container2 ">
                        <div className="stre-text">
                        <p>Sit on the floor or a mat and bring your feet together so that your soles touch and your knees bend to opposite sides. With a straight spine, grasp your feet, then lean slowly forward and gently push your thighs down with your elbows until you feel the stretch along your inner thighs. Hold for 15 to 30 seconds.</p>
                    </div>
                        <div className='Femalercard'>
                            <Card sx={{ maxWidth: 450 }}>
                                <div>
                
                                    <video src={stre2} muted="true" autoPlay="true" controls="controls"/>
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
export default Stretching;