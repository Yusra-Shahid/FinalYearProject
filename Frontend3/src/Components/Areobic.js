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
 import videoBg from "../Images/videoBg.mp4";


 
    const Videosrc = videoBg;

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
                                height="180"
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
                        <div className='Femalercard'>
                            <Card sx={{ maxWidth: 300 }}>
                                <div>
                                    {/* // component="img"
                                    // alt="green iguana"
                                    // height="180"
                                    // image="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFuJTIwd29ya291dHxlbnwwfHwwfHw%3D&w=1000&q=80" */}
                                    <video src={videoBg} muted="true" autoPlay="true" controls="controls"/>
                                    </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Female Exersice
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary"> across all continents except Antarctica
                                    </Typography>
                                </CardContent>

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