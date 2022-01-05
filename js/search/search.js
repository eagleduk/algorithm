import("../index.js");

const TREEDEPTH = 5;
const LENGTH = 17;
const SWAPTIME = 1000;

async function loadModule() {
  const name = globalThis.location.hash.slice(1);
  const { default: moduleJS } = await import(`./${name}.js`);
  document.querySelector("span#title").innerHTML = name;
  moduleJS();
}

globalThis.addEventListener("DOMContentLoaded", async (e) => {
  loadModule();
});

globalThis.addEventListener("hashchange", async (e) => {
  loadModule();
});

function render(isSort = false) {
  const svg = document.querySelector("svg");

  while (svg.hasChildNodes()) svg.removeChild(svg.firstChild);

  const arr = [];
  for (let i = 0; i < LENGTH; i++) {
    arr.push(parseInt(Math.random() * 99, 0) + 1);
  }

  if (isSort) arr.sort((a, b) => a - b);

  arr.forEach((value, index) => {
    const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");

    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", index * 50 + 15 * index + 100);
    rect.setAttribute("y", 100);
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 50);
    rect.setAttribute("stroke", "blue");
    rect.setAttribute("stroke-width", "2");
    rect.setAttribute("fill", "transparent");

    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", index * 50 + 15 * index + 100 + 25);
    text.setAttribute("y", 125);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("alignment-baseline", "central");
    text.setAttribute("font-size", "24px");
    text.innerHTML = value;

    g1.appendChild(rect);
    g1.appendChild(text);

    svg.appendChild(g1);
  });
}

function render1() {
  const svg = document.querySelector("svg");

  while (svg.hasChildNodes()) svg.removeChild(svg.firstChild);

  let parents = [];

  const width = svg.clientWidth;
  const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");

  const circle1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle1.setAttribute("cx", width / 2);
  circle1.setAttribute("cy", 40);
  circle1.setAttribute("r", 25);
  circle1.setAttribute("fill", "transparent");
  circle1.setAttribute("stroke-width", 5);
  circle1.setAttribute("stroke", "black");

  const text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text1.setAttribute("x", width / 2);
  text1.setAttribute("y", 40);
  text1.setAttribute("text-anchor", "middle");
  text1.setAttribute("alignment-baseline", "central");
  text1.setAttribute("font-size", "24px");
  text1.innerHTML = parseInt(Math.random() * 99, 0) + 1;
  g1.appendChild(circle1);
  g1.appendChild(text1);

  svg.appendChild(g1);
  parents.push({ x: width / 2, y: 40 });

  for (let i = 1; i < TREEDEPTH; i++) {
    let ww = width / Math.pow(2, i + 1);
    let hh = 40 + 70 * i;
    let temp = [];

    for (let i2 = 0; i2 < Math.pow(2, i); i2++) {
      let g = document.createElementNS("http://www.w3.org/2000/svg", "g");

      let circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", ww * (i2 * 2 + 1));
      circle.setAttribute("cy", hh);
      circle.setAttribute("r", 25);
      circle.setAttribute("fill", "transparent");
      circle.setAttribute("stroke-width", 5);
      circle.setAttribute("stroke", "black");

      let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", ww * (i2 * 2 + 1));
      text.setAttribute("y", hh);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("alignment-baseline", "central");
      text.setAttribute("font-size", "24px");
      text.innerHTML = parseInt(Math.random() * 99, 0) + 1;
      g.appendChild(circle);
      g.appendChild(text);

      svg.appendChild(g);

      let parentIndex = Math.floor(i2 / 2);
      let { x, y } = parents[parentIndex];
      let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M${x} ${y} L${ww * (i2 * 2 + 1)} ${hh}`);
      path.setAttribute("stroke-width", 2);
      path.setAttribute("stroke", "blue");

      g2.appendChild(path);

      temp.push({ x: ww * (i2 * 2 + 1), y: hh });
    }
    parents = temp;
  }

  svg.appendChild(g2);
}
