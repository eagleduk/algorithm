const TOPPADDING = 0;
const LEFTPADDING = 10;

const CIRCLERADUIS = 25;

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

function render(connections, time) {
  const svg = document.querySelector("svg#spp");

  while (svg.hasChildNodes()) svg.removeChild(svg.firstChild);

  const lineGroup = document.createElementNS(NAMESPACEURI, "g");
  lineGroup.id = `lineGroup`;
  svg.appendChild(lineGroup);

  connections.forEach(({ id, location: { x: cx, y: cy }, connect, events }) => {
    const contentGroup = document.createElementNS(NAMESPACEURI, "g");
    contentGroup.setAttribute("class", `g${time}`);
    contentGroup.id = id;

    const targets = [];
    const circle = document.createElementNS(NAMESPACEURI, "circle");

    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", CIRCLERADUIS);
    circle.setAttribute("class", `c${time}`);
    events.forEach(({ type, action }) => {
      circle.addEventListener(type, action);
    });

    const label = document.createElementNS(NAMESPACEURI, "text");
    label.setAttribute("x", cx);
    label.setAttribute("y", cy);
    label.setAttribute("class", `l${time}`);
    label.innerHTML = id;
    label.id = `${id}_label`;
    events.forEach(({ type, action }) => {
      label.addEventListener(type, action);
    });

    connect.forEach(({ target, path, value, position: { x, y } }) => {
      const line = document.createElementNS(NAMESPACEURI, "path");
      line.setAttribute("d", path);
      line.setAttribute("class", `arrow p${time}`);
      line.id = `from${id}_to${target}_path`;

      const text = document.createElementNS(NAMESPACEURI, "text");
      text.setAttribute("x", x);
      text.setAttribute("y", y);
      text.setAttribute("class", `value v${time}`);
      text.innerHTML = Math.floor(Math.random() * 8) + 1;
      text.id = `from${id}_to${target}_text`;

      lineGroup.appendChild(line);
      lineGroup.appendChild(text);
      targets.push(target);
    });

    circle.dataset.targets = targets.join(",");

    contentGroup.appendChild(circle);
    contentGroup.appendChild(label);
    svg.appendChild(contentGroup);
  });
}

function renderModule(controllers, connections, time) {
  renderControl(controllers, time);
  render(connections, time);
}
