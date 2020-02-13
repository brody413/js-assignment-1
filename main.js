// JavaScript document
// Brody McColeman #200445630

// Adding items to my list with checkboxes
document.getElementById("add").onclick = function() {
// Li Creation and getting value from textbox
  var li = document.createElement("Li"); // creates the <li> element
  var text = document.getElementById("item").value; // gets the value from the text box

// check box creation
  var checkbox = document.createElement("input"); // creates the imput element
  checkbox.type = "checkbox"; // makes the checkbox imput be checkboxes



  var textnode=document.createTextNode(text); // text node that only holds a string value

  // outputting the checkbox with each list item beside it
    li.appendChild(checkbox); // gives my li element a checkbox
    li.appendChild(textnode); // sets my li element to be have my textnode info
    document.getElementById("list").appendChild(li); // uses append child to add the item to the list

}




// Supposed to add everything from ul into an array and then get a specified item from user then removes it from array thus removing it from the list
// does not work
document.getElementById("remove").onClick = function (){
  var listArray = document.getElementsByTagName("ul");
  var itemsToRemove = document.getElementById("itemToRemove").value;
  var myList = document.getElementById("itemsToRemove");
 listArray[myList].parentNode.removeChild(listArray[myList]);
}
