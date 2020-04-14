const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener ('submit', (e) => {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    //url = form.getAttribute("action");

    request.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');

    request.upload.addEventListener("loadstart", function(e){
        console.log("start");
      }, false);   

    request.upload.addEventListener("progress", function(e){
        if (e.lengthComputable) {
          progress.value = (+(e.loaded) / +(e.total)).toFixed(1);
        }
      }, false);   
         
     request.upload.addEventListener("loadend", function(e){
        console.log("end");
      }, false);         

    request.send(formData);

    e.preventDefault();


})



