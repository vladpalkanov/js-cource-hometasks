var arr = [10,5,4,3,2,1,16,150];


function sort(curr){
  var curr;
  var minV = arr[curr];
for (j = curr + 1; j <= arr.length - 1; j++) {
  if (arr[j] < minV) {
    minV = arr[j];
    var swap = arr[curr];
    arr[curr] = minV;
    arr[j] = swap;
  }}
return arr;
}

function quickSort() {
  for (var i = 0; i <= arr.length - 1;i++) {
    sort(i);
  }
  return arr;

}
quickSort();
console.log(arr);