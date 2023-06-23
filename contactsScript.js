const message = document.querySelector('#submit');

function accept(){
    alert('Sent!!');
}
message.addEventListener("click", (e)=>{ // предыдущийСлайдКнопка вешать ивент слушатель на щелкчок
    e.preventDefault(); // обнуляем(0) все стандартные обработчики событий (iventzz)
    accept(); // вызываем смену слайда
});