
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var doc = document.getElementById('box');
var createdTime, clickedTime, reactionTime;

function makeBox() {
	var time = Math.random();
		time = time * 5000;

	setTimeout(function() {
		if (Math.random() > 0.5) {
			doc.style.borderRadius = '100px';
		} else {
			doc.borderRadius = '0px';
		}
		var top = Math.random();
			top = top * 400;
		var left = Math.random();
			left = left * 600;

		doc.style.top = top + 'px';
		doc.style.left = left + 'px';
		doc.style.backgroundColor = getRandomColor();
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
