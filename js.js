alert("hello world");
const kitties = ["барсик","фунтик","кузя"]

for (let key in kitties) {
    if (key.length == 6){
    return("Вот такие пироги")
    }else {
        alert("Вот такие пирожные")
    }
}