

var winTimes =1;
var wins = 0;
var loses = 10;
var words =[ "blue","green","red","yellow"];
var wrongLetter=[""];




var randWord = words[Math.floor(Math.random() * words.length)];{
    console.log(randWord);
  
}


//the underscore.
var underscore=[];

for ( var i=0 ; i< randWord.length; i++){
underscore[i] =" __ ";
   console.log(underscore); 
  
}

        document.getElementById("underscore").innerHTML= ("")+ underscore.join("");
       document.getElementById("wins").innerHTML= wins;
       document.getElementById("loses").innerHTML= loses;  

function newword(){

    document.getElementById("underscore");
    setTimeout( document.getElementById("underscore").style.display= "inline",2000);
}
    
newword();  

//game start
document.onkeyup = function(event) {
   var  userGuess = event.key;
   console.log(userGuess);
  

  if( randWord.indexOf(userGuess)>-1){

    for ( var j = 0 ; j< randWord.length; j++){
    
    if ( randWord[j]=== userGuess){
    
        underscore[j] = userGuess;
       
        
    }
    }

 if (winTimes==(randWord.length) + 1){
       
    wins++;
    newword();  
    console.log(wins);
 
 }
}else{

        loses--;
        wrongLetter.push(userGuess);
        
        
        console.log(loses);
           
    }if(loses===0){

        alert("game over");
       
    }   
    
    document.getElementById("underscore").innerHTML= ("")+ underscore.join("");
    document.getElementById("wins").innerHTML= wins;
    document.getElementById("loses").innerHTML= loses;
    document.getElementById("letters").innerHTML=  wrongLetter.join("");
        }
    
    



