
/*--caroussel da Home--*/
function caroussel(){
    const carousselContainer = document.querySelector(".caroussel-container");
    const slider = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let cloneList;

    const speed = 1;
    const width = slider.offsetWidth;

    let x = 0;
    let x2 = width;

    console.log(slider);

    function clone(){
        cloneList = slider.cloneNode(true);
        carousselContainer.appendChild(cloneList);
        cloneList.style.left = `${width}px`;
    }
    console.log(cloneList);

    function moveFirst(){
        x -= speed;

        if(width >= Math.abs(x)){
            slider.style.left = `${x}px`;

        }else{
            x = width;
        }
    }

    function moveSecond(){
        x2 -= speed;

        if(cloneList.offsetWidth >= Math.abs(x2)){
            cloneList.style.left = `${x2}px`
        }else{
            x2 = width;
        }
    }
    
    function hover(){
        clearInterval(a);
        clearInterval(b);

    }
    function unhover(){
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }
    
    clone();
    
    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);
    
    carousselContainer.addEventListener("mouseenter", hover);
    carousselContainer.addEventListener("mouseleave", unhover);

    
}

caroussel();
