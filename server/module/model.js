
let dataArray = [
    {data1: '1', 
    data2: '1', 
    dataOperator: 'add',
    result: '2'},
]

function addData(newData) {
    dataArray.push(newData);
}



module.exports = {
    data: dataArray,
    addData: addData,
};

