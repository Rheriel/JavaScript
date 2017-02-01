function Fighter (name) {

	var namePool = new Array("Goku","Vegetta","Gohan","Saitama","Seiya","Shun","Hyoga","Shyru","Ikki","Naruto","Sasuke","Ash","Gary","Bob Esponja","Patricio","Calamardo","Mr Cangrejo","Spiderman","Batman","Superman","Wolverine","Cyclops","Thor","Hulk","Ironman","Yoda","Luke");
	
	this.name = name;
	this.strength;
	this.speed;
	this.agility;
	
	this.generateSkillValue = function(){
		var skillVal = Math.round(Math.random() * 100);
		return skillVal;
	};

	Fighter.selectRandomName = function(){
		
		var poolSize = namePool.length;
		var choosen = Math.round(Math.random()* (poolSize-1));

		return namePool[choosen];
	};

	this.init = function(){
		this.strength = this.generateSkillValue();
		this.speed = this.generateSkillValue();
		this.agility = this.generateSkillValue();
	};

	this.init();
}
