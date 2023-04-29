$(document).ready(function () {

    // Progress bar
    let progressBarA = document.getElementById("progressA");
    let progressBarB = document.getElementById("progressB");
    let progressBarC = document.getElementById("progressC");
    let progressBarD = document.getElementById("progressD");

    let dataAreaOffset = document.getElementById("data-area");
    let stop = 0;


    window.addEventListener('scroll', function (){
       
        let scroll = window.pageYOffset;
        console.log("scroll "  + scroll);
        console.log(dataAreaOffset.offsetTop);

        if (scroll > (dataAreaOffset.offsetTop - 700) && stop == 0) {
            progressBarA.style.width = '100%';
            progressBarB.style.width = '100%';
            progressBarC.style.width = '100%';
            progressBarD.style.width = '100%';
            stop = 1;
        }


    })



}

)