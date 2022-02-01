const NOINPUTVALUE = "Please input Search Value.";

const RECTWIDTH = 54;
const CIRCLERADIUS = 30;
const RECTGAP = 15;

const TREEDEPTH = 5;
const LENGTH = 10;

const TOPPADDING = 35;
const LEFTPADDING = (1200 - (RECTWIDTH * LENGTH + RECTGAP * (LENGTH - 1))) / 2;
const HEIGHTGAP = 70;

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
    const g1 = document.createElementNS(NAMESPACEURI, "g");
    g1.setAttribute("class", `g${time}`);

    let rect = document.createElementNS(NAMESPACEURI, "rect");
    rect.setAttribute("x", index * RECTWIDTH + RECTGAP * index + LEFTPADDING);
    rect.setAttribute("y", TOPPADDING);
    rect.setAttribute("width", RECTWIDTH);
    rect.setAttribute("height", RECTWIDTH);

    let text = document.createElementNS(NAMESPACEURI, "text");
    text.setAttribute(
      "x",
      index * RECTWIDTH + RECTGAP * index + LEFTPADDING + RECTWIDTH / 2
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
  const pathGroup = document.createElementNS(NAMESPACEURI, "g");
  svg.appendChild(pathGroup);

  const rootNode = document.createElementNS(NAMESPACEURI, "circle");
  rootNode.setAttribute("cx", width / 2);
  rootNode.setAttribute("cy", TOPPADDING);
  rootNode.setAttribute("r", CIRCLERADIUS);

  const rootValue = document.createElementNS(NAMESPACEURI, "text");
  rootValue.setAttribute("x", width / 2);
  rootValue.setAttribute("y", TOPPADDING);
  rootValue.innerHTML = parseInt(Math.random() * 99, 0) + 1;

  const rootGroup = document.createElementNS(NAMESPACEURI, "g");
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
      let nodeGroup = document.createElementNS(NAMESPACEURI, "g");
      nodeGroup.setAttribute("class", `g${time}`);

      let circle = document.createElementNS(NAMESPACEURI, "circle");
      circle.setAttribute("cx", ww * (i2 * 2 + 1));
      circle.setAttribute("cy", hh);
      circle.setAttribute("r", CIRCLERADIUS);

      let nodeValue = document.createElementNS(NAMESPACEURI, "text");
      nodeValue.setAttribute("x", ww * (i2 * 2 + 1));
      nodeValue.setAttribute("y", hh);
      nodeValue.innerHTML = parseInt(Math.random() * 99, 0) + 1;

      nodeGroup.appendChild(circle);
      nodeGroup.appendChild(nodeValue);

      svg.appendChild(nodeGroup);

      let parentIndex = Math.floor(i2 / 2);
      let { x, y } = parents[parentIndex];
      let path = document.createElementNS(NAMESPACEURI, "path");
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
    const { type, text, events, options } = controller;

    const input = document.createElement("input");
    input.dataset.key = time;
    input.type = type;
    input.value = text;
    events.forEach(({ event, action }) => {
      input.addEventListener(event, action);
    });
    options.forEach(({ name, value }) => {
      input[name] = value;
    });

    control.appendChild(input);
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
