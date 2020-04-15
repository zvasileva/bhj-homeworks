const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let activeTooltip;

function insertTooltip (element) {
    activeTooltip = document.querySelector( '.tooltip');
    if (activeTooltip) {
        if (activeTooltip === element.nextElementSibling) {
            activeTooltip.remove();
            return;
        }
        activeTooltip.remove();
    }     

    const tooltipText = element.getAttribute("title");
    element.insertAdjacentHTML("afterEnd",`<div class="tooltip" style="left: 0; top: 0">${tooltipText}</div>`);
    activeTooltip = document.querySelector( '.tooltip');
    const activeTooltipLeft = element.getBoundingClientRect().left;
    const activeTooltipTop = element.getBoundingClientRect().bottom; 
    activeTooltip.style.display = 'block';
    activeTooltip.style.left = activeTooltipLeft + 'px';
    activeTooltip.style.top = activeTooltipTop + 'px';
}

for (let i = 0; i < hasTooltips.length; i++) {
    hasTooltips[i].addEventListener('click', e => {
        e.preventDefault();
        insertTooltip (hasTooltips[i]);       
      }
    );    

}
