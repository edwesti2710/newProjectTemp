let respBtn = document.querySelector('.respIcoNavBar')
respBtn.addEventListener("click", showMenu);

const lis = document.querySelectorAll('.navBar li');
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", showMenu);
}


function showMenu() {
    var menu = document.querySelector(".navBar");
    menu.classList.toggle("active");
}