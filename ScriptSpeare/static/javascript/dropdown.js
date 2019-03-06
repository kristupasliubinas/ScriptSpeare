function myFunctionDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it




function myFunctionSearch() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("coffeemySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("coffeemymyAdaptations");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function coffeefilterFunction(filter) {
  var   ul, i;
  if (filter == "ALL") {
    filter = ":";
  }
  ul = document.getElementById("coffeemyAdaptations");
  options = ul.getElementsByTagName("option");
  for (i = 0; i < options.length; i++) {
    if (options[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      options[i].style.display = "";
    } else {
      options[i].style.display = "none";
    }
  }
}
