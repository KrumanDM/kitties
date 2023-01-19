alert("hello world");
const kitties = ["барсик","фунтик","кузя"]

for (let key in kitties) {
    if (key.length == 6){
    return("Вот такие пироги")
    }else {
        alert("Вот такие пирожные")
    } 
}

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

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);




function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
    
    
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);
