//Day 1: Part 1
function sumCaptcha(captcha){
  var sum = 0;
  var arr = captcha.split("");
  for(i=0;i<arr.length;i++){
    if(i===arr.length - 1 && arr[0] === arr[i]){
      sum += Number(arr[0]);
    }
    else if(arr[i] === arr[i+1]){
      sum += Number(arr[i]);
    }
  }
  return sum;
}

//Day 1: Part 2
function sumCaptcha(captcha){
  var sum = 0;
  var arr = captcha.split("");
  var step = arr.length/2;
  for(i=0;i<arr.length;i++){
    var steppedIndex = i + step;
    if(steppedIndex > arr.length - 1){
      var newIndex = steppedIndex - arr.length;
    }
    else{
      var newIndex = steppedIndex;
    }
    if(arr[i] === arr[newIndex]){
      sum += Number(arr[i]);
    }
  }
  return sum;
}
