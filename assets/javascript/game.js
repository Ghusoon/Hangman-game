

var winTimes =1;
var wins = 0;
var loses = 10;
var words =[ "blue","green","red","yellow"];
var wrongLetter=[""];
var underscore=[];
var image =[];
var randWord = words[Math.floor(Math.random() * words.length)];{
    console.log(randWord);
  
}



function resetGame() {
    document.getElementById("underscore").innerHTML="";
    loses = 10;
    wrongLetter = [];
    randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);
    
for ( var i=0 ; i< randWord.length; i++){
    underscore[i] =" __ ";
       console.log(underscore); 
      
    }

}



//the underscore.


for ( var i=0 ; i< randWord.length; i++){
underscore[i] =" __ ";
   console.log(underscore); 
  
}

        document.getElementById("underscore").innerHTML= ("")+ underscore.join("");
       document.getElementById("wins").innerHTML= wins;
       document.getElementById("loses").innerHTML= loses;  

//function newword(){
    // setTimeout( document.getElementById("underscore")("")+ underscore.join(""),2000);
   

    
// newword();  

//game start
document.onkeyup = function(event) {
   var  userGuess = event.key;
   console.log(userGuess);
//    newword();

  if( randWord.indexOf(userGuess)>-1){

    for ( var j = 0 ; j< randWord.length; j++){
    
    if ( randWord[j]=== userGuess){
    
        underscore[j] = userGuess;
       winTimes++;
        
    }
}

 if (winTimes==(randWord.length) + 1){
       
    wins++;
    resetGame()
//    newword();  
    console.log(wins);
   
 }
 //if ( image[0]===words[0]){
    //image.sre("")
 //}

}else{

        loses--;
        wrongLetter.push(userGuess);
        console.log(loses);
           
    }if(loses===0){

        alert("game over");
       
    }   

    resetGame();
    document.getElementById("underscore").innerHTML= ("")+ underscore.join("");
    document.getElementById("wins").innerHTML= wins;
    document.getElementById("loses").innerHTML= loses;
    document.getElementById("letters").innerHTML=  wrongLetter.join("");
        }
    
    



