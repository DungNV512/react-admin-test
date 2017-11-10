import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend , Tooltip} from 'recharts';
import _ from 'lodash';
//const {PieChart, Pie, Legend, Tooltip} = Recharts;

class Gender extends React.Component {
   /* ageItems = this.props.ages.map((age, index) => {
        console.log(age["18-24"]);

        return <li key={index}></li>
    });*/

    render() {
        var body = this.props.gender;
        var convertedData = body.map((obj,i)=>{
            return {
                "Số người": _.values(obj)[0],
                "name": _.findKey(obj),
            }
        });
        //console.log(this.props.gender);
       /*  const data01 = [
            {name: 'Male', "Số người": 584978}, 
            {name: 'Female', "Số người": 211188},
        ] */

        return (
            <BarChart width={300} height={300} data={convertedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey={"name"} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey={"Số người"} fill="#82ca9d" />
            </BarChart>
        );
    }
}

export default Gender;




