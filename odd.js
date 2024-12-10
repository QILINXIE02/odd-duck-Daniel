'use strict';

//global veribles

let duckContainer = document.querySelector ('section');
let resultButton = document.querySelector ('section + div');
let img1 = document.querySelector('Section img:first-child');
let img2 = document.querySelector('section img:nth-child(2)');
let img3 = document.querySelector('section img:nth-child(3)');


let clicks = 0;
let maxClicksAllowed =25;


// State object holds the holds the current state of the application (all existing Goats)

const state = {
  allDuckArray: [],
};

//function logic

function Duck(name, src) {
this.name = name;
this.src = src;
this.view = 0;
this.clicks = 0;
}


function getRandomNumber() {
  return Math.floor(Math.random() * state.allDuckArray.length);
}


function RenderDuck() {
  // Call getRandomNumber to get three unique indices
  let duck1 = getRandomNumber();
  let duck2 = getRandomNumber();
  let duck3 = getRandomNumber();

  // Ensure all three indices are unique
  while (duck1 === duck2 || duck1 === duck3 || duck2 === duck3) {
    duck2 = getRandomNumber();
    duck3 = getRandomNumber();
  }

  // Assign the images and alt attributes
  img1.src = state.allDuckArray[duck1].src;
  img2.src = state.allDuckArray[duck2].src;
  img3.src = state.allDuckArray[duck3].src;
  img1.alt = state.allDuckArray[duck1].name;
  img2.alt = state.allDuckArray[duck2].name;
  img3.alt = state.allDuckArray[duck3].name;

  // Increment the view counts for the displayed ducks
  state.allDuckArray[duck1].views++;
  state.allDuckArray[duck2].views++;
  state.allDuckArray[duck3].views++;
}

function handleDuckClick(event){
 if (Event.Target === duckContainer ) {
  alert('please click on a image');
 }
clicks++;
let clickDuck =Event.Target.alt;
 for (let i = 0; i < state.allDuckArray.length;i++){
  if (clickDuck=== state.allDuckArray[i].name) {
    state.allDuckArray[i].clicks++;
    break;
  }
 }
if (clicks === maxClicksAllowed){
  duckContainer.removeEventListener('click', handleDuckClick);
   // give the button an event lister and styles so the user
    // knows its an active button:
    resultButton.addEventListener('click', renderResults);
    resultButton.className = 'clicks-allowed';
    duckContainer.className = 'no voting';
} else {
  RenderDuck();
}

}

function renderResults(){
  let ul = document.querySelector('ul');
  for (let i = 0; i<state.allDuckArray.length; i++){
    let li = document.createElement('li');
  }
}

//executable code 
let bag = new Duck('bag', './images/bag.jpg');
let banana = new Duck('banana', './images/banana.jpg');
let bathroom = new Duck('bathroom', './images/bathroom.jpg');
let boots = new Duck('boots', './images/boots.jpg');
let breakfast = new Duck('breakfast', './images/breakfast.jpg');
let bubblegum = new Duck('bubblegum', './images/bubblegum.jpg');
let chair = new Duck('chair', './images/chair.jpg');
let cthulhu = new Duck('cthulhu', './images/cthulhu.jpg');
let dogduck = new Duck('dog-duck', './images/dog-duck.jpg');
let dragon = new Duck('dragon', './images/dragon.jpg');
let pen = new Duck('pet-sweep', './images/pet-sweep.jpg');
let petsweep = new Duck('pen', './images/pen.jpg');
let scissors = new Duck('scissors', './images/scissors.jpg');
let shark = new Duck('shark', './images/shark.jpg');
let sweep = new Duck('sweep', './images/sweep.jpg');
let tauntaun = new Duck('tauntaun', './images/tauntaun.jpg');
let unicorn = new Duck('unicorn', './images/unicorn.jpg');
let watercan = new Duck('water-can', './images/water-can.jpg');
let wineglass = new Duck('wine-glass', './images/wine-glass.jpg');
state.allDuckArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

RenderDuck();
duckContainer.addEventListener('click', handleDuckClick);



