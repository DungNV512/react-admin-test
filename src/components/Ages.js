import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell } from 'recharts';
import _ from 'lodash';
//import { convertData } from './Utils.js';
/*const Ages = (props) => {
  var PieChart = require("react-chartjs").Pie;
  var ctx = document.getElementById("myChart");
  console.log(ctx);
  var myPieChart = new Chart(ctx,{
      type: 'pie',
      data: props.ages,
  });
  const ageItems = props.ages.map((age, index) => {
    console.log(age["18-24"]);
   
    return <AgeItem key={index} 
    				age={age}
    				/>
  });
  return (
    <div className="ages-list">
      <PieChart data={props.ages} width="600" height="250"/>
    </div>
  );
};

export default Ages;*/

class Ages extends React.Component {
  render() {
    /*const ages = this.props.ages;
    const data1 = [name,"Số người"];
    for (var i = 0; i < ages.length; i++) {
      data1.name.push(ages[i]);
    }*/
    var body = this.props.ages;
    const convertedData = body.map((obj,i)=>{
      return {
        "Số người": _.values(obj)[0],
        "name": _.findKey(obj),
      }
    });
    /*const data = [
      {name: '18-24', "Số người": 175345},
      {name: '25-34', "Số người": 319045},
      {name: '35-44', "Số người": 132749},
      {name: '45-54', "Số người": 92976},
      {name: '55-64', "Số người": 113516},
      {name: '65+', "Số người": 44310},
    ];
    var dataKey = ["name","Số người"];
    var convertedData = convertData(this.props.ages, dataKey);*/
    console.log(convertedData);
    const data = [{name: 'Group A', value: 1000}, {name: 'Group B', value: 200},
                  {name: 'Group C', value: 200}, {name: 'Group D', value: 100}];
    console.log(data);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042', '#FF8042'];
    /* const data = [{name: 'Group A', value: 1000}, {name: 'Group B', value: 200},
                  {name: 'Group C', value: 200}, {name: 'Group D', value: 100}];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180; 
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    }; */
    return (
      /* <BarChart width={600} height={300} data={convertedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey={"name"} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey={"Số người"} fill="#82ca9d" />
      </BarChart> */
      /* <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={300} 
          cy={200} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="#8884d8"
        >
        	{
          	convertedData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart> */
      <PieChart width={800} height={400}>
        <Pie labelLine isAnimationActive={true} data={convertedData} nameKey={"name"} valueKey={"Số người"} cx={200} cy={200} outerRadius={80} >
          {
          	convertedData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip/>
       </PieChart>
    );
  }
}

export default Ages;


