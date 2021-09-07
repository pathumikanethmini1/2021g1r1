function checke() {
    // var radios = document.getElementsByName('result');
    var get = document.querySelector('input[name="result"]:checked'); // get checked radio button
    // var parent = get.parentElement;
    // console.log(get);
    if (get == null) {
      // if result is null
      // alert("please fill the aswer");
    } else {
      if (get.value == "A4") {
        // if answer is corrrect
        // alert("answer is correct");
        var parent = get.parentElement; // get parent element
        parent.classList.add("correct"); // add correct style class
        var next = document.getElementById("net"); // get next button
        next.style.display = "block"; // diplay the next button
        document.querySelector(".A4  #correct.material-icons").style.display =
          "block"; // display answer is correct
        document.querySelector("#congratulation").style.display = "block"; // if last challenge then show it
        document.querySelector("#main-content").style.display = "none"; // if last challenge the body conten is hide
      } else {
        // alert("answer is not correct");
  
        var parent = get.parentElement; // get parent
        parent.classList.add("incorrect"); // add incorret class
  
        switch (get.value) {
          case "A1":
            parent.parentElement.children[[1]].children[1].style.display =
              "block";
            break;
          case "A3":
            // console.log(parent.parentElement.children[[5]]);
            parent.parentElement.children[[5]].children[1].style.display =
              "block";
            break;
          case "A2":
            parent.parentElement.children[[3]].children[1].style.display =
              "block";
            break;
        }
      }
    }
  }
  
  document.getElementById("btn-contune").onclick = function () {
    window.location = "./index.html";
  };
  