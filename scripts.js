.map {
  /* Leaflet *requires* a height to be explictly set for the map object. */
  height: 300px;
}

@import url("https://fonts.googleapis.com/css?family=EB+Garamond");

body {
  font-family: "EB Garamond", serif;
}

.leaflet-container {
  font-family: "EB Garamond", serif;
}

<<<<<<< HEAD
body, .leaflet-popup-content-wrapper, .leaflet-popup-tip {
  background-color: #fdf6e3;
}
=======
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
>>>>>>> ea6ed7daea8439426740a71676d4c4a5dce65181
