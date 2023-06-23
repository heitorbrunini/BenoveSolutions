$(document).ready(function () {

    // Progress bar
    let progressBarA = document.getElementById("progressA");
    let progressBarB = document.getElementById("progressB");
    let progressBarC = document.getElementById("progressC");
    let progressBarD = document.getElementById("progressD");

    let dataAreaOffset = document.getElementById("data-area");
    let stop = 0;


    window.addEventListener('scroll', function () {

        let scroll = window.pageYOffset;

        if (scroll / dataAreaOffset.offsetTop > 0.62 && stop == 0) {
            progressBarA.style.width = '100%';
            progressBarB.style.width = '100%';
            progressBarC.style.width = '100%';
            progressBarD.style.width = '100%';
            stop = 1;
        }


    })

    setTimeout(function (params) {
        $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png' });
        $('#apply-area').parallax({ imageSrc: 'img/pattern.png' });
    })

    //filtro
    $('.filter-btn').on(click, function (e) {
        let type = $(this).attr('id');
        let boxes = $('.project-box');
    })

})