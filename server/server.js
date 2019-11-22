const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const model = require('/module/model');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/result', (req, res) => {
    const data1 = parseFloat(req.body.data1);
    const data2 = parseFloat(req.body.data2);
    const dataOperator = req.body.dataOperator;
    if( dataOperator == 'add' ) {
       let result =  data1 + data2;
       return result; 
    }else if ( dataOperator == 'subtract' ) {
        let result = data1 - data2;
        return result;
    }else if ( dataOperator == 'multiply' ) {
        let result = data1 * data2;
        return result;
    }else if ( dataOperator == 'divide' ) {
        let result = data1 / data2;
        return result;
    }
    res.send({result: result});
    
});