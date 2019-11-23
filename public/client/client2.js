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

function renderAnswer(output) {
    const $output = $('.js-answer');

    $output.empty();
    $output.append(`
        ${output.result}
    `);
}

function clearInput() {
    $('.js-data-1').val('');
    $('.js-data-2').val('');
    operator = null;
}

function postObj(answer) {
    const data = answer;
    console.log(data);

    $.ajax({
        method: 'POST',
        url: '/api/result',
        data: data,
    })
    .then(function(response) {
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
        renderHistory(response);
    })
    .catch(function(err) {
        console.log('GET Error: ', err);
    });
}

//render history
function renderHistory(data) {
    $('.js-tracker').append(`
        <li>${data.data1}${data.dataOperator}${data.data2}=</li>
    `);
}