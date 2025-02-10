
// Find the cheapest accommodation for student's vacation.
// It is guaranteed that the length of the cost array is greater than or equal to the duration of the vacation.

// If there is enough money for travelling, return the answer in the format:
// "money: {minimum_money_for_vacation}"
// Otherwise, return the maximum duration of the vacation in the format:
// "days: {maximum_duration_of_vacation}" 
// Help the student find the optimal solution for his summer vacation!

// Examples
// | money | days | cost          | result      |
// |-------|------|---------------|-------------|
// | 10    | 1    | [5]           | "money: 5"  |
// | 10    | 1    | [3, 2, 4]     | "money: 2"  |
// | 10    | 2    | [3, 7, 6]     | "money: 10" |
// | 10    | 1    | [20, 15, 30]  | "days: 0"   |
// | 10    | 2    | [9, 6, 7, 4]  | "days: 1"   |
// | 50    | 3    | [10, 40, 5]   | "days: 2"   |
// Constraints for random tests (depends on language)
// |                      | small   | medium | extra_large  |
// |----------------------|---------|--------|--------------|
// | tests                | 10      | 10     | 10           |
// | money                | 1-10    | 1-50   | 1 to 30-300M |
// | days                 | 1-4     | 1-20   | 1 to 0.03-3M |
// | cost.length          | 1-10    | 1-50   | 1 to 0.1-15M |
// | cost[i]              | 1-10    | 1-10   | 1 to 400     |
// | cost.length >= days  | true    | true   | true         |
// Solutions with a time complexity slower than O(n) will fail to pass extra large tests
function findMinCost(money, days, cost) {
    let minCost = Infinity;
    
    for (let i = 0; i <= cost.length - days; i++) {
        let totalCost = 0;
        for (let j = i; j < i + days; j++) {
            totalCost += cost[j];
        }
        minCost = Math.min(minCost, totalCost);
    }
    
    if (minCost <= money) {
        return `money: ${minCost}`;
    }
    
    let maxDays = 0;
    for (let i = 0; i < cost.length; i++) {
        let totalCost = 0;
        for (let j = i; j < cost.length; j++) {
            totalCost += cost[j];
            if (totalCost > money) break;
            maxDays = Math.max(maxDays, j - i + 1);
        }
    }
    
    return `days: ${maxDays}`;
}