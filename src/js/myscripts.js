// time setter
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
function setbipper() {
  'use strict'
    let empty = '|';
    let dash = '_';
    let inputs = document.querySelector('.inputs');
  
    (inputs.innerHTML == '_')? inputs.innerHTML = empty : inputs.innerHTML = dash;
}
setInterval(setbipper, 1000);

//set for the answer sec
function setanswsec() {
  'use strict'
    let eight = '8';
    let zero = '0';
    let answers = document.querySelector('.answers');

    (answers.innerHTML == "0")? answers.innerHTML = eight : answers.innerHTML = zero;
}
setInterval(setanswsec, 1000);

document.addEventListener('DOMContentLoaded', function(){
  let buttons = document.querySelector('.keyboard').children;
  console.log(buttons)
  let string = "";
  Array.from(buttons).forEach(function(btn){
    btn.addEventListener('click',function(event){
    let inputs = document.querySelector('.inputs');
    })
  })

})
