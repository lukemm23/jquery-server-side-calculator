
let dataArray = [
    {data1: '1', 
    data2: '2', 
    dataOperator: 'add'},
]

function addData(newData) {
    dataArray.push(newData);
}



module.exports = {
    data: dataArray,
    addData: addData,
};

