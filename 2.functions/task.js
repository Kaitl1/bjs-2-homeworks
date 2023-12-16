function getArrayParams(...arr) {
  if (arr.length) {
    let min = max = arr[0]
    let avg
    let sum = 0
    for (a in arr) {
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
}

function summElementsWorker(...arr) {
  if (arr.length) {
    let initialValue = 0
    return arr.reduce((a, b) => a + b, initialValue)
  } else {
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length) {
    let min = max = arr[0]
    for (a in arr) {
      if (arr[a] > max) {
        max = arr[a]
      }
      if (arr[a] < min) {
        min = arr[a]
      }
    }
    return max - min
  }else {
    return 0
  }
}

function differenceEvenOddWorker(arr) {
  if (arr.length){
    let sumEvenElement=0
    let sumOddElement=0
    for(a in arr){
      if(arr[a]%2===0){
        sumEvenElement+=arr[a]
      }else{
        sumOddElement+=arr[a]
      }
    }
    return sumEvenElement-sumOddElement;
  }else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  if(arr.length){
    let sumEvenElement=countEvenElement=0
    for(a in arr){
      if(arr[a]%2===0){
        sumEvenElement+=arr[a]
        countEvenElement++;
      }
    }
    return sumEvenElement/countEvenElement
  }else{
    return 0;
  }

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0]
  for (a in arrOfArr){
    const par = func(arrOfArr[a])
    if(par > maxWorkerResult){
      maxWorkerResult = par
    }
  }
  return maxWorkerResult;
}
