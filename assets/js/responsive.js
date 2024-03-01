//this script sets the column class for the main content based on the width of the window

const main_content = document.getElementById("main-content");

function setMainContentColumns(width){

    if (width.matches){
        main_content.classList.remove("col-10")
        main_content.classList.add("col-12")
    }
    else{
        main_content.classList.remove("col-12")
        main_content.classList.add("col-10")
    }
}

var width = window.matchMedia("(max-width: 1000px)")

setMainContentColumns(width)

width.addEventListener("change", function(){
    setMainContentColumns(width)
})