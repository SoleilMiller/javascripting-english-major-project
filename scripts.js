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
