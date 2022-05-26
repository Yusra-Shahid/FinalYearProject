import React, { Component } from "react";
import Chart from "react-apexcharts";

class Grapy extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
         
        },
        xaxis: {
       
            categories: ["Orthopaedics","Gynaecology and Obstetrics", "Chest and Vascular", "Dermatology", "Psychiatry"]
        }
        // xaxis: {
        //   labels: {
        //     formatter: function (value, timestamp) {
        //       return new Date(timestamp) // The formatter function overrides format property
        //     }, 
        //   }
        // }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50,67]
        }
      ]
    };
  }


  // useEffect(() => { 


  //   axios.get(`http://localhost:5000/user/getdoctors`)
  //   .then((Response) => {
  //       setdocdoctors(Response.data)
  //       console.log(Response.data);
  //       // if (Response.data.length === 0) {
  //       //     alert("No doctor avaliable please visit later");
  //       //     history.push("/");
  //       // }
  //   })
  //   .catch((error) => {
  //       console.log(error)
  //   })


  //   }, []);


  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="650"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Grapy;

