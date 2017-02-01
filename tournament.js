

document.write("<h1>Bienvenido al torneo de Artes Marciales</h1>");
var name = prompt("Cual es tu nombre peleador?");
document.writeln (name + " se ha inscrito al torneo ");

alert("Las inscripciones terminaron, Observa los contendientes");
var me = new Fighter(name);
var fighters = generateFighters(15);
displayFighter(me);
for(i=0;i<15; i++){
	displayFighter(fighters[i]);
}




function Fighter(name){
	this.name = name;
	this.strength = generateSkills();
	this.speed = generateSkills();
	this.agility = generateSkills();
}

function generateFighters(numberOfFighters){
	var fighters = new Array(15);
	for(i=0;i<numberOfFighters;i++){
		var name = selectName();
		var strength = generateSkills;
		var speed = generateSkills;
		var agility = generateSkills;
		var fighter = new Fighter(name);
		fighters[i]=fighter;
		}
		return fighters;
	}

function generateSkills(){
	var skill = Math.random() * 100;
	skill = Math.round(skill);
	return skill;
}

function selectName(){
		var namepool = new Array("Goku","Vegetta","Gohan","Saitama","Seiya","Shun","Hyoga","Shyru","Ikki","Naruto","Sasuke","Ash","Gary","Bob Esponja","Patricio","Calamardo","Mr Cangrejo","Spiderman","Batman","Superman","Wolverine","Cyclops","Thor","Hulk","Ironman","Yoda","Luke");
		var pool = namepool.length;
		var choosen = Math.random()* (pool-1);
		choosen = Math.round(choosen);
		return namepool[choosen];
}

function displayFighter(fighter){
	document.writeln(fighter.name);
	document.writeln(fighter.strength);
	document.writeln(fighter.speed);
	document.writeln(fighter.agility);
	document.writeln("");
}