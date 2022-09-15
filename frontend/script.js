function loadEvent() {
    const newCatbutton = document.querySelector(".add-cat");
    newCatbutton.addEventListener("click",function () {
        const catContainer = document.querySelector(".cats");
        const newCat = '<img src="https://cataas.com/cat" alt="">';
        catContainer.innerHTML+-newCat;
})
}

window.addEventListener("load", loadEvent);