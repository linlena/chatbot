let data; 
let inp;
let button; 
let answer = ""; 
let inpChoice = "";

// load the JSON file
function preload() {
  data = loadJSON("data.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // input field
  inp = createInput("");
  inp.size(width/2, 30);
  inp.position(width/20 + 250 - (width/4), height/3.5 - 60 - 20);
}

function keyPressed(){
  if(keyCode==ENTER){
    answerMe();
  }
}

function draw() {
  background("white");
  
  // speech bubbles
  noStroke();
  fill("pink");
  // upper
  ellipse(width/20, height/3.5, 20, 20);
  ellipse(width/20 + 40, height/3.5 - 15, 25, 25);
  ellipse(width/20 + 250, height/3.5 - 60, 400, 100);
  // lower
  ellipse(width/1.45, height/1.35, 20, 20);
  ellipse(width/1.45 - 20, height/1.35 - 40, 25, 25);
  ellipse(width/1.45 - 100, height/1.35 - 120, 400, 100);
  
  fill("black");
  textSize(10);
  textAlign(CENTER);
  text("[ask Lena about her favorite color!]", width/20 + 250, height/3.5 - 87);
  text("[press enter to ask]", width/20 + 250, height/3.5 - 33);
  
  text(answer, width/1.45 - 100, height/1.35 - 120);
  
  // head
  arc(width/2 + width/3, height - 125, 100, 80, PI + HALF_PI, 0);
  rect(width/2 + width/3 + 30, height - 125, 20, 60);
  ellipse(width/2 + width/3 + 15, height - 110, 5, 5);
  ellipse(width/2 + width/3 - 15, height - 110, 5, 5);
  fill("pink");
  arc(width/2 + width/3, height - 125, 100, 80, PI, PI + HALF_PI);
  rect(width/2 + width/3 - 50, height - 125, 20, 60);
  stroke("black");
  line(width/2 + width/3 + 10, height - 100, width/2 + width/3 - 10, height - 100);
}
  

function answerMe() {
  let inputStr;
  // prepare input string for analysis
  inputStr = inp.value();
  inputStr = inputStr.toLowerCase();
  
  loop1: for (let i = 0; i < data.brain.length; i++) {
    loop2: for (let j = 0; j < data.brain[i].triggers.length; j++) {
      if (inputStr.indexOf(data.brain[i].triggers[j]) != -1) {
        answer = random(data.brain[i].responses);
        break loop1;
      } else {
        answer = random(data.catchall);
      }
    }  
  }
  // clears input field
  inp.value("");
}