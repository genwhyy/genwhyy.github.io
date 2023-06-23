const slides = document.querySelectorAll('.slide'), 
prevBtn = document.querySelector('#prevBtn'),
nextBtn = document.querySelector('#nextBtn');

slides[0].classList.add('active');
//slider
function changeSlide(){ // выносим смену первого и второго слайда в отдельную фукнцию, чтобы не повторять код дважды
    if(slides[0].classList.contains("active")){ // если первый слайд активный
        slides[0].classList.remove("active"); // больше не активный
        slides[1].classList.add("active"); // а второй активный)0)
    }
    else{ // иначе
        slides[0].classList.add("active"); // первый активни
        slides[1].classList.remove("active"); // а второй нит)
    }
};
prevBtn.addEventListener("click", (e)=>{ // предыдущийСлайдКнопка вешать ивент слушатель на щелкчок
    e.preventDefault(); // обнуляем(0) все стандартные обработчики событий (iventzz)
    changeSlide(); // вызываем смену слайда
});
nextBtn.addEventListener("click", (e)=>{ // все то же самое 
    e.preventDefault();
    changeSlide();
});

