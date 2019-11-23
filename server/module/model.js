
let dataArray = [
    {firstNum: 'data1', 
    secondNum: 'data2', 
    operator: 'dataOperator'},
]

function addData(newData) {
    dataArray.push(newData);
}



module.exports = {
    data: dataArray,
    addData: addData,
};

