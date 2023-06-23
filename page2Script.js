const sharks = document.querySelectorAll('.page2Sharks > div'); // создаем константу с div`ами акул

sharks.forEach(shark => { //для каждого дива
    let info = shark.querySelector(".infoShark"); //создать переменную с блоком информации

    shark.style.transitionDuration = ".3s"; // задаем всему блоку (не только с инфой) плавный переход

    shark.addEventListener("mouseover", (e)=>{ // при наведении
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "1"; 
        shark.style.scale = "1.2" 

    });
    shark.addEventListener("mouseout", (e)=>{ // при отведении курсора
        e.preventDefault(); 
        info.style.opacity = "0"; 
        shark.style.scale = "1" 
    })
});
