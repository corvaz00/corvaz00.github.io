function myFunction(x) {
    x.classList.toggle("change");
    var nav = document.getElementById("myNav");
    var width = window.innerWidth;
    
    if (width >= 561 && width <= 820) {
        if (nav.style.width === "350px") {
            nav.style.width = "0";
        } else {
            nav.style.width = "350px";
        }
    } else if (width <= 560) {
        if (nav.style.width === "250px") {
            nav.style.width = "0";
        } else {
            nav.style.width = "250px";
        }
    } else {
        if (nav.style.width === "250px") {
            nav.style.width = "0";
        } else {
            nav.style.width = "250px";
        }
    }
}


function closeNav() {
    document.getElementById("myNav").style.width = "0";
}

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})