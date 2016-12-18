var y = 5; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g; //a= -g es para motor encendido
var dt = 0.016683;
var timer;
var gasolina=100;
var intentos = 1;
var modeloNave=1;
var modeloLuna=1;
var timerFuel=null;

window.onload = function arrancarJuego(){
	//CAMBIAR LA IMAGEN DE LA LUNA
	document.getElementById("modeloLuna").onclick = function cambiarModeloLuna(){
		switch(modeloLuna) {
			case 1:
				document.getElementById("luna").src="img/mod2luna.png";
				document.getElementById("modeloLuna").innerHTML="Gris";
				modeloLuna=2;
				break;
			case 2:
				document.getElementById("luna").src="img/luna.png";
				document.getElementById("modeloLuna").innerHTML="Amarilla";
				modeloLuna=1;
				break;
			}
		}

	//CAMBIAR LA IMAGEN DE LA NAVE Y EL MOTOR
	document.getElementById("modeloNave").onclick = function cambiarModeloNave(){
		switch(modeloNave) {
			case 1:
				document.getElementById("imgNave").src="img/mod2nave.gif";
				document.getElementById("imgMotor").src="img/mod2motor.gif";
				document.getElementById("modeloNave").innerHTML="Modelo PodRacer";
				modeloNave=2;
				break;
			case 2:
				document.getElementById("imgNave").src="img/nave.png";
				document.getElementById("imgMotor").src="img/motor.gif";
				document.getElementById("modeloNave").innerHTML="Modelo Estándar";
				modeloNave=1;
				break;
			}
		}

	//Empezar a mover nave
	start();

	//ASIGNAR EVENTOS TOUCH SCREEN PARA LA VERSION SMARTPHONE
	var botonOnSmartphone = document.getElementById("botonOn");
	botonOnSmartphone.addEventListener("touchstart", handlerFunction, false);
	botonOnSmartphone.addEventListener("touchend", endingFunction, false);
	function handlerFunction(event) {
		encenderMotor();
	}
	function endingFunction(event) {
		apagarMotor();
	}
	
	//CON TECLADO (tecla ESPACIO)
	window.onkeydown=function(e) {
		var claveTecla;
		if (window.event)
			claveTecla = window.event.keyCode;
		else if (e)
			claveTecla = e.which;
		if ((claveTecla==32))
			{encenderMotor();
			}
	}
	window.onkeyup=apagarMotor;

}//TERMINA EL WINDOW.ONLOAD


//FUNCION EMPEZAR EL JUEGO
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

//FUNCION PARAR NAVE Y CONTROLADORES
function stop(){
	clearInterval(timer);
}

//FUNCION PARA QUE CAIGA LA NAVE A TRAVES DE LA PANTALLA
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

//HACER QUE LOS DIVS IZQUIERDA Y DERECHA NO RECIBAN EVENTOS ONCLICK
function eventosOff() {
	document.getElementById("izquierda").style.pointerEvents='none';
	document.getElementById("derecha").style.pointerEvents='none';
}
//HACER QUE LOS DIVS IZQUIERDA Y DERECHA SI RECIBAN EVENTOS ONCLICK
function eventosOn() {
	document.getElementById("izquierda").style.pointerEvents='auto';
	document.getElementById("derecha").style.pointerEvents='auto';
}


//FUNCION PARA ACABAR EL JUEGO
function finalizarJuego() {
	if (v>5) {
		switch (modeloNave) {
			case 1:
			eventosOff();
			document.getElementById("imgNave").src="img/nave_rota.gif";
			document.getElementById("gameOver").style.display="block";
			document.getElementById("intentos").innerHTML=intentos;
			break;
			case 2:
			eventosOff();
			document.getElementById("imgNave").src="img/mod2rota.gif";
			document.getElementById("gameOver").style.display="block";
			document.getElementById("intentos").innerHTML=intentos;
			break;
			}
		} else {
			document.getElementById("userWin").style.display="block";
			eventosOff();	
		}
}

//FUNCION QUE ACTUA EN CUANTO SE ENCIENDE EL MOTOR
function encenderMotor() {
	a=-g;
	document.getElementById("fuel").innerHTML=gasolina;
	document.getElementById("fuel").style.color="rgb("+0+(100-gasolina)+"%, 0%, 0%)";
	document.getElementById("imgMotor").style.display="block";
	if (timerFuel==null) { 
			timerFuel=setInterval(function(){ actualizarGasolina(); }, 100);
			}
	if (gasolina<=0) {
			apagarMotor();
			document.getElementById("fuel").innerHTML=0;
		}
}
//FUNCION QUE ACTUALIZA EL MARCADOR DE FUEL
function actualizarGasolina(){
	gasolina-=1;
	document.getElementById("fuel").innerHTML=gasolina;
	document.getElementById("fuel").style.color="rgb("+0+(100-gasolina)+"%, 0%, 0%)";
	if (gasolina<=0) {
		apagarMotor();
		document.getElementById("fuel").innerHTML=0;
	}
}
//FUNCION QUE RESPONDE AL MOMENTO DE APAGAR EL MOTOR DE LA NAVE
function apagarMotor() {
	a=g;
	document.getElementById("imgMotor").style.display="none";
	clearInterval(timerFuel);
	timerFuel=null;
}

function mostrarAjustes() {
	pausar();
	eventosOff();
	document.getElementById("settings").style.display="block";
}
function ocultarAjustes() {
	document.getElementById("settings").style.display="none";
	eventosOn();
}

function mostrarInstrucciones() {
	pausar();
	eventosOff();
	document.getElementById("menuInstrucciones").style.display="block";
}

function ocultarInstrucciones() {
    document.getElementById("menuInstrucciones").style.display="none";
    eventosOn();
}

//OJO COMPORTAMIENTO ESCRITORIO
function reiniciarJuego() {
	stop();
	document.getElementById("reanudar").style.display="none";
	document.getElementById("pausa").style.display="inline-block";
	intentos++;
	y = 5; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
	v = 0;
	g = 1.622;
	a = g;
	dt = 0.016683;
	gasolina=100;
	document.getElementById("fuel").style.color="black";
	reanudar();
	clearInterval(timer);
	start();
	eventosOn();
	document.getElementById("intentos").innerHTML=intentos;
	document.getElementById("gameOver").style.display="none";
	document.getElementById("userWin").style.display="none";
	document.getElementById("fuel").innerHTML=gasolina;
	if (modeloNave==1) {
		document.getElementById("imgNave").src="img/nave.png";
	} else {
		document.getElementById("imgNave").src="img/mod2nave.gif";
	}
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

//OJO COMPORTAMIENTO SMARTPHONE
function reanudarSmartphone() {
	start();
	document.getElementById("reanudaSmartphone").style.display="none";
	document.getElementById("pausaSmartphone").style.display="inline-block";
	document.getElementById("reiniciaSmartphone").style.display="none";
	document.getElementById("ayudaSmartphone").style.display="none";
	document.getElementById("botonAjustesSmartphone").style.display="none";
	document.getElementById('izquierda').style.display="inline-block";
	document.getElementById('nave').style.display="inline-block";
	document.getElementById('zonaAterrizaje').style.display="inline-block";
	document.getElementById('derecha').style.backgroundImage='url(img/sol.png)';
	document.getElementById('derecha').style.backgroundSize='60%';
	document.getElementById('derecha').style.backgroundRepeat='no-repeat';
	document.getElementById('derecha').style.width='35%';
}

function pausarSmartphone() {
	stop();
	document.getElementById("pausaSmartphone").style.display="none";
	document.getElementById("reanudaSmartphone").style.display="inline-block";
	document.getElementById("reiniciaSmartphone").style.display="inline-block";
	document.getElementById("ayudaSmartphone").style.display="inline-block";
	document.getElementById("botonAjustesSmartphone").style.display="inline-block";
	document.getElementById('izquierda').style.display="none";
	document.getElementById('nave').style.display="none";
	document.getElementById('zonaAterrizaje').style.display="none";
	document.getElementById('derecha').style.backgroundImage='url(img/fondo_menu.jpg)';
	document.getElementById('derecha').style.backgroundSize='auto';
	document.getElementById('derecha').style.backgroundRepeat='repeat';
	document.getElementById('derecha').style.width='100%'; 	
}

function reiniciarJuegoSmartphone() {
	stop();
	intentos++;
	y = 5; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
	v = 0;
	g = 1.622;
	a = g;
	dt = 0.016683;
	gasolina=100;
	document.getElementById("fuel").style.color="black";
	reanudarSmartphone();
	clearInterval(timer);
	start();
	eventosOn();
	document.getElementById("intentos").innerHTML=intentos;
	document.getElementById("gameOver").style.display="none";
	document.getElementById("userWin").style.display="none";
	document.getElementById("fuel").innerHTML=gasolina;
	if (modeloNave==1) {
		document.getElementById("imgNave").src="img/nave.png";
	} else {
		document.getElementById("imgNave").src="img/mod2nave.gif";
	}
}

function mostrarAjustesSmartphone() {
	pausarSmartphone();
	document.getElementById("settings").style.display="block";
}

function mostrarInstruccionesSmartphone() {
	pausarSmartphone();
	document.getElementById("menuInstrucciones").style.display="block";
}


