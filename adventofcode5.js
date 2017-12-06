//Day 5: Part 1
function mazeEscape(str){
  var arr = str.split("\n").map(function(value){return Number(value)});
  var index = 0;
  var count = 0;
  while(index < arr.length){
    var prevIndex = index;
    count += 1;
    index = arr[index] + index;
    arr[prevIndex] += 1;
  }
  return count;
}
//Day 5: Part 2
function mazeEscape(str){
  var arr = str.split("\n").map(function(value){return Number(value)});
  var index = 0;
  var count = 0;
  while(index < arr.length){
    var prevIndex = index;
    count += 1;
    index = arr[index] + index;
    if(arr[prevIndex] >= 3){
      arr[prevIndex] -= 1;
    }
    else {
      arr[prevIndex] += 1;
    }
  }
  return count;
}
