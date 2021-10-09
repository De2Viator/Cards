



function slidePlugin(active) {
    const slides = document.querySelectorAll('.slide');

    slides[active].classList.add('active')

    function clearClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

    for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearClass();
        slide.classList.add('active')
    })
}
    
}

slidePlugin(1);




