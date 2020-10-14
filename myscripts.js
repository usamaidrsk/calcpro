// time setter
localStorage.clear();
function setTime() {
    'use strict'
      let today = new Date();
      let hrs = today.getHours();
      let mins = today.getMinutes();
      let secs = today.getSeconds();
    
      let hrsmins = make2dgt(hrs) + ':' + make2dgt(mins) 
      let secstamp =  make2dgt(secs);
      
      document.querySelector('.hrsmins').innerHTML = hrsmins;
      document.querySelector('.secs').innerHTML = secstamp;

    function make2dgt(stdinput) {
      if(stdinput < 10) stdinput = '0' + stdinput;
      return stdinput; 
    }
}
setInterval(setTime, 1000);

//bimpimg section
function setBipper() {
  'use strict'
    let empty = '|';
    let dash = '_';
    let inputs = document.querySelector('.inputs');
    (inputs.innerHTML == '_')? inputs.innerHTML = empty : inputs.innerHTML = dash;
}
const stopBipper = setInterval(setBipper, 1000);

//set for the answer sec
function setAnswBipper() {
  'use strict'
    let eight = '8';
    let zero = '0';
    let answers = document.querySelector('.answers');
    (answers.innerHTML == "0")? answers.innerHTML = eight : answers.innerHTML = zero;
}
const stopAnswBipper = setInterval(setAnswBipper, 1000);

document.addEventListener('DOMContentLoaded', function(){
  let buttons = document.querySelector('.keyboard').children;
  Array.from(buttons).forEach(function(btn){
    btn.addEventListener('click',function(event){
    btn.classList.add("clicked-btn");
    setTimeout(() => btn.classList.remove("clicked-btn"),500);
    clearInterval(stopBipper);
    updatedInputs(event.target.innerHTML);
    })
  })
});

// common variavle
let numValues = ""; // picks values input
let storeVal = "figureOne"; // pushes first value to localstorage
let operation = []; // holds sign values

function updatedInputs(value) {
  let inputs = document.querySelector('.inputs');
    if (Number(value) < 10) {
      numValues += Number(value);
      inputs.innerHTML = numValues;
    }
    else if (value.trim() === "CLR") {
        document.querySelector("#btn-clr").classList.add("clr-clicked");
      setTimeout(() => {
        document.querySelector("#btn-clr").classList.remove("clr-clicked");
        location.reload();
        localStorage.clear();
      }  ,500);
    }
    else if (value.trim() === "=") {
      if(operation[0]) {
        setAnswer(numValues,inputs);
      } else {
        document.querySelector(".answers").innerHTML = numValues;
        localStorage.clear();
      }
    }
    else if (value.trim() === "DEL") {
      if(numValues.length > 0){
        let newVlues = Array.from(numValues);
        newVlues.pop(-1);
        numValues = newVlues.join("").toString();
        document.querySelector(".inputs").innerHTML = numValues;
      } else {
        document.querySelector(".inputs").innerHTML = "0";
        numValues = "";
      }
    }
    else {
        operation.push(value.trim());
        setAnswer(numValues,inputs);
    }
}

function setAnswer(val, inputsSec) {
  clearInterval(stopAnswBipper);
  let answers = document.querySelector('.answers');
    if(localStorage.getItem(storeVal))  {
      let answer = eval(`${localStorage.getItem(storeVal)} ${operation[0]} ${val}`);
      operation.shift();
        localStorage.setItem(storeVal,answer);
        answers.innerHTML = answer;
    } else {
      answers.innerHTML = val;
      localStorage.setItem(storeVal,val);
      answers.innerHTML = localStorage.getItem(storeVal);
    }
      numValues = ""
      inputsSec.innerHTML =  "0";
  }
