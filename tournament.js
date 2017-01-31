function Fighter(name,strength,speed,agility){
	this.name = name;
	this.strength = strength;
	this.speed = speed;
	this.agility = agility;
}
document.write("<h1>Bienvenido al torneo de Artes Marciales</h1>");
var name = prompt("Cual es tu nombre peleador?");
document.write (name + " se ha inscrito al torneo ");