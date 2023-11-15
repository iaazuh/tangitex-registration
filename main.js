var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "0px";
    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px") 
            {
                MenuItems.style.maxHeight = "200px";
            }
        else
            {
                MenuItems.style.maxHeight = "0px";
            }
    }
let dropdown=document.getElementById("popup")

function openPopup(){
    dropdown.classList.add("open-popup");
}
function closePopup(){
    dropdown.classList.remove("open-popup");
    modal.classList.remove("open-modal");
}

let modal=document.getElementById("modal")

function openModal(){
    modal.classList.add("open-modal");
}
function closeModal(){
    modal.classList.remove("open-modal");
    dropdown.classList.remove("open-popup");
}