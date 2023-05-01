class effectsController{

    constructor(){
        this._progressBarA = document.getElementById("progressA");
        this._progressBarB = document.getElementById("progressB");
        this._progressBarC = document.getElementById("progressC");
        this._progressBarD = document.getElementById("progressD");
        this._dataAreaOffset = document.getElementById("data-area");
        this._applyAreaOffset = document.getElementById("apply-area");

        window.addEventListener('scroll', (e) =>{
       
            let scroll = window.pageYOffset;
            
            if ( scroll / dataAreaOffset.offsetTop > 0.62  && stop == 0) {
                progressBarA.style.width = '100%';
                progressBarB.style.width = '100%';
                progressBarC.style.width = '100%';
                progressBarD.style.width = '100%';
                stop = 1;
            }
        })

        

        $(document).ready(() => {
            setTimeout(() => {
              this._dataAreaOffset.parallax({imageSrc:'img/cidadeparallax.png'});
              this._applyAreaOffset.parallax({imageSrc:'img/pattern.png'});
            });
        });

    }

    
}