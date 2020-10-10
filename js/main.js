console.log(1)

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modal = document.querySelector(".close");

/*cartButton.addEventListener('click', function (event) {
  console.log('Ты кликнул по кнопке! Как ты посмел!');*/

cartButton.addEventListener('click', function (event) {
  modal.classList.add("is-open");
});

close.addEventListener('click', function (event) {
  mя же архивировала свойя
}); 

/*function toggleModal() {
  modal.classList.add("is-open")
}*/

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);
 
function toggleModal() {
  modal.classList.toggle("is-open")
}
