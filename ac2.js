let ms = 0, sec = 0, min = 0;
let timer;
let running = false;

let display = document.getElementById("display");
let lapList = document.getElementById("lapList");

// Start Timer
document.getElementById("start").addEventListener("click", function(){
    if(!running){  
        running = true;
        timer = setInterval(runTimer, 10);
    }
});

// Pause Timer
document.getElementById("pause").addEventListener("click", function(){
    running = false;
    clearInterval(timer);
});

// Reset Timer
document.getElementById("reset").addEventListener("click", function(){
    running = false;
    clearInterval(timer);
    ms = sec = min = 0;
    display.innerHTML = "00 : 00 : 00";
    lapList.innerHTML = "";  // clear lap history
});

// Lap Record
document.getElementById("lap").addEventListener("click", function(){
    if(running){
        let li = document.createElement("li");
        li.innerText = `${format(min)} : ${format(sec)} : ${format(ms)}`;
        lapList.appendChild(li);
    }
});

// Timer Function
function runTimer(){
    ms++;
    if(ms == 100){ ms = 0; sec++; }
    if(sec == 60){ sec = 0; min++; }

    display.innerHTML = `${format(min)} : ${format(sec)} : ${format(ms)}`;
}

// Format double digits
function format(num){
    return num < 10 ? `0${num}` : num;
}
