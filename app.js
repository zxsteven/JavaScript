
var doc = document.getElementById('box');
var createdTime, clickedTime, reactionTime;

function makeBox() {
	var time = Math.random();
		time = time * 5000;

	setTimeout(function() {
		doc.style.display = 'block';
		createdTime = Date.now();
	}, time);
}

doc.onclick = function() {
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime)/1000;
	document.getElementById('time').innerHTML = (reactionTime);

	this.style.display = 'none';
	makeBox();
}

makeBox();
