//get button
mybotton=document.getElementById("myBtn");

//when the user scroll 20px from top of the document

window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop >20){
        mybotton.style.display="block";
    }else{
        mybotton.style.display="none";
    }
}


function topFunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
var loder=document.getElementById("perloader");
    
    // window.addEventListener("load",function(){
    //   loder.style.display="none";
    // })
    

    function myFunction(){
     setTimeout(()=>{loder.style.display='none';},3000);
        
    }
$(document).ready(function(){
    $('#exampleModal').modal('show');
})

function videoUrl(mpic) {
    document.getElementById("slide").src = mpic;
}

