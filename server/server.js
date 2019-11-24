const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const model = require('./module/model');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/result', (req, res) => {
    console.log(req.body.data1, req.body.data2);
    const data1 = parseFloat(req.body.data1);
    const data2 = parseFloat(req.body.data2);
    const dataOperator = req.body.dataOperator;
    let result;
    
    console.log(data1, data2, dataOperator);
    if( dataOperator == 'add' ) {
       result =  data1 + data2;
       res.send({result:result});
       console.log(result);
    }else if ( dataOperator == 'subtract' ) {
        result = data1 - data2;
        res.send({result:result});
        console.log(result);
    }else if ( dataOperator == 'multiply' ) {
        result = data1 * data2;
        res.send({result:result});
        console.log(result);
    }else if ( dataOperator == 'divide' ) {
        result = data1 / data2;
        res.send({result:result});
        console.log(result);
    }
    const newData = {data1, data2, dataOperator, result};
    model.addData(newData);
    console.log('logging data:',model.data);
    return;
});

app.get('/api/history', (req, res) => {
       console.log('GET request for data.');
       res.send(model.data);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});