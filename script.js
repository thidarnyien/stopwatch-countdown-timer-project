const stopwatch= document.getElementsByClassName("stopwatch")[0]
const start= document.getElementsByClassName("startBtn")[0];
const pause= document.getElementsByClassName("pauseBtn")[0];
const continueBtn=document.getElementsByClassName("continueBtn")[0];
const restart= document.getElementsByClassName("restartBtn")[0];

let seconds=0, minutes=0, hours=0;
const startTime=() => {
    seconds +=1;
    if(seconds===60){
        seconds =0;
        minutes +=1;
        

        if(minutes===60){
            minutes=0;
            hours +=1;
        }
    }
    const secondstext= seconds< 10 ? "0" + seconds.toString(): seconds;
    const minutestext= minutes< 10 ? "0" + minutes.toString(): minutes;
    const hourstext= hours< 10 ? "0" + hours.toString(): hours;

    stopwatch.textContent= hourstext + ":"+minutestext+":"+secondstext;
};
let intervalId;
start.addEventListener("click", () =>{
    intervalId=setInterval(startTime, 1000);
});
pause.addEventListener("click",() => {
    clearInterval(intervalId)
});
continueBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId=setInterval(startTime, 1000);
    
});
restart.addEventListener("click", ()=> {
    clearInterval(intervalId);
    seconds=0,minutes-0,hours=0;
    intervalId=setInterval(startTime, 1000)
})
