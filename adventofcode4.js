//Day 4: Part 1
function validPassphrase(str){
  count = 0;
  arr = str.split("\n");
  for(each in arr){
    var arrRow = arr[each].split(" ");
    var countInvalid = arrRow.reduce(function(accum,value,index){if(arrRow.indexOf(value) !== index){accum += 1;}return accum;},0);
    if(countInvalid == 0){
      count += 1;
    }
  }
  return count;
}
//Day 4: Part 2
function validPassphrase(str){
  count = 0;
  arr = str.split("\n");
  for(each in arr){
    var arrRow = arr[each].split(" ");
    var arrSort = arrRow.map(function(value){return value.split("").sort().join("");});
    var countInvalid = arrSort.reduce(function(accum,value,index){if(arrSort.indexOf(value) !== index){accum += 1;}return accum;},0);
    if(countInvalid == 0){
      count += 1;
    }
  }
  return count;
}
