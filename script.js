//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    var element = document.getElementById("level");
    var level = 0;
    while (element) {
        level++;
        element = element.parentElement;
    }
    alert("The level of the element is: " + level);
});
