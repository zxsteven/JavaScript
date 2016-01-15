var myArray=new Array();

 myArray[0]="pizza";
 myArray[1]="chocolate";

 myOtherArray=["rain","sunshine"];

 myOtherArray.push("snow");

 myOtherArray.splice(2, 0, "hail", "cloudy");

 console.log(myOtherArray.length);

document.getElementById('button').onclick = function() {
	document.getElementById('firstDiv').innerHTML = newText;
}