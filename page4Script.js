const seals = document.querySelectorAll('.page3Seal > div'); // создаем константу с div`ами акул(в древе чекнешь)

seals.forEach(seal => { //для каждого дива
    let info = seal.querySelector(".infoSeal"); //создать переменную с блоком информации

    seal.style.transitionDuration = ".3s"; // задаем всему блоку (не только с инфой) плавный переход

    seal.addEventListener("mouseover", (e)=>{ // при наведении
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "1"; // блок с инфой становится непрозрачным
        seal.style.scale = "1.2" // увеличиваем весь блок, соответственно блок с инфой становится тоже больше

    });
    seal.addEventListener("mouseout", (e)=>{ // при отведении курсора
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "0"; // инфа прозрачная
        seal.style.scale = "1" // дефолт размеры
    })
});