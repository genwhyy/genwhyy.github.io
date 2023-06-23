const fishes = document.querySelectorAll('.page4Fish > div'); // создаем константу с div`ами 

fishes.forEach(shark => { //для каждого дива
    let info = shark.querySelector(".infoFish"); //создать переменную с блоком информации

    shark.style.transitionDuration = ".3s"; // задаем всему блоку (не только с инфой) плавный переход

    shark.addEventListener("mouseover", (e)=>{ // при наведении
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "1"; 
        shark.style.scale = "1.2" 

    });
    shark.addEventListener("mouseout", (e)=>{ // при отведении курсора
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "0"; 
        shark.style.scale = "1" 
    })
});
