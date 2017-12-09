//Day 6: Part 1
function repeatOffenders(str){
  var arr = str.split(/\s+/).map(function(value){return Number(value);});
  var length = arr.length;
  var arrRepeat = [];
  var current = "";
  var count = 0;
  while(arrRepeat.indexOf(current) === -1){
    arrRepeat.push(arr.join(","));
    var maxIndex = arr.reduce(function(accum,value,index){if(value > arr[accum]){accum = index;}return accum;},0);
    var maxValue = arr[maxIndex];
    var newMaxValue = maxValue % (length - 1);
    var index = maxIndex;
    while(maxValue >= 0){
      if(index !== maxIndex){
        arr[index] += 1;
        arr[maxIndex] -= 1;
      }
      index = (index + 1) % arr.length;
      maxValue -= 1;
    }
    current = arr.join(",");
    count += 1;
  }
  return count;
}
//Day 6: Part 2
function repeatOffenders(str){
  var arr = str.split(/\s+/).map(function(value){return Number(value);});
  var length = arr.length;
  var arrRepeat = [];
  var current = "";
  var count = 0;
  while(arrRepeat.indexOf(current) === -1){
    arrRepeat.push(arr.join(","));
    var maxIndex = arr.reduce(function(accum,value,index){if(value > arr[accum]){accum = index;}return accum;},0);
    var maxValue = arr[maxIndex];
    var newMaxValue = maxValue % (length - 1);
    var index = maxIndex;
    while(maxValue >= 0){
      if(index !== maxIndex){
        arr[index] += 1;
        arr[maxIndex] -= 1;
      }
      index = (index + 1) % arr.length;
      maxValue -= 1;
    }
    current = arr.join(",");
    count += 1;
  }
  return arrRepeat.length - arrRepeat.indexOf(current);
}
