const TOPPADDING = -40;
const LEFTPADDING = -160;
const CIRCLERADUIS = 25;

const connections = {
  nodes: [
    {
      id: "A",
      location: {
        x: 200 + LEFTPADDING,
        y: 200 + TOPPADDING,
      },
    },
    {
      id: "B",
      location: {
        x: 500 + LEFTPADDING,
        y: 100 + TOPPADDING,
      },
    },
    {
      id: "C",
      location: {
        x: 800 + LEFTPADDING,
        y: 100 + TOPPADDING,
      },
    },
    {
      id: "D",
      location: {
        x: 480 + LEFTPADDING,
        y: 250 + TOPPADDING,
      },
    },
    {
      id: "E",
      location: {
        x: 650 + LEFTPADDING,
        y: 300 + TOPPADDING,
      },
    },
    {
      id: "F",
      location: {
        x: 380 + LEFTPADDING,
        y: 380 + TOPPADDING,
      },
    },
    {
      id: "G",
      location: {
        x: 590 + LEFTPADDING,
        y: 420 + TOPPADDING,
      },
    },
    {
      id: "H",
      location: {
        x: 800 + LEFTPADDING,
        y: 360 + TOPPADDING,
      },
    },
    {
      id: "I",
      location: {
        x: 520 + LEFTPADDING,
        y: 550 + TOPPADDING,
      },
    },
  ],
  paths: [
    {
      to: "A",
      from: "B",
      text: {
        x: 350 + LEFTPADDING,
        y: 130 + TOPPADDING,
      },
    },
    {
      to: "A",
      from: "D",
      text: {
        x: 350 + LEFTPADDING,
        y: 210 + TOPPADDING,
      },
    },
    {
      to: "A",
      from: "F",
      text: {
        x: 310 + LEFTPADDING,
        y: 285 + TOPPADDING,
      },
    },
    {
      to: "B",
      from: "C",
      text: {
        x: 660 + LEFTPADDING,
        y: 80 + TOPPADDING,
      },
    },
    {
      to: "B",
      from: "D",
      text: {
        x: 510 + LEFTPADDING,
        y: 180 + TOPPADDING,
      },
    },
    {
      to: "B",
      from: "E",
      text: {
        x: 590 + LEFTPADDING,
        y: 195 + TOPPADDING,
      },
    },
    {
      to: "C",
      from: "E",
      text: {
        x: 705 + LEFTPADDING,
        y: 195 + TOPPADDING,
      },
    },
    {
      to: "C",
      from: "H",
      text: {
        x: 785 + LEFTPADDING,
        y: 230 + TOPPADDING,
      },
    },
    {
      to: "D",
      from: "E",
      text: {
        x: 550 + LEFTPADDING,
        y: 290 + TOPPADDING,
      },
    },
    {
      to: "D",
      from: "F",
      text: {
        x: 410 + LEFTPADDING,
        y: 305 + TOPPADDING,
      },
    },
    {
      to: "E",
      from: "G",
      text: {
        x: 600 + LEFTPADDING,
        y: 350 + TOPPADDING,
      },
    },
    {
      to: "F",
      from: "G",
      text: {
        x: 490 + LEFTPADDING,
        y: 385 + TOPPADDING,
      },
    },
    {
      to: "F",
      from: "I",
      text: {
        x: 470 + LEFTPADDING,
        y: 460 + TOPPADDING,
      },
    },
    {
      to: "G",
      from: "H",
      text: {
        x: 690 + LEFTPADDING,
        y: 375 + TOPPADDING,
      },
    },
    {
      to: "H",
      from: "I",
      text: {
        x: 670 + LEFTPADDING,
        y: 470 + TOPPADDING,
      },
    },
  ],
};

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

function renderModule(controllers, time) {
  renderControl(controllers, time);
  render(time);
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

function render(time) {
  const { nodes, paths } = connections;

  const nodeElement = document.querySelector("g#nodes");

  while (nodeElement.hasChildNodes())
    nodeElement.removeChild(nodeElement.firstChild);

  nodes.forEach(({ id, location: { x: cx, y: cy } }) => {
    const circle = document.createElementNS(NAMESPACEURI, "circle");

    circle.id = id;
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", CIRCLERADUIS);
    circle.setAttribute("class", `c${time}`);
    circle.dataset.targets = "";

    const label = document.createElementNS(NAMESPACEURI, "text");
    label.setAttribute("x", cx);
    label.setAttribute("y", cy);
    label.setAttribute("class", `l${time}`);
    label.innerHTML = id;
    //label.id = `${id}_label`;

    nodeElement.appendChild(circle);
    nodeElement.appendChild(label);
  });

  const pathElement = document.querySelector("g#paths");

  while (pathElement.hasChildNodes())
    pathElement.removeChild(pathElement.firstChild);

  paths.forEach(({ to, from, text: { x, y } }) => {
    const toElement = document.querySelector(`circle#${to}.c${time}`);
    const fromElement = document.querySelector(`circle#${from}.c${time}`);

    const value = Math.floor(Math.random() * 8) + 1;

    toElement.dataset.targets += from;
    fromElement.dataset.targets += to;

    const { cx: toX, cy: toY } = toElement.attributes;
    const { cx: fromX, cy: fromY } = fromElement.attributes;

    const line = document.createElementNS(NAMESPACEURI, "path");
    line.setAttribute(
      "d",
      `M${fromX.value} ${fromY.value} ${toX.value} ${toY.value}`
    );
    line.setAttribute("class", `p${time}`);
    line.dataset.nodes = `${from},${to}`;
    line.dataset.value = value;
    line.id = `from${from}_to${to}_path`;

    const text = document.createElementNS(NAMESPACEURI, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("class", `value v${time}`);
    text.innerHTML = value;
    text.dataset.nodes = `${from},${to}`;
    text.dataset.value = value;
    text.id = `from${from}_to${to}_text`;

    pathElement.appendChild(line);
    pathElement.appendChild(text);
  });
}
