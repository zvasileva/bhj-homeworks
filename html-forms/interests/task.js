const interests = Array.from(document.querySelectorAll('.interest'));

for (let i = 0; i < interests.length; i++) {
    const elems = Array.from(interests[i].querySelectorAll('.interest__check'));
    
    elems[0].addEventListener('change', e => {
        if (elems[0].checked) {
            for (elem of elems) {
                elem.checked = true;
            }        
        } else if (!elems[0].checked) {
            for (elem of elems) {
                elem.checked = false;
            }        
        }  
      }
    ); 

}