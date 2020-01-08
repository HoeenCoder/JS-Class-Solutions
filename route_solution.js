/*
 * Pokemon Route Simulation
 * 
 * The goal of this assignment is to simulate a player walking through tall grass/a cave/surfing on water
 * in a location in a pokemon game. This assignment is focused on Objects, Methods (Functions stored in an Object), and Arrays.
 * 
 * Requirements [READ CAREFULLY]:
 * You must have an object to contain information about the route/location that contains the following:
 * - A name property that holds the location's name.
 * - A property called grass OR cave OR water that contains an object.
 * - - This object should have pokemon names as properties (the pokemon that can appear in this type of encounter)
 * - - The property's values should be an array with the 0th index being the min level the pokemon species can
 * - - appear at, and the 1st index being the max level the pokemon species can appear at.
 * - - - All encounters should have a range of AT LEAST 3 levels inclusive (ex: 3-5, 18-20, 98-100).
 * - A method (function) that should be run each time the simulated player takes a step.
 * - - This method should take an argument which has the type of encounter the player would get if they get a pokemon ('grass', 'cave' or 'water').
 * - - A percent of the time of your choosing, an encounter should occur. If one is going to occur, call the method that handles running encounters (see below).
 * - Another method (function) that should be called when the method that is run when the player takes a step determines a pokemon appeared
 * - - This method should take an argument which has the type of encounter the player is about to experience ('grass', 'cave' or 'water').
 * - - This method should randomly determine which pokemon appears, and at what level.
 * - - Log what pokemon appeared, at what level, and the encounter type to the console.
 * - - After logging the above, try to catch the pokemon with a single pokeball throw. Use a new method for this (see below).
 * - - If the pokeball throwing method returns true, log that the pokemon was caught.
 * - - If not log that the pokemon broke out and fled.
 * - A third method called when a pokeball is thrown.
 * - - This method takes no arguments, and returns true if the pokemon is caught and false if not.
 * - - Simply return true a percent of the time of your choosing.
 * 
 * The simulated player should take 500 steps though the route, each of which can spawn a pokemon.
 * You should keep track of how many pokemon the player encountered, and how many they caught.
 * At the start of the script, log that the player is entering the location (use the name property when logging this).
 * At the end log that the player left the location (use the name property when logging this),
 * and then log how many pokemon were enountered, and how many were caught.
 * 
 * BONUS 1: For 50 steps, have the encounter type change from whatever one type to another.
 * - ex: steps 1-250: grass, steps 250-299: water, steps 300-500: grass.
 * - The encounter types and levels should change as a result of this
 * BONUS 2: Make it possible to encounter shiny pokemon, and record how many were encountered/caught.
 * - The base shiny rate in gen 7 is 1/8092, feel free to use the shiny charm rate of 1/4096 if you want.
 * - At the end of the script, also log how many shiny pokemon were encountered & caught.
 * 
 * USEFUL NEW(ISH) TOOLS:
 * - Math.round(NUMBER) - Rounds NUMBER to the nearest integer using normal rounding rules (0-4 down, 5-9 up).
 * - Math.floor(NUMBER) - Rounds NUMBER down to the nearest integer (ex: 4.99999 will become 4).
 * - Math.ceil(NUMBER)  - Rounds NUMBER up to the nearest integer (ex: 4.0000001 will become 5).
 * - Math.random() - Returns a number between 0 and 1 (almost always not an integer) including 0 but not including 1.
 * - If you put \n in a string, it acts like a line break, allowing you to space out content as you log to the console.
 * 
 * HINTS:
 * - DRY (Don't repeat yourself)
 * - Take your time and plan what you need to do, then turn it into code, then write the code. After that test, debug, and improve your code.
 * - You will need to make use of the tools above to calculate levels and other things for this (along with math).
 * - Arrays are Zero-Indexed, meaning that in ['hello', 'world'], 'hello' is located at index 0 and 'world' is at index 1.
 * 
 * If you have any questions, don't hesitate to ask me for help.
 */
'use strict';

const route = {
	name: "Route 102",
	grass: {
		poochyena: [2, 4],
		zigzagoon: [2, 4],
		wurmple: [2, 4],
		lotad: [2, 4],
		seedot: [2, 4],
		ralts: [3, 5],
		surskit: [3, 5],
	},
	water: {
		marill: [15, 18],
		azumarill: [20, 25],
		surskit: [20, 23],
		masquerain: [25, 27],
	},
	tryEncounter(type = 'grass') {
		// 10% chance to encounter a pokemon
		if (Math.floor(Math.random() * 100) <= 9) return this.runEncounter(type);
	},
	runEncounter(type = 'grass') {
		if ((type !== 'grass' && type !== 'cave' && type !== 'water') || !this[type]) return console.log(`ERROR: Invalid encounter type: "${type}".`);
		encountered++;
		let encounters = Object.keys(this[type]);
		let species = encounters[Math.floor(Math.random() * encounters.length)];
		// Math.round(Math.random() * (max - min)) + min;
		let level = Math.round(Math.random() * (this[type][species][1] - this[type][species][0])) + this[type][species][0];
		let shiny = Math.ceil(Math.random() * 4096) === 272; // true or false, doubled shiny rate
		console.log(`\nA wild ${shiny ? 'SHINY ' : ''}level ${level} ${species} appeared in the ${type}!`);
		if (shiny) shinyAppeared++;
		console.log(`Threw a pokeball!`);
		let caught = this.tryCatch();
		if (caught) {
			console.log(`Gotcha! ${species} was caught!`);
			console.log(`${species} was sent to the PC box.`);
			catchCount++;
			if (shiny) shinyCaught++;
		} else {
			console.log(`The wild ${species} broke out and fled...`);
		}
	},
	tryCatch() {
		// 50% rate on everything for simplicity
		return !!Math.round(Math.random());
	},
};

// START
let encountered = 0;
let catchCount = 0;
let shinyAppeared = 0;
let shinyCaught = 0;

console.log(`Entered ${route.name}`);
// Take 500 steps
for (let i = 1; i <= 500; i++) {
	let type = 'grass';
	if (i >= 250 && i < 300) type = 'water';
	route.tryEncounter(type);
}

// RESULTS
console.log(`\nArrived at the end of ${route.name}.\n`);
console.log(`Encounted a total of ${encountered} pokemon.`);
console.log(`${shinyAppeared} encounters were with shiny pokemon!`);
console.log(`Caught a total of ${catchCount} pokemon.`);
console.log(`${shinyCaught} of the caught pokemon were shiny!`);
