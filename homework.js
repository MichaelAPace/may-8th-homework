//logAll([1,2,3,4,5]);
// => 1 2 3 4 5
```

for (var counter = 1; counter <= 6; counter++) {
    console.log(counter);
}

...
//sum([1,2,3]);
// => 6


var sum = function(arr) {
var i        = 0,
     result = 0;
while(i < arr. length){
     result = result + arr[i];
     i++;
}
return result;
};

var myTotal = sum([1,2,3]);
console.log(myTotal);

...
//subtract([10,10,10]);
// => -30


var subtract = function(arr) {
var i        = 0,
     result = 0;
while(i < arr. length){
     result = result - arr[i];
     i++;
}
return result;
};

var myTotal = subtract([10,10,10]);
console.log(myTotal);

...
//largest([1,9,7]);
// => 9

var largest = function (arr){
  var i = 0;
  var result = arr[0];
while (i < arr.length){
  if (arr[i]>result){
    result = arr[i];
  }
  i++;
}
  return result;
};

var theLargest = largest([1,9,7]);
console.log(theLargest);


//smallest([20,19,40]);
// => 19


...
var smallest = function (arr){
  var i = 0;
  var result = arr[0];
while (i < arr.length){
  if (arr[i]<result){
    result = arr[i];
  }
  i++;
}
  return result;
};

var theSmallest = smallest([20,19,40]);
console.log(theSmallest);

...
//average([10,20,30]);
// => 20


var Average = function(arr) {
     var i  = 0;
     var result = 0;
while(i < arr.length){
     result = result + arr[i];
     i++;
}
return result/ arr.length;
};

var myAverage = average([10,20,30]);
console.log(myAverage);
