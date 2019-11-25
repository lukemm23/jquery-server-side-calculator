$(document).ready(init);

let operator = null;
//init clicks and gethistory
function init() {
    console.log('JQ!');
    $('.plus').on('click', onClickAdd);
    $('.minus').on('click', onClickMinus);
    $('.multiply').on('click', onClickMultiply);
    $('.divide').on('click', onClickDivide);
    $('.calculate').on('click', onClickCalculate);
    $('.clear').on('click', clearInput);
    
    gethistory();
}

//setting operator sign event handling
function onClickAdd(){
    sign('add');
}

function onClickMinus(){
    sign('subtract');
}

function onClickMultiply(){
    sign('multiply');
}

function onClickDivide(){
    sign('divide');
}



function sign(x) {
    operator = x;
}

//event handling equal sign to take in values as one object
function onClickCalculate() {
    //prepare post package
    const sendObj = {
        data1: Number($('.js-data-1').val()),
        data2: Number($('.js-data-2').val()),
        dataOperator: operator,
    };
    console.log(sendObj);
    clearInput();
    postObj(sendObj);
}

//render answer
function renderAnswer(output) {
    const $output = $('.js-answer');

    $output.empty();
    $output.append(`
        ${output.result}
    `);
}

//clear input button
function clearInput() {
    $('.js-data-1').val('');
    $('.js-data-2').val('');
    operator = null;
}

function postObj(answer) {
    const data = answer;

    // post request
    $.ajax({
        method: 'POST',
        url: '/api/result',
        data: data,
    })
    .then(function(response) {
        //render answer
        renderAnswer(response);
        gethistory();
        console.log(response);
    })
    .catch(function(err) {
        console.log(err);
    });
}
// get request
function gethistory() {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:5000/api/history',
    })
    .then(function(response) {
        console.log('GET Response: ', response);
        //render history
        renderHistory(response);
    })
    .catch(function(err) {
        console.log('GET Error: ', err);
    });
}

//flipping string into operator signs
const operators = {
    add: '+',
    '+': 'add',
    subtract: '-',
    '-': 'subtract',
    multiply: '*',
    '*': 'multiply',
    divide: '/',
    '/': 'divide',
  }

//render history
function renderHistory(data) {
    //empty history
    $('.js-tracker').empty();
    // looping thru history array and displaying array objects
    for(let i = 0; i<data.length; i++) {
        $('.js-tracker').append(
            `
            <li>${data[i].data1}
             ${operators[data[i].dataOperator]}
             ${data[i].data2} = ${data[i].result}</li>

        `);
    }
}