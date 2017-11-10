import _ from 'lodash';

export function convertData(data, dataKey){
    var convertedData = _.invert({...dataKey});
    console.log(convertedData);
    console.log(data);
    data.map((obj,i)=>{
      return {
        name: _.findKey(obj),
        dataKey: _.values(obj)[0]}
      }
    );
}
