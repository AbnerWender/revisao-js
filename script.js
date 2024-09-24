var itemCardCar = document.querySelector(".card-car");
var btnCardCar = itemCardCar.querySelector("button");


btnCardCar.addEventListener('click', function(){
    itemCardCar.classList.toggle('ativo');
});