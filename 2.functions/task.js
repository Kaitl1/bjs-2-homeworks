function getArrayParams(...arr) {
    let a, avg
    let min = Infinity
    let max = -Infinity
    let sum = 0
    for (a=0;a<arr.length;a++) {
      if (arr[a] > max) {
        max = arr[a]
      }
      if (arr[a] < min) {
        min = arr[a]
      }
      sum += arr[a]
    }
    avg = Number((sum / arr.length).toFixed(2))
    return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
    if (!arr.length) {
        return 0;
    }else{
        return arr.reduce((a, b) => a + b, 0)
    }
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
      return 0;
  }else{
      let min = Infinity
      let max = -Infinity
      for (a=0; a<arr.length; a++) {
          if (arr[a] > max) {
              max = arr[a]
          }
          if (arr[a] < min) {
              min = arr[a]
          }
      }
      return max - min
  }
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
      return 0;
  }else{
    let sumEvenElement=0
    let sumOddElement=0
    for(a=0; a<arr.length; a++){
      if(arr[a]%2===0){
        sumEvenElement+=arr[a]
      }else{
        sumOddElement+=arr[a]
      }
    }
    return sumEvenElement-sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  if(!arr.length) {
      return 0;
  }else{
    let sumEvenElement=countEvenElement=0
    for(a=0; a<arr.length; a++){
      if(arr[a]%2===0){
        sumEvenElement+=arr[a]
        countEvenElement++;
      }
    }
    return sumEvenElement/countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity
  for (a=0; a<arrOfArr.length; a++){
    const par = func(arrOfArr[a])
    if(par > maxWorkerResult){
      maxWorkerResult = par
    }
  }
  return maxWorkerResult;
}
