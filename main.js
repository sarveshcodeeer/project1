x = 0;
y = 0;
sw  = 0 ; 
sh = 0 ;
sd = "" ; 
tn = "" ; 
de = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
tn = Number(content) ; 
if(Number.isInteger(tn)){

document.getElementById("status").innerHTML = "started drawing apple" ; 
de = "set" ; 

}
else{
  document.getElementById("status").innerHTML = "the speech has not recognised a number" ;


}
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}
function preload() {
  apple = loadImage("apple.png")
}

function setup() {
  sw  = window.innerWidth ;
  sh  = window.innerHeight ;
  canvas = createCanvas(sw-250 , sh-50)
canvas.center() 
}

function draw() {
  if(de == "set")
  {
    document.getElementById("status").innerHTML = tn + " Apples drawn";
    sd = tn + " Apples drawn" ; 
    speak()
    de = "";
    for(var i = 1 ; i<=tn ; i++){
x = Math.floor(Math.random()*700) ; 
y = Math.floor(Math.random()*400) ; 
image(apple , x , y , 50 , 50) ;
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(sd);

    synth.speak(utterThis);

    sd = "";
}
