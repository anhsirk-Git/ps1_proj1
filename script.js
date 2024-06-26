var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var arrow = this.querySelector(".arrow");
    if (content.style.display === "block") {
      content.style.display = "none";
      arrow.classList.remove("up");
      arrow.classList.add("down");
    } else {
      content.style.display = "block";
      arrow.classList.remove("down");
      arrow.classList.add("up");
    }
  });
}
