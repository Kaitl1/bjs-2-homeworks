"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c
  if(d == 0){
    arr.push(-1*b/(2*a))
  }else if (d>0){
    arr.push((-1 * b + Math.sqrt(d))/(2*a))
    arr.push((-1 * b - Math.sqrt(d))/(2*a))
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent=(percent/100)/12
  let bodyCredit = amount - contribution
  let pay = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)))
  let allPay = pay * countMonths
  let payPay = Number (allPay.toFixed(2))
  return payPay;
}