'use strict';

//global veribles

let duckContainer = document.querySelector ('section');
let resultButton = document.querySelector ('section + div');
let img1 = document.querySelector('Section img:first-child');
let img2 = document.querySelector('section img:nth-child(2)');
let img3 = document.querySelector('section img:nth-child(3)');


let clicks = 0;
let maxClicksAllowed =25;
let uniqueImageCount = 3; // Number of unique images to display at a time


// State object holds the holds the current state of the application (all existing Goats)

const state = {
  allDuckArray: [],
  indexArray: [],
};

//function logic

function Duck(name, src) {
this.name = name;
this.src = src;
this.view = 0;
this.likes = 0;
}


function getRandomNumber() {
  return Math.floor(Math.random() * state.allDuckArray.length);
}


function RenderDuck() {
  while (state.indexArray.length < uniqueImageCount){
    let randomNumber = getRandomNumber();
    if (!state.indexArray.includes(randomNumber)){
      state.indexArray.push (randomNumber);
      
    }
  }
  console.log(state.indexArray);

  let duck1 = state.indexArray.shift();
  let duck2 = state.indexArray.shift();
  let duck3 = state.indexArray.shift();
  // Call getRandomNumber to get three unique indices
  //let duck1 = getRandomNumber(); - 12/12/24
 // let duck2 = getRandomNumber(); -12/12/24
 // let duck3 = getRandomNumber(); - 12/12/24

  // Ensure all three indices are unique - 12/12/24
  //while (duck1 === duck2 || duck1 === duck3 || duck2 === duck3) { - 12/12/24
   // duck2 = getRandomNumber(); - 12/12/24
    //duck3 = getRandomNumber(); - 12/12/24
 // } - 12/12/24

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
 //if (event.target === duckContainer ) {
  if (event.target.tagName !== 'IMG') {
  alert('please click on a image');
  return;
 }
clicks++;
let likesDuck =event.target.alt;
 for (let i = 0; i < state.allDuckArray.length;i++){
  if (likesDuck=== state.allDuckArray[i].name) {
    state.allDuckArray[i].clicks++;
    break;
  }
 }
if (clicks === maxClicksAllowed){
  duckContainer.removeEventListener('click', handleDuckClick);
   // give the button an event lister and styles so the user
    // knows its an active button:
    renderChart(); // here I removerd the button function and changed it for a chart 
} else {
  RenderDuck();
}

}

function renderResults(){          
  let ul = document.querySelector('ul');
  ul.innerHTML = '';
  for (let i = 0; i<state.allDuckArray.length; i++){
    let li = document.createElement('li');
    li.textContent = `${state.allDuckArray[i].name}: ${state.allDuckArray[i].likesDuck} clicks and ${state.allDuckArray[i].views} views.`;
    ul.appendChild(li);
  }
  resultButton.removeEventListener('click', renderResults);
  resultButton.className = 'results-shown';
}                                      

function renderChart(){
let duckNames = [];
let ducklikes = [];
let duckviews = [];

for (let i = 0; i< state.allDuckArray.length; i++){
  duckNames.push(state.allDuckArray[i].name);
  ducklikes.push(state.allDuckArray[i].likes);
  duckviews.push(state.allDuckArray[i].views);
}
const data ={
  labels: duckNames,
  datasets:[{
    label: 'likes',
    data:ducklikes,
    backgroundColor:[
      'rgba(98, 105, 192, 0.2)'
    ],
    borderColor: [
      'rgb(147, 163, 28)'
    ],
    borderWidth: 1 

  },
  {
    label:'views',
    data:duckviews,
    backgroundColor: [ 
      'rgba(255 , 159 , 64 , 0.2)'
    ],
    borderColor:[
      'rgb(255,159,64)'
    ],
    borderWidth:1
  }]
};
const config ={
  type : 'bar',
  data: data,
  options:{
    scales:{
      y:{
        beginAtZero:true
      }
    }
  },
};
let canvasChart = document.getElementById('myChart');
if (!canvasChart) {
  canvasChart = document.createElement('canvas');
  canvasChart.id = 'theChart';
  document.body.appendChild(canvasChart);
}  
new Chart(canvasChart,config);
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
//console.log(resultButton);
//resultButton.disabled = false;
//resultButton.classList.add('clicks-allowed');

