
var hour = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;


let interval = null;
let status = false;

function stopWatch(){
	miliseconds++;
	if(miliseconds / 100 === 1){
		seconds++;
		miliseconds = 0;
		if(seconds / 60 === 1){
			seconds = 0;
			minutes++;
			if(minutes / 60 ===1){
				minutes = 0;
				hour++;
				if(hour / 24 === 1){
					hours = 0; 
				}
			} 
		}
	}

	if(miliseconds < 10){
		Dmiliseconds = "0" + miliseconds.toString();
	} else {
		Dmiliseconds = miliseconds
	}

	if(seconds < 10){
		Dseconds = "0" + seconds.toString();
	} else {
		Dseconds = seconds;
	}

	if(minutes < 10){
		Dminutes = "0" + minutes.toString();
	} else {
		Dminutes = minutes;
	}

	if(hour < 10){
		Dhour = "0" + hour.toString();
	} else {
		Dhour = hour;
	}

	document.getElementById("counter").innerHTML = (Dhour + ": " + Dminutes +  ": " + Dseconds + ": " + Dmiliseconds);
}

function start(){
	document.getElementById("start").onclick && status === true ;
	interval = setInterval(stopWatch, 10);
}

function stop(){
	document.getElementById("stop").onclick && status === false ;
	clearInterval(interval);
}

function reset(){
	clearInterval(interval);
	 hour = 0;
	 minutes = 0;
	 seconds = 0;
	 miliseconds = 0;
	document.getElementById("counter").innerHTML = ("00:00:00:00");
}