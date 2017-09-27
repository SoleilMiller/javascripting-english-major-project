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
