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
    $('.filter-btn').on('click', function (e) {

        //animação botão
        let type = $(this).attr('id');
        let boxes = $('.project-box');
        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        switch (type) {
            case "seo-btn":
                eachBox("seo",boxes)
                break;
            case "dev-btn":
                eachBox("dev",boxes)
                break;
            case "dsn-btn":
                eachBox("dsg",boxes)
                break;
            case "all-btn":
                eachBox("all",boxes)
                break;
            default:
                break;
        }
    })

    function eachBox(type,boxes) {
        if (type=='all') {
            $(boxes).fadeIn();
        }else{
            $(boxes).each(function (params) {
                if ( !$(this).hasClass(type) ) {
                    $(this).fadeOut('slow');
                }else{
                    $(this).fadeIn();
                }
            })
        }
    }

})