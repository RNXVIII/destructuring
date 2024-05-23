/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;
console.log(john, mary , joe);
// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    jane: "accountant",
};

let {mike, jill, jane} = jobs;
console.log(mike, jill, jane);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative , johnSecondary] = languages;
console.log(johnNative, johnSecondary);


let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let { firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);
// Using rest parameter syntax

let fruits = ["apples", "oranges", "banana", "peaches", "cherry"];
let {favorite, secondFavorite, ...others} = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian:"pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrew: "fish"
};

let {brian, anna, ...rest} = favoriteFoods;
console.log(anna);
console.log(brian);
console.log(rest);
