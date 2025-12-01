function updateClock() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    // Add leading zeros
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("clock").innerHTML = `${h} : ${m} : ${s}`;

    // Date + Day
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayName = days[time.getDay()];
    
    let date = time.getDate();
    let month = time.getMonth() + 1;  // month starts from 0
    let year = time.getFullYear();

    // format __/__/____
    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + month : month;

    document.getElementById("date").innerHTML = `${dayName}, ${date}-${month}-${year}`;
}

setInterval(updateClock, 1000);
updateClock();
