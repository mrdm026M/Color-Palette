for (let index = 0; index < 5; index++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.classList.add("box-" + index);
  document.querySelector(".main-colors").appendChild(box);
  for (let i = 0; i < 1; i++) {
    const color = document.createElement("div");
    color.classList.add("color");
    document.querySelector(".box-" + index).appendChild(color);
  }
}

const button = document.querySelector(".btn");
const color_block = document.querySelectorAll(".color");

function generate_Color() {
  var chars = "0123456789abcdef";
  var color_length = 6;
  var color = "";

  for (let i = 0; i < color_length; i++) {
    var random_color = Math.floor(Math.random() * chars.length);
    color += chars.substring(random_color, random_color + 1);
  }
  return "#" + color;
}
function add_Color() {
  color_block.forEach((e) => {
    console.log(color_block);
    var new_Color = generate_Color();
    e.style.backgroundColor = new_Color;
    e.innerHTML = new_Color;
  });
}
