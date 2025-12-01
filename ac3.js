let bar = document.getElementById("progress-bar");
let btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {
    
    let progress = 0;
    btn.disabled = true;

    let loading = setInterval(() => {
        progress++;
        bar.style.width = progress + "%";
        bar.innerText = progress + "%";

        if(progress === 100){
            clearInterval(loading);
            btn.disabled = false;
        }
    }, 50);  // speed of filling (lower = faster)
});
