function search() {
   const search = prompt("Looking for something.....?");
}
function menuBar() {

    const menuBar = document.querySelector ('.menuBar');
    menuBar.innerHTML = ('<i class="fa-solid fa-xmark"></i>');

    const menuTitle = document.querySelector('.phoneTitles');

    if(menuTitle.style.display === "none") {
        menuTitle.style.display = "flex";
    } else {
        menuTitle.style.display = "none";
        menuBar.innerHTML = ('<i class="fa-solid fa-bars"></i>');
    }
}