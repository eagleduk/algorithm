const TOPPADDING = 35;
const HEIGHTGAP = 70;

const RECTWIDTH = 54;
const CIRCLERADIUS = 30;

const TREEDEPTH = 5;
const LENGTH = 17;
const SWAPTIME = 1000;

async function loadModule() {
  const name = globalThis.location.hash.slice(1);
  const { default: moduleJS } = await import(`./${name}.js`);
  document.querySelector("li.selected")?.classList.remove("selected");
  document.querySelector(`#${name}`).classList.add("selected");
  document.querySelector("span#title").innerHTML = name;
  moduleJS();
}

globalThis.addEventListener("DOMContentLoaded", async (e) => {
  loadModule();
});

globalThis.addEventListener("hashchange", async (e) => {
  loadModule();
});

function renderArray(time, isSort = false) {
  const svg = document.querySelector("svg#search");

  while (svg.hasChildNodes()) svg.removeChild(svg.firstChild);

  const arr = [];
  for (let i = 0; i < LENGTH; i++) {
    arr.push(parseInt(Math.random() * 99, 0) + 1);
  }

  if (isSort) arr.sort((a, b) => a - b);

  arr.forEach((value, index) => {
    const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g1.setAttribute("class", `g${time}`);

    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", index * RECTWIDTH + 15 * index + 100);
    rect.setAttribute("y", TOPPADDING);
    rect.setAttribute("width", RECTWIDTH);
    rect.setAttribute("height", RECTWIDTH);

    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute(
      "x",
      index * RECTWIDTH + 15 * index + 100 + RECTWIDTH / 2
    );
    text.setAttribute("y", TOPPADDING + RECTWIDTH / 2);
    text.innerHTML = value;

    g1.appendChild(rect);
    g1.appendChild(text);

    svg.appendChild(g1);
  });
}

function renderTree(time) {
  const svg = document.querySelector("svg#search");

  while (svg.hasChildNodes()) svg.removeChild(svg.firstChild);

  let parents = [];

  const width = svg.clientWidth;
  const pathGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svg.appendChild(pathGroup);

  const rootNode = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  rootNode.setAttribute("cx", width / 2);
  rootNode.setAttribute("cy", TOPPADDING);
  rootNode.setAttribute("r", CIRCLERADIUS);

  const rootValue = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  rootValue.setAttribute("x", width / 2);
  rootValue.setAttribute("y", TOPPADDING);
  rootValue.innerHTML = parseInt(Math.random() * 99, 0) + 1;

  const rootGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  rootGroup.setAttribute("class", `g${time}`);
  rootGroup.appendChild(rootNode);
  rootGroup.appendChild(rootValue);

  svg.appendChild(rootGroup);
  parents.push({ x: width / 2, y: TOPPADDING });

  for (let i = 1; i < TREEDEPTH; i++) {
    let ww = width / Math.pow(2, i + 1);
    let hh = TOPPADDING + HEIGHTGAP * i;
    let temp = [];

    for (let i2 = 0; i2 < Math.pow(2, i); i2++) {
      let nodeGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      );
      nodeGroup.setAttribute("class", `g${time}`);

      let circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", ww * (i2 * 2 + 1));
      circle.setAttribute("cy", hh);
      circle.setAttribute("r", CIRCLERADIUS);

      let nodeValue = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      nodeValue.setAttribute("x", ww * (i2 * 2 + 1));
      nodeValue.setAttribute("y", hh);
      nodeValue.innerHTML = parseInt(Math.random() * 99, 0) + 1;

      nodeGroup.appendChild(circle);
      nodeGroup.appendChild(nodeValue);

      svg.appendChild(nodeGroup);

      let parentIndex = Math.floor(i2 / 2);
      let { x, y } = parents[parentIndex];
      let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M${x} ${y} L${ww * (i2 * 2 + 1)} ${hh}`);

      pathGroup.appendChild(path);

      temp.push({ x: ww * (i2 * 2 + 1), y: hh });
    }
    parents = temp;
  }
}

function renderControl(controllers = [], time) {
  const control = document.querySelector("article");

  while (control.hasChildNodes()) control.removeChild(control.firstChild);

  controllers.forEach((controller) => {
    const { type, text, events } = controller;

    const button = document.createElement("input");
    button.dataset.key = time;
    button.type = type;
    button.value = text;
    events.forEach(({ event, action }) => {
      button.addEventListener(event, action);
    });

    control.appendChild(button);
  });
}

function renderArrayModule(controllers, time, isSort) {
  renderControl(controllers, time);
  renderArray(time, isSort);
}

function renderTreeModule(controllers, time) {
  renderControl(controllers, time);
  renderTree(time);
}
