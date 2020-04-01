const cntClick = document.getElementById("dead");  
const cntNotClick = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
        const hole = document.getElementById("hole" + i); 
        hole.onclick = function () {
            if (hole.className.includes('hole_has-mole'))  {
                cntClick.textContent++;
                if (cntClick.textContent >= 10) {
                    alert("Победа!");
                    cntClick.textContent = 0;
                    cntNotClick.textContent = 0;
                }
            } else {
                cntNotClick.textContent++;
                if (cntNotClick.textContent >= 5) {
                    alert("Вы проиграли!");
                    cntClick.textContent = 0;
                    cntNotClick.textContent = 0;
                }                
            }  
        }
}










