/* 
 * The FocusMiss Script
 * If you have ever played competetive pokemon and used a low accuracy move such as
 * Focus Blast or Stone Edge, it always seems to miss at the worst times possible,
 * or even worse just never hit. This script plays off of that concept.
 * I want you to build on this template that I have written and calculate how many times
 * Focus Blast (or another Pokemon move with 70 accuracy or less) hits in a row.
 * To make this assignment work, you would need to use some JavaScript code that
 * you have not learned yet, as a result I have written a small function for you
 * that handles the parts that you have not learned yet. Please see the comment
 * above the function for details about how it works. Once you have calculated how many
 * times your move has hit before missing, log that result to the console, perferebly
 * in a nice string such as "MOVENAME hit HITS time(s) before missing!".
 * 
 * HINTS:
 * Your result will vary each time due to the randomness of a move hitting or missing.
 * Remember DRY (Don't Repeat Yourself).
 * A for loop will not work here, there is a different kind of loop that will work for this.
 * 
 * After you complete the assignment please turn it into me so I can ensure you understood
 * today's concepts and offer feedback in areas you could improve in. When turning this in
 * fill out the following info (only discord tag is required):
 * 
 * Discord Tag: 
 * Pokemon Showdown Username: 
 * Twitch Username: 
 */
'use strict';

/*
 * This is a function, you don't know what they do yet but it will help you
 * during this assignment. I will treat this like console.log and just teach you
 * how to use it, not how it works. To run it, you need to type runMove(accuracy),
 * however you need to replace "accuracy" with a number that represents the accuracy
 * of the move you are trying to see will hit. The function will return a value,
 * meaning that if you assign a variable to runMove(accuracy), the function will
 * determine its value. The function wil randomly return either true if the move
 * hit, or false if it missed. The function also only calculates one attempted
 * move at a time. If you need to do more than one, write code to run the
 * function more than once.
 */
function runMove(accuracy = 70) {
	return Math.floor(Math.random() * 100) < accuracy;
}

// Your code under this line
let hits = 0;
let hasMissed = false;

while (!hasMissed) {
	let hit = runMove(70);
	if (hit) {
		hits++;
	} else {
		hasMissed = true;
	}
}

console.log(`Focus Blast hit ${hits} time(s) in a row!`);
