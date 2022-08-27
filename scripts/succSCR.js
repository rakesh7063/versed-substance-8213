import {navBar,popup} from "../scripts/navbar.js"
document.getElementById("menu-bar").innerHTML = navBar();
import footer from "../scripts/footer.js"
document.getElementById("footer_append").innerHTML = footer();
popup()




setTimeout(function () {
    alert("Thanks for your help ");
}, 2000)
setTimeout(function () {
    window.location.href = "index.html";
}, 6000)

