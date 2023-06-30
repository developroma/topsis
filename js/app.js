// Step 1

let ecologyCol = document.querySelectorAll('#rate_1');
let ecologyColSecond = document.querySelectorAll('#rate_2');
let ecologyColThird = document.querySelectorAll('#rate_3')
let ecologyColFourth = document.querySelectorAll('#rate_4')

let ecologyColNum;
let allEcologyColNum = 0;


let ecologyColFirstNum;

ecologyCol.forEach(item => {
    ecologyColNum = Number(item.textContent);
    allEcologyColNum += Math.pow(ecologyColNum, 2);

});

ecologyCol.forEach(item => {

    ecologyColFirstNum = item.textContent / Math.pow(allEcologyColNum, 0.5);
    console.log(ecologyColFirstNum)

});


console.log('///////////////////////')



let ecologyColNumSecond;
let allEcologyColNumSecond = 0;


let ecologyColFirstNumSecond;

ecologyColSecond.forEach(item => {
    ecologyColNumSecond = Number(item.textContent);
    allEcologyColNumSecond += Math.pow(ecologyColNum, 2);

});

ecologyColSecond.forEach(item => {

    ecologyColFirstNumSecond = item.textContent / Math.pow(allEcologyColNumSecond, 0.5);
    console.log(ecologyColFirstNumSecond)

});


console.log('///////////////////////')


let ecologyColNumThird;
let allEcologyColNumThird = 0;


let ecologyColFirstNumThird;

ecologyColThird.forEach(item => {
    ecologyColNumThird = Number(item.textContent);
    allEcologyColNumThird += Math.pow(ecologyColNum, 2);

});

ecologyColThird.forEach(item => {

    ecologyColFirstNumThird = item.textContent / Math.pow(allEcologyColNumThird, 0.5);
    console.log(ecologyColFirstNumThird)

});


console.log('///////////////////////')

let ecologyColNumFourth;
let allEcologyColNumFourth = 0;


let ecologyColFirstNumFourth;

ecologyColFourth.forEach(item => {
    ecologyColNumFourth = Number(item.textContent);
    allEcologyColNumFourth += Math.pow(ecologyColNumFourth, 2);

});

ecologyColSecond.forEach(item => {

    ecologyColFirstNumFourth = item.textContent / Math.pow(allEcologyColNumFourth, 0.5);
    console.log(ecologyColFirstNumFourth)

});


// Step 2







