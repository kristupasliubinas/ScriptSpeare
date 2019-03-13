function coffeemyFunctionDrop() {
  document.getElementById("coffeemyDropdown").classList.toggle("coffeeshow");
}


function coffeemyFunctionSearch() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("coffeemySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("coffeemyAdaptations");
  options = ul.getElementsByTagName("a");
  for (i = 0; i < options.length; i++) {
    if (options[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      options[i].style.display = "";
    } else {
      options[i].style.display = "none";
    }
  }
}

function coffeefilterFunction(filter) {
  var   ul, i;
  if (filter == "ALL") {
    filter = ":";
  }
  ul = document.getElementById("coffeemyAdaptations");
  options = ul.getElementsByTagName("a");
  for (i = 0; i < options.length; i++) {
    if (options[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      options[i].style.display = "";
    } else {
      options[i].style.display = "none";
    }
  }
}
