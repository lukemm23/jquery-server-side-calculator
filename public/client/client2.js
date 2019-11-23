$(document).ready(init);

const dataObj = [];

let data1= $('.js-data-1').val();
let data2= $('.js-data-2').val();
let dataOperator;

function init() {
    console.log('JQ!');
    $('.plus').on('click', onClickAdd);
    $('.minus').on('click', onClickMinus);
    $('.multiply').on('click', onClickMultiply);
    $('.divide').on('click', onClickDivide);
    // $('.calculate').on('click', onClickCalculate);
}

function onClickAdd() {
    //test
    console.log('clicked add');
    //add data1 into array
    dataObj.push(data1);
    //turn plus sign into string word
    dataObj.push('add');
    //display
    $('.js-display').empty();
    $('.js-display').append(`
        <span>${data1}</span>
        <span>${dataOperator}</span>
        `);
    console.log(dataObj);

}
console.log(dataObj);

function onClickMinus() {
    console.log('clicked minus');
}

function onClickMultiply() {
    console.log('clicked multiply');
}

function onClickDivide() {
    console.log('clicked divide');
}