const rotators = Array.from(document.querySelectorAll('.rotator'));

for (let i = 0; i < rotators.length; i++) {
    const rotatorCases = rotators[i].children;
    const firstRotator = rotators[i].firstElementChild;
    const lastRotator = rotators[i].lastElementChild;    

    function isActive(rotator, index, array) {
        if (!rotator.classList.contains('rotator__case_active')) {
            return;
        }            
        return rotator;
    }

    let activeRotatorCase = Array.from(rotatorCases).find(isActive);
    let activeRotatorSpeed = activeRotatorCase.getAttribute("data-speed");
    activeRotatorCase.style.color = activeRotatorCase.getAttribute("data-color");    
    let timerId;


    function setActiveRotatorCase(rotatorCase) {
        if (activeRotatorCase) {
            activeRotatorCase.classList.remove('rotator__case_active');
        }
        activeRotatorCase = rotatorCase;
        activeRotatorCase.classList.add('rotator__case_active');
        activeRotatorCase.style.color = activeRotatorCase.getAttribute("data-color");
        activeRotatorSpeed = activeRotatorCase.getAttribute("data-speed");
        if (activeRotatorCase === lastRotator) {
            clearInterval(timerId);
            timerId = setInterval(() => setActiveRotatorCase(firstRotator), activeRotatorSpeed);
        } else {
            clearInterval(timerId);
            timerId = setInterval(() => setActiveRotatorCase(activeRotatorCase.nextElementSibling), activeRotatorSpeed);
        }        
    }  
    
    timerId = setInterval(() => {
        if (activeRotatorCase === lastRotator) {
            setActiveRotatorCase(firstRotator);
        } else {
            setActiveRotatorCase(activeRotatorCase.nextElementSibling);
        }
    }, activeRotatorSpeed);


}
