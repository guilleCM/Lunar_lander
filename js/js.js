var y = 5; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer;

window.onload = function(){
    document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
//Empezar a mover nave
	start();
}

function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=y.toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
		finalizarJuego();
	}
}

function finalizarJuego() {
	if (v>10) {
		document.getElementById("imgNave").src="img/nave_rota.gif";
		document.getElementById("gameOver").style.display="block";
	}
}

function encenderMotor() {
	document.getElementById("imgMotor").style.display="block";
}

function mostrarInstrucciones() {
	pausar();
	document.getElementById("menuInstrucciones").style.display="block";
}

function ocultarInstrucciones() {
	reanudar();
    document.getElementById("menuInstrucciones").style.display="none";
}

function reanudar() {
	start();
	document.getElementById("reanudar").style.display="none";
	document.getElementById("pausa").style.display="inline-block";
}
function pausar() {
	stop();
	document.getElementById("pausa").style.display="none";
	document.getElementById("reanudar").style.display="inline-block";
}

function reiniciarJuego() {
	window.location.reload();
}