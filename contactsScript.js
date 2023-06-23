const message = document.querySelector('#submit');

function accept(){
    alert('Sent!!');
}
message.addEventListener("click", (e)=>{
    e.preventDefault(); 
    accept(); 
});
