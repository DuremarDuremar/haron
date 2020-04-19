let modalImg = document.querySelectorAll(".slider-img img");
let modal = document.querySelector(".main-modal");
let close = document.querySelector(".modal-close");

for (let item of modalImg) {
  item.onclick = function () {
    modal.style.display = "flex";
    item2 = item.cloneNode(true);
    document.querySelector(".modal-content").appendChild(item2);
    item2.className = "window";
  };
  close.onclick = function () {
    modal.style.display = "none";
    document.querySelector(".modal-content").removeChild(item2);
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.querySelector(".modal-content").removeChild(item2);
    }
  };
}
