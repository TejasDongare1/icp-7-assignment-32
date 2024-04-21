console.log(`ARRAY `);
const students = ["Tejas", "Vishnu", "Rajat", "Aniket", "Anshul"];
        console.log(students);

console.log(`push() `);
        const parts = ["A", "B", "C", "D"];
console.log(parts);
parts.push("E" );
parts.push("F" );
console.log(parts);

        
console.log(`POP() `);        
const remove = ["X", "Y", "Z"];
console.log(remove);
remove.pop();
console.log(remove);

console.log(`UNSHIFT()`);
const add = ["A", "B", "C", "D"];
console.log(add);
add.unshift("X");
console.log(add);
        
console.log(`Shift()`);
const del = ["A", "B", "C", "D"];
console.log(del);
del.shift();
console.log(del);


console.log(`splice()`);
const food =  ["Tomato", "Butter", "Chicken", "Cream"];
console.log(food);
food.splice(1, 2, "Nuddles", "Rice");
console.log(food);        


console.log(`reverse() `);
const menu =  ["Tomato", "Butter", "Chicken", "Cream"];
console.log(menu);
menu.reverse();
console.log(menu);

console.log(`sort() `);
const alphabet =  ["Aarambh", "Nehal", "Aarohi", "Rohan", "Ishaant", "Aniket", "Kiran", "Priya", "Yash", "Tanvi"];
console.log(alphabet);
alphabet.sort();
console.log(alphabet);

console.log(`indexOf() `);
const ind = ["Aarambh", "Nehal", "Aarohi", "Rohan", "Ishaant", "Aniket", "Kiran", "Priya", "Yash", "Tanvi"];
const index = ind.indexOf("Priya");
console.log(index);

console.log(`JOIN() `);
const names= ["Aarambh", "Nehal", "Aarohi", "Rohan", "Ishaant", "Aniket", "Kiran", "Priya", "Yash", "Tanvi"];
 console.log(names.join())