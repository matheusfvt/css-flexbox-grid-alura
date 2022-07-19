const menu = document.querySelector(".menu-lateral");
const botaoMenu = document.querySelector(".header-botao-menu");
console.log("testando js");

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-lateral-ativo");
});
