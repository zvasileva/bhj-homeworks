const clicksCnt = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const width = cookie.width;
const height = cookie.height;
const clickSpeed = document.getElementById("clicker__speed");

clicksCnt.textContent = 0;
clickSpeed.textContent = 0;

let lastClickTime = new Date();


cookie.onclick = function() {
    clicksCnt.textContent++;
    if (cookie.width === width) {
        cookie.width = width * 1.2;
        cookie.height = height * 1.2;         
        const now = new Date();
        const timeDiff = Math.abs(now.getTime() - lastClickTime.getTime());
        const diffSec = timeDiff / 1000;
        clickSpeed.textContent = (1/diffSec).toFixed(2);      
        lastClickTime = now;
    } else {
        cookie.width = width;
        cookie.height = height;        
    }

}