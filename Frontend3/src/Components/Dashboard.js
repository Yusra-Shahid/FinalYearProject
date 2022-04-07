import React, { Component } from "react";
import "../Css/Dashboard.css";
import { Layout} from "antd";
import "react-slideshow-image/dist/styles.css";
import Slider from './slide';
import Navbar from './navbar';
import  Footer from './footer'; 

export class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <Navbar/>
        <Slider />
        <Footer/>
      </Layout>
    );
}
}
export default Dashboard;
