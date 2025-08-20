const foods = document.getElementById("apple");
console.log(foods);
foods.innerText = "hello food";
foods.style.background = "green";
foods.style.color = "white";

const food_container = document.getElementById("f-container");
console.log(food_container);
// food_container.innerHTML = "<h2>wow</h2>";

const newSection = document.querySelectorAll(".new-section");
console.log(newSection);

const make_li = document.getElementById("make-li");
console.log(make_li);
const li = document.createElement("li");
li.innerText = "new li";

make_li.appendChild(li);
