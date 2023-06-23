const seals = document.querySelectorAll('.page3Seal > div'); // создаем константу с div`ами 

seals.forEach(seal => { //для каждого дива
    let info = seal.querySelector(".infoSeal"); //создать переменную с блоком информации

    seal.style.transitionDuration = ".3s"; // задаем всему блоку (не только с инфой) плавный переход

    seal.addEventListener("mouseover", (e)=>{ // при наведении
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "1";
        seal.style.scale = "1.2" 

    });
    seal.addEventListener("mouseout", (e)=>{ // при отведении курсора
        e.preventDefault(); // обнуляем стандартные обработчики
        info.style.opacity = "0"; 
        seal.style.scale = "1" 
    })
});
