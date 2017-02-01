(function(){
	var NUMBER_OF_FIGHTERS = 15;

	var me = new Fighter(name);
	var fighters = generateFighters(NUMBER_OF_FIGHTERS);
	
	fighters[0] = me;

	for(i = 0; i < NUMBER_OF_FIGHTERS; i++){
		displayFighter(fighters[i]);
	}

	function generateFighters(numberOfFighters){
		var fighters = new Array(numberOfFighters);

		for(i = 1; i < numberOfFighters; i++){
			var name = Fighter.selectRandomName();
			var fighter = new Fighter(name);
			fighters[i]=fighter;
		}

		return fighters;
	}


	function displayFighter(fighter){
		console.log(fighter.name);
		console.log(fighter.strength);
		console.log(fighter.speed);
		console.log(fighter.agility);
		console.log(" ");
	}
	
})();
