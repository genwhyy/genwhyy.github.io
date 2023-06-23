const sharks = document.querySelectorAll('.page2Sharks > div'); // создаем константу с div`ами акул(в древе чекнешь)

sharks.forEach(shark => { //для каждого дива
    let info = shark.querySelector(".infoShark"); //создать переменную с блоком информации

    shark.style.transitionDuration = ".3s"; // задаем всему блоку (не только с инфой) плавный переход

    shark.addEventListener("mouseover", (e)=>{ // при наведении
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "1"; // блок с инфой становится непрозрачным
        shark.style.scale = "1.2" // увеличиваем весь блок, соответственно блок с инфой становится тоже больше

    });
    shark.addEventListener("mouseout", (e)=>{ // при отведении курсора
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "0"; // инфа прозрачная
        shark.style.scale = "1" // дефолт размеры
    })
});