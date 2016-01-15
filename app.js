var newText = document.getElementById('input').value;

document.getElementById('button').onclick = function() {
	newText = document.getElementById('input').value;
	document.getElementById('firstDiv').innerHTML = newText;
}