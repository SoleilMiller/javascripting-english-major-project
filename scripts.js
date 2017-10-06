let input;
// asks for a number
input = prompt("Please enter a number");
// prints all the numbers from 1 to it.

$("#response").html("");

for (let i=1 ; i<= input; i = i + 1){
  if (i % 2 === 0){
      $("#response").append(i + " is even.<br>");
  } else {
    $("#response").append(i + " is odd.<br>");
  }
}
let tipCalculator;
tipCalculator = function(total, tipRate){
  // step 1:
  let tipAmount;
  tipAmount = tipRate * total;
  // and step 2:
  $("#response").html("Your tip is $" + tipAmount);
}

// Now call (or “execute”) the function, passing a
// total of $50.00 and a tipRate of 20%:

tipCalculator(50.00, 0.2);

let lastItemReturner = function(someArray){
  let length, lastIndexNo, lastItem;
  // 1. get the length of someArray
  length = someArray.length;
  // 2. subtract 1 from it
  lastIndexNo = someArray.length - 1;
  // 3. feed that new number to someArray as an index
  lastItem = someArray[lastIndexNo];
  // 4. print the value of that index in someArray to #reponse
  $("#response").html(lastItem);
  // everything in one step:
  // $("#response").html(someArray[someArray.length - 1]);
};
