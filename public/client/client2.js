$(document).ready(init);

let operator = null;

function init() {
    console.log('JQ!');
    $('.plus').on('click', onClickAdd);
    $('.minus').on('click', onClickMinus);
    $('.multiply').on('click', onClickMultiply);
    $('.divide').on('click', onClickDivide);
    $('.calculate').on('click', onClickCalculate);

    // getAnswer();
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

// function render(output) {
//     const $output = $('.js-answer');

//     $output.empty();
//     $output.append(`
//         ${output.answer}
//     `);
// }

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
        url: 'http://localhost:5000/api/result',
        data: data,
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        console.log(err);
    });
}