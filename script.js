const randomnum = Math.floor(Math.random()*10+1);
let guess;

do{
    guess = parseInt(prompt());
if(guess>randomnum){
    console.log("too high");
} 
else if (guess<randomnum){
    console.log("too low");
}
else{
    console.log(" yes mf");
}
}
while(guess !== randomnum);