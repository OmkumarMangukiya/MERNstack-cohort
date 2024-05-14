const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
select.addEventListener("change", () =>{
  if(select.value === "Black") {
    update("black", "white");
  }
  else if(select.value === "White") {
    update("white", "black");
  }
  else if(select.value === "blue"){
      update("blue", "white");
  }

})
const password = document.querySelector('input[type="password"]');
const text = document.querySelector('input[type="text"]');
password.addEventListener("blur", (event) => {
    event.target.style.background = "pink";
});

password.addEventListener("focus", () => {
    event.target.style.background = "green";
});
text.addEventListener("blur", () => {
    event.target.style.background = "pink";
});

text.addEventListener("focus", () => {
    event.target.style.background = "green";
});
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
});




const body = document.querySelector("body");
const panel = document.createElement("div");
panel.setAttribute("class", "panel");
body.appendChild(panel);

const msg = document.createElement("p");
msg.textContent = "This is a msg pop-up";
panel.appendChild(msg);

const closBtn = document.createElement("button");
closBtn.textContent = "x";
panel.appendChild(closBtn);

closBtn.addEventListener("click", () => {
    panel.parentNode.removeChild(panel);
});


