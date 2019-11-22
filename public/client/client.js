$(document).ready(init);

function init() {
    console.log('JQ');
    $('#js-btn-1').on('click', addClick1);
    $('#js-btn-2').on('click', addClick2);
    $('#js-btn-3').on('click', addClick3);
    $('#js-btn-4').on('click', addClick4);
    $('#js-btn-5').on('click', addClick5);
    $('#js-btn-6').on('click', addClick6);
    $('#js-btn-7').on('click', addClick7);
    $('#js-btn-8').on('click', addClick8);
    $('#js-btn-9').on('click', addClick9);
    $('#js-btn-0').on('click', addClick0);
    // $('#js-btn-plus').on('click', addClickPlus);
    // $('#js-btn-minus').on('click', addClickMinus);
    // $('#js-btn-multiply').on('click', addClickMultiply);
    // $('#js-btn-divide').on('click', addClickDivide);
    // $('#js-btn-dot').on('click', addClickDot);
    // $('#js-btn-equal').on('click', addClickEqual);
}

//collecting data array
const dataArray = [];

// display button clicks onto output interface
function addClick1() {
    //test for click
    console.log('btn 1 clicked');
    //adding data into array
    dataArray.push(1);
    //testing for array data
    console.log(dataArray);
    //displaying output
    $('#calculator-input').append('1');
}

function addClick2() {
    console.log('btn 2 clicked');
    //adding data into array
    dataArray.push(2);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('2');
}
function addClick3() {
    console.log('btn 3 clicked');
    //adding data into array
    dataArray.push(3);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('3');
}
function addClick4() {
    console.log('btn 4 clicked');
    //adding data into array
    dataArray.push(4);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('4');
}
function addClick5() {
    console.log('btn 5 clicked');
    //adding data into array
    dataArray.push(5);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('5');
}
function addClick6() {
    console.log('btn 6 clicked');
    //adding data into array
    dataArray.push(6);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('6');
}
function addClick7() {
    console.log('btn 7 clicked');
    //adding data into array
    dataArray.push(7);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('7');
}
function addClick8() {
    console.log('btn 8 clicked');
    //adding data into array
    dataArray.push(8);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('8');
}
function addClick9() {
    console.log('btn 9 clicked');
    //adding data into array
    dataArray.push(9);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('9');
}
function addClick0() {
    console.log('btn 0 clicked');
    //adding data into array
    dataArray.push(0);
    //testing for array data
    console.log(dataArray);
    $('#calculator-input').append('0');
}