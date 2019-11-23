$(document).ready(init);

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
    return true;
}

function onClickMinus(){
    return true;
}

function onClickMultiply(){
    return true;
}

function onClickDivide(){
    return true;
}

function sign() {
    if(onClickAdd){
        return "add";
    }else if (onClickMinus){
        return "subtract";
    }else if (onClickMultiply){
        return "multiply";
    }else if (onClickDivide){
        return "divide";
    }
}

function onClickCalculate() {
    //prepare post package
    const sendObj = {
        data1: Number($('.js-data-1').val()),
        data2: Number($('.js-data-2').val()),
        dataOperator: sign(),
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
}

function postObj(answer) {
    const data = {
        answer: answer,
    };
    console.log(data);

    $.ajax({
        method: 'POST',
        url: '/api/result',
        data: data,
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        console.log(err);
    });
}