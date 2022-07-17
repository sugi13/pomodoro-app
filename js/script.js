
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let textField = document.getElementById("text-field");
let taskName = document.getElementById("work");

// buttons //
let startButton = document.getElementById("start-btn");
let BreakButton = document.getElementById("Break-btn");
let LongBreakButton = document.getElementById("LongBreak-btn");

let TimerMin = 25;
let TimerSec = 60;

let BreakTimeMin = 4;
let BreakTimeSec = 60;

let LongBreakTimeMin = 10;
let LongBreakTimeSec = 60;

let StopInterval;
let breakInterval;
let LongBreakInterval;


// main functions //

function letsDecrement(){
   taskName.innerHTML = textField.value;
   minutes.innerHTML = TimerMin - 1; 
   TimerSec--;
   seconds.innerHTML = TimerSec;

   if( TimerSec == 0){
      TimerMin = TimerMin - 1;
      TimerSec = 60;
      TimerSec--;
      minutes.innerHTML = TimerMin;
      seconds.innerHTML = TimerSec;

      if(TimerMin == 0){
         stop(); 
      }  
}
textField.disabled = true;
}


// For short break//

function shortBreak(){  
   clearInterval(StopInterval);
   minutes.innerHTML = BreakTimeMin;
   seconds.innerHTML = BreakTimeSec;

   BreakTimeSec--;
   seconds.innerHTML = BreakTimeSec;

   if(BreakTimeSec == 0){
      BreakTimeMin = BreakTimeMin - 1;
      BreakTimeSec = 60;
      minutes.innerHTML = BreakTimeMin;
      seconds.innerHTML = BreakTimeSec;

      if(BreakTimeMin == 0){
         stop();
      }
   }
}



// for long break//

function longBreak(){
   clearInterval(StopInterval);
   minutes.innerHTML = LongBreakTimeMin;
   seconds.innerHTML = LongBreakTimeSec;

   LongBreakTimeSec--;
   seconds.innerHTML = LongBreakTimeSec;

   if(LongBreakTimeSec == 0){
      LongBreakTimeMin = LongBreakTimeMin - 1;
      LongBreakTimeSec = 60;
      
      minutes.innerHTML = LongBreakTimeMin;
      seconds.innerHTML = LongBreakTimeSec;

      if(LongBreakTimeMin == 0){
         stop();
      }
   }
}






// interval function for start //

function start(){
   StopInterval = setInterval(letsDecrement, 1000);
   clearInterval(breakInterval);
   clearInterval(LongBreakInterval);
   letsDecrement();
}

// stop function //


function stop(){
   minutes.innerHTML = "00";
   seconds.innerHTML = "00";
   textField.disabled = false;
   clearInterval(StopInterval);
   setTimeout(()=>{
      alert("Times up");
      location.reload();
   }, 2000);
}


// interval function for shortBreak //

function startShortBreak(){
   breakInterval = setInterval(shortBreak,1000);
   clearInterval(StopInterval);
   clearInterval(LongBreakInterval)
}

// interval function for Long Break //

function startLongBreak(){
   LongBreakInterval = setInterval(longBreak, 1000);
   clearInterval(breakInterval)
   clearInterval(StopInterval)
}


// EventListeners

startButton.addEventListener("click", start);
BreakButton.addEventListener("click", startShortBreak);
LongBreakButton.addEventListener("click", startLongBreak);