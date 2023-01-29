





















// alert("hello world");
// const kitties = ["барсик","фунтик","кузя"]

// for (let key in kitties) {
//     if (key.length == 6){
//     return("Вот такие пироги")
//     }else {
//         alert("Вот такие пирожные")
//     } 
// }

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }

//   return "Change Me";
//   // Only change code above this line
// }

// golfScore(5, 4);




// function caseInSwitch(val) {
//     let answer = "";
//     // Only change code below this line
//   switch (val) {
//     case 1:
//     answer = "alpha";
//     break;
//     case 2:
//     answer = "beta";
//     break;
//     case 3:
//     answer = "gamma";
//     break;
//     case 4:
//     answer = "delta";
//     break;
    
    
//   }
  
  
//     // Only change code above this line
//     return answer;
//   }
  
//   caseInSwitch(1);



//   function isLess(a, b) {
//     // Only change code below this line
//     return a < b 
     
//     // Only change code above this line
//   }
  
//   isLess(10, 15);






//   // Setup
// function abTest(a, b) {
//   // Only change code below this line
// if (a<0 || b<0)
// return undefined


//   // Only change code above this line

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// abTest(2,2);






// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   if (card <= 6) 
//     count++;
//   else if (card >="10")
//     count--;
//   return count + (count > 0 ? ' Bet' : ' Hold');
// }
//   // Only change code above this line


// cc(2); cc(3); cc(7); cc('K'); cc('A');







// const myDog = {
//   // Only change code below this line
// name: "Kate",
// legs: 4,
// tails: 1,
// friends: ["dima","sasha"] array это массив только на русском

//   // Only change code above this line
// };



















// // Setup
// const testObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };

// // Only change code below this line

// const entreeValue = testObj["an entree"];   // Change this line
// const drinkValue = testObj["the drink"];    // Change this line













// // Setup
// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// // Only change code below this line
// const playerNumber = 16;  // Change this line
// const player = testObj[playerNumber];   // Change this line













// // Setup
// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// // Only change code below this line
// myDog.name = "Happy Coder"















// // Setup
// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };

// // Only change code below this line
// myDog.name = "Happy Coder"








// Setup
// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//   "bark": "woof"
// };

// // Only change code below this line
// delete myDog.tails;






// Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank"
//   };
// result = lookup[val];
//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");













// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }
//   // Only change code above this line
// }












// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs",
//       "gloveBoxContents": "maps"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car.inside["glove box"]











Возвращает количество (количество) гласных в заданной строке.

Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).

Входная строка будет состоять только из строчных букв и/или пробелов.


// function getCount(str) {
//   let total = 0;

//   const string = str.toLowerCase().split("");

//   for (let i = 0; i < string.length; i++) {
//     const charts = string[i];

//     if (charts.includes("a")) {
//       total += 1;
//     } else 
//     if (charts.includes("e")) {
//       total += 1;
//     } else 
//     if (charts.includes("i")) {
//       total += 1;
//     } else
//     if (charts.includes("o")) {
//       total += 1;
//     } else 
//     if (charts.includes("u")) {
//       total += 1;
//     }
//   }

//   return total;
// }




// function abrevan(name) {

//   const [first, last] = name.split(" ")
//   return `${first[0].toUpperCase().${last[0].toUpperCase}}`

// }