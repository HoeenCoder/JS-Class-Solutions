/* 
 * Pokemon Showdown & JavaScript Class
 * Day 2 - Basic Data Types
 * Post-Stream Assignments
 *
 * This assignment sheet will give you a chance to work further with booleans,
 * strings, numbers, variables, and some of the things you can do with them.
 * If you want me to review what you have done for errors, fill this info out
 * before sending me a copy (you can make gists too if you have a github account).
 *
 * * = required
 * Discord Tag*: HoeenHero#5770
 * Pokemon Showdown Username (if any): HoeenHero
 * Twitch Username (if any): HoeenHero
 */

'use strict';

/*
 * 1. Use JavaScript to solve the following math questions, and print the solution to
 * the terminal in the format:
 * 
 * The solution for QUESTION is: ANSWER HERE.
 * (dont forget the period)
 *
 * Two plus Seven
 * Eight times Eleven
 * Five minus Fourteen
 * Eighty dividied by Nine
 * Four times Six plus Eighteen
 * The quantity Twelve minus Two divided by Five
 * Fifteen plus Four divided by Six minus Fourty-Two
 * The quantity Fifteen plus four divided by the quantity Six minus Fourty-Two
 */

console.log(`The solution for 2 + 7 is: ${2 + 7}.`);
console.log(`The solution for 8 * 11 is: ${8 * 11}.`);
console.log(`The solution for 5 - 14 is: ${5 - 14}.`);
console.log(`The solution for 80 / 9 is: ${80 / 9}.`);
console.log(`The solution for 4 * 6 + 18 is: ${4 * 6 + 18}.`);
console.log(`The solution for (12 - 2) / 5 is: ${(12 - 2) / 5}.`);
console.log(`The solution for 15 + 4 / 6 - 42 is: ${15 + 4 / 6 - 42}.`);
console.log(`The solution for (15 + 4) / (6 - 42) is: ${(15 + 4) / (6 - 42)}.`);
console.log('\n\n\n');

/*
 * 2. Create a variable called x and solve the following math questions
 * with x set to 3 different numbers of your choosing.
 * When you change x's value, be sure to log that x's value changed (and what it changed to)
 * in the console. Log the answers in the same way you did in the last question.
 *
 * x plus Seven
 * Six Hundred and Fifty minus x
 * The quantity x minus Seventy-Eight times Nine
 * x times One Hundred and One divided by Four
 */

let x = 7;
console.log(`The value of x is ${x}.`);
console.log(`The solution for x + 7 is: ${x + 7}.`);
console.log(`The solution for 650 - x is: ${650 - x}.`);
console.log(`The solution for (x - 78) * 9 is: ${(x - 78) * 9}.`);
console.log(`The solution for x * 101 / 4 is: ${x * 101 / 4}.`);

x = -78;
console.log(`The value of x is ${x}.`);
console.log(`The solution for x + 7 is: ${x + 7}.`);
console.log(`The solution for 650 - x is: ${650 - x}.`);
console.log(`The solution for (x - 78) * 9 is: ${(x - 78) * 9}.`);
console.log(`The solution for x * 101 / 4 is: ${x * 101 / 4}.`);

x = 115;
console.log(`The value of x is ${x}.`);
console.log(`The solution for x + 7 is: ${x + 7}.`);
console.log(`The solution for 650 - x is: ${650 - x}.`);
console.log(`The solution for (x - 78) * 9 is: ${(x - 78) * 9}.`);
console.log(`The solution for x * 101 / 4 is: ${x * 101 / 4}.`);

// Loop version
for (let i = 300; i < 400; i -= 100) {
	console.log(`The value of i is ${i}.`);
	console.log(`The solution for i + 7 is: ${i + 7}.`);
	console.log(`The solution for 650 - i is: ${650 - i}.`);
	console.log(`The solution for (i - 78) * 9 is: ${(i - 78) * 9}.`);
	console.log(`The solution for i * 101 / 4 is: ${i * 101 / 4}.`);
}
