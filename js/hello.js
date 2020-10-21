/*send customized message based on time of day
*/

console.log("I am using javascript!");

//get the date and time

var today = new Date();
var hoursNow = today.getHours();

//display the greeting message
var greeting = "";
if(hoursNow <= 12){
  greeting = "Good Morning";
}else{
  greeting = "Good Afternoon";
}

//write to the document

document.write(greeting);

