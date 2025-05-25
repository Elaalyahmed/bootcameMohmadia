let color = null;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#sidebar > *");
let fill_blocks = document.querySelectorAll("#main > *");
let clear_button = document.getElementsByTagName("button")[0];

clear_button.addEventListener("click", function () {
  for (fi_block of fill_blocks) {
    fi_block.style.backgroundColor = "white";
  }
});

body.addEventListener("mousedown", function () {
  mousedown = true;
})

body.addEventListener("mouseup", function () {
  mousedown = false;
})


for (col_block of color_blocks) {
  col_block.addEventListener("click", function (event) {
    color = event.target.style.backgroundColor;
  });
}

for (fi_block of fill_blocks) {
  fi_block.addEventListener("mousedown", function (event) {
    if (color != null) event.target.style.backgroundColor = color;
  });
  fi_block.addEventListener("mouseover", function (event) {
    if (mousedown && color != null) event.target.style.backgroundColor = color;
  });
}
