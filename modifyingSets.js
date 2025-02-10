// Modifying Sets
// After you’ve created a Set, you’ll probably want to add and delete items from the Set. So how do you that? You use the appropriately named, .add() and .delete() methods:
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');
games.clear()
// console.log(games);
// Checking The Length
// Once you’ve constructed your Set, there are a couple of different properties and methods you can use to work with Sets.

// Use the .size property to return the number of items in a Set:

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);

// Checking If An Item Exists
// Use the .has() method to check if an item exists in a Set. If the item is in the Set, then 
// .has() will return true. If the item doesn’t exist in the Set, then .has() will return false

console.log(months.has('September'));