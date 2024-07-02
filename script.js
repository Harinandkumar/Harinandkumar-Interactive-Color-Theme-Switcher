function change(color) {
  document.body.style.backgroundColor = color;
  let abc = document.getElementsByClassName("samecolor");
  if (color == "#000000") {
    for (let i of abc) {
      i.style.color = "white";
    }
  } else {
    for (let i of abc) {
      i.style.color = "black";
    }
  }
}
