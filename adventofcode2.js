//Day 2: Part 1
function checkSum(str){
  var arr = str.split("\n");
  var sum = 0;
  for(each in arr){
    var strRow = arr[each].split(/\s+/);
    var arrRow = strRow.map(function(str){return Number(str);});
    sum += Math.max(...arrRow) - Math.min(...arrRow);
  }
  return sum;
}
//Day 2: Part 2
function checkSum(str){
  var arr = str.split("\n");
  var sum = 0;
  for(i=0;i<arr.length;i++){
    var strRow = arr[i].split(/\s+/);
    var arrRow = strRow.map(function(str){return Number(str);});
    for(j=0;j<arrRow.length;j++){
      var currValue = arrRow[j];
      var remArr = arrRow.slice(j+1,arrRow.length);
      for(each in remArr){
        if(remArr[each] % currValue === 0){
          sum += remArr[each]/currValue;
        }
        else if(currValue % remArr[each] === 0){
          sum += currValue/remArr[each];
        }
      }
    }
  }
  return sum;
}
