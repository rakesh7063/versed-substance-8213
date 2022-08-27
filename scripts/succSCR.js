import {navBar,popup} from "../scripts/navbar.js"
document.getElementById("menu-bar").innerHTML = navBar();
import footer from "../scripts/footer.js"
document.getElementById("footer_append").innerHTML = footer();
popup()




setTimeout(function () {
    alert("congratulations ! Your order is placed ");
}, 2000)
setTimeout(function () {
    alert("continue shopping...");
    window.location.href = "index.html";
}, 6000)

