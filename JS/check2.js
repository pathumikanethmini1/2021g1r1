function correct() {
    var get = document.querySelector('input[name="result"]:checked');
    if (get == null) {
    }
    else {
        if (get.value == "A2") {
            var parent = get.parentElement;
            parent.classList.add("correct");
            var next = document.getElementById("net"); // get next button
            next.style.display = "block";
            parent.children[2].style.display = "block";
            document.querySelector("#congratulation").style.display = "block"; // if last challenge then show it
            document.querySelector("#main-content").style.display = "none";
        }
        else {
            var parent = get.parentElement;
            parent.classList.add("incorrect");
            parent.children[3].style.display = "block";
        }
    }
}