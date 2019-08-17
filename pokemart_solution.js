/*
 * The Pokemart
 * 
 * This assignment has you working with Objects and Functions/Methods.
 * The goal is to create code to represent a pokemart that sells items, and then
 * simulate a player purchasing some items from the pokemart.
 * 
 * Requirements [READ CAREFULLY]:
 * The pokemart must be an Object containing at least 10 items. You can pick what
 * items are sold and at what price.
 * The player must have a predetermined amount of money, and must buy at least 20 items,
 * at least 3 of which must be unique (duplicates are allowed, make sure to give the player enough money).
 * Log how much money the player has to the console when the script starts.
 * Use an object to keep track of what is currently in the player's cart. Use functions/methods to add items to the cart.
 * Do NOT allow a player to have a negative number of an item in their cart.
 * Log when an item is added to the cart to the console, including the quantity.
 * The pokemart must have a checkout method to calculate how much money the player pays for the items.
 * The checkout method must log:
 * - A line for each item being purchased including the name of the item, quantity, and cost.
 * - A line for the total cost of the cart
 * - A line either saying how much money the player has left OR
 * - A line stating the player cannot afford the purchase
 * The checkout method must not allow a purchase that the player cannot afford.
 * OPTIONAL BONUS: Add an extra item that cannot be purchased but it can be obtained in a simaler way to premier balls in the pokemon games.
 * - If you do this, make sure this item cannot be added to the cart, and note how many were given (if > 0) after sucessfully checking out.
 * OPTIONAL BONUS 2: Make it so that the player can remove items from their cart. This can be a new function/method or built into
 * - the one for adding items to the cart (maybe a negative value indicates a removal?)
 * OPTIONAL BONUS 3: Empty the player's cart after they checkout (in the checkout function), and have them make a second purchase.
 * - (Second purchase only needs a total of 1 item and 1 unique item, unlike the first).
 * 
 * HINTS:
 * DRY (Don't repeat yourself)
 * Try to make your code industrial strength. This means verify function arguments before doing what was asked.
 * For example: When adding to cart, make sure the requested item is a valid item & can be purchased, also make sure
 * the player will not have a negative number of that item in their cart after (or just block negative values).
 * You can use the return keyword to terminate a function early, even if the return value is unimportant to the function.
 * Use Math.floor(NUMBER) to round NUMBER down to the nearest whole number (returns an integer).
 */
'use strict';

const pokemart = {
	potion: {
		name: "Potion",
		id: "potion",
		cost: 200,
	},
	superpotion: {
		name: "Super Potion",
		id: "superpotion",
		cost: 700,
	},
	hyperpotion: {
		name: "Hyper Potion",
		id: "hyperpotion",
		cost: 1500,
	},
	maxpotion: {
		name: "Max Potion",
		id: "maxpotion",
		cost: 2500,
	},
	fullrestore: {
		name: "Full Restore",
		id: "fullrestore",
		cost: 3000,
	},
	pokeball: {
		name: "Poke Ball",
		id: "pokeball",
		cost: 200,
	},
	greatball: {
		name: "Great Ball",
		id: "greatball",
		cost: 600,
	},
	ultraball: {
		name: "Ultra Ball",
		id: "ultraball",
		cost: 800,
	},
	diveball: {
		name: "Dive Ball",
		id: "diveball",
		cost: 1000,
	},
	luxuryball: {
		name: "Luxury Ball",
		id: "luxuryball",
		cost: 1000,
	},
	premierball: {
		name: "Premier Ball",
		id: "premierball",
		cost: false, // Cannot be bought
	},
	checkout(cart) {
		let totalCost = 0;
		let premier = 0;
		console.log(`Checking out, items in cart:`);
		for (let item in cart) {
			if (!this[item] || cart[item] <= 0) continue; // money, addItem, 0 of an item, or other unrecognized item.
			let cost = this[item].cost * cart[item];
			console.log(`${cart[item]} ${this[item].name}${cart[item] === 1 ? '' : 's'} for ${cost}.`);
			totalCost += cost;
			if (this[item].id === 'pokeball') {
				premier = Math.floor(cart[item] / 10);
			}
		}
		if (!totalCost) {
			console.log(`The cart is empty?!`);
			console.log(`Player left with nothing.`);
			return;
		}
		console.log(`Player's total is ${totalCost}`);
		if (cart.money >= totalCost) {
			cart.money -= totalCost;
			console.log(`Player has ${cart.money} poke dollar${cart.money === 1 ? '' : 's'} left.`);
			if (premier > 0) {
				console.log(`Player got ${premier} ${this.premierball.name}${premier === 1 ? '' : 's'} as a free bonus!`);
			}
		} else {
			console.log(`Player has only ${cart.money} poke dollar${cart.money === 1 ? '' : 's'} left and can't afford the purchase...`);
			console.log(`Player left with nothing.`);
		}
		// Empty cart
		for (let item in cart) {
			if (!this[item]) continue;
			delete cart[item];
		}
	}
};

// You could put money and addItem outside of the cart, or even split addItem into addItem and removeItem but this is how I did it when I setup the assignment
let cart = {
	money: 30000,
	addItem(item, amount = 1) {
		amount = Math.floor(amount);
		if (!item || !pokemart[item] || !pokemart[item].cost) return console.log(`The item "${item}" dosen't exist or can't be bought and could not be added to cart.`);
		if (amount === 0) return console.log(`Amount needs to be a non-zero value.`);
		if (this[item] === undefined) this[item] = 0;
		if (this[item] + amount < 0) return console.log(`Adding ${amount} ${item}s to the cart would cause the number of this item in the cart to drop under zero, which isn't allowed.`);
		this[item] += amount;
		if (amount > 0) {
			console.log(`Added ${amount} ${item}${amount === 1 ? '' : 's'} to the cart.`);
		} else {
			console.log(`Removed ${amount * -1} ${item}s from the cart.`);
		}
	},
	// items filled in by cart.addItem()
}

// START
console.log(`Player has ${cart.money} poke dollar${cart.money === 1 ? '' : 's'}.`);
cart.addItem('pokeball', 45);
cart.addItem('diveball', 5);
cart.addItem('hyperpotion', 7);
cart.addItem('pokeball', -10);
pokemart.checkout(cart);

cart.addItem('maxpotion', 2);
cart.addItem('ultraball', 3);
pokemart.checkout(cart);
