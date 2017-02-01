( function() {
	var name = prompt("Cual es tu nombre peleador?");
	var mainTitle = document.getElementById('main_title');
	mainTitle.innerHTML = "<h1>Bienvenido al torneo de Artes Marciales</h1>";
	document.getElementById('notification_popup').innerHTML = name + " se ha inscrito al torneo ";
	alert("Las inscripciones terminaron, Observa los contendientes.");	
})();

	

	