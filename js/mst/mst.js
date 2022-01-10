import("../index.js");

const left = 100;
const r = 25;

const connections = {
  nodes: [
    {
      id: "A",
      location: {
        x: 200 + left,
        y: 200,
      },
    },
    {
      id: "B",
      location: {
        x: 500 + left,
        y: 100,
      },
    },
    {
      id: "C",
      location: {
        x: 800 + left,
        y: 100,
      },
    },
    {
      id: "D",
      location: {
        x: 480 + left,
        y: 250,
      },
    },
    {
      id: "E",
      location: {
        x: 650 + left,
        y: 300,
      },
    },
    {
      id: "F",
      location: {
        x: 380 + left,
        y: 380,
      },
    },
    {
      id: "G",
      location: {
        x: 590 + left,
        y: 420,
      },
    },
    {
      id: "H",
      location: {
        x: 800 + left,
        y: 360,
      },
    },
    {
      id: "I",
      location: {
        x: 520 + left,
        y: 550,
      },
    },
  ],
  paths: [
    {
      to: "A",
      from: "B",
      text: {
        x: 350 + left,
        y: 130,
        value: 1,
      },
    },
    {
      to: "A",
      from: "D",
      text: {
        x: 350 + left,
        y: 210,
        value: 2,
      },
    },
    {
      to: "A",
      from: "F",
      text: {
        x: 310 + left,
        y: 285,
        value: 3,
      },
    },
    {
      to: "B",
      from: "C",
      text: {
        x: 660 + left,
        y: 80,
        value: 4,
      },
    },
    {
      to: "B",
      from: "D",
      text: {
        x: 510 + left,
        y: 180,
        value: 5,
      },
    },
    {
      to: "B",
      from: "E",
      text: {
        x: 590 + left,
        y: 195,
        value: 6,
      },
    },
    {
      to: "C",
      from: "E",
      text: {
        x: 705 + left,
        y: 195,
        value: 7,
      },
    },
    {
      to: "C",
      from: "H",
      text: {
        x: 785 + left,
        y: 230,
        value: 8,
      },
    },
    {
      to: "D",
      from: "E",
      text: {
        x: 550 + left,
        y: 290,
        value: 9,
      },
    },
    {
      to: "D",
      from: "F",
      text: {
        x: 410 + left,
        y: 305,
        value: 10,
      },
    },
    {
      to: "E",
      from: "G",
      text: {
        x: 600 + left,
        y: 350,
        value: 11,
      },
    },
    {
      to: "F",
      from: "G",
      text: {
        x: 490 + left,
        y: 385,
        value: 12,
      },
    },
    {
      to: "F",
      from: "I",
      text: {
        x: 470 + left,
        y: 460,
        value: 13,
      },
    },
    {
      to: "G",
      from: "H",
      text: {
        x: 690 + left,
        y: 375,
        value: 14,
      },
    },
    {
      to: "H",
      from: "I",
      text: {
        x: 670 + left,
        y: 470,
        value: 15,
      },
    },
  ],
};

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

function render() {
  const { nodes, paths } = connections;

  const nodeElement = document.querySelector("g#nodes");

  while (nodeElement.hasChildNodes())
    nodeElement.removeChild(nodeElement.firstChild);

  nodes.forEach(({ id, location: { x: cx, y: cy } }) => {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    circle.id = id;
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 2);
    circle.setAttribute("fill", "black");
    circle.dataset.targets = "";
    circle.addEventListener("click", (e) => {
      console.log(e.target);
    });

    const label = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    label.setAttribute("x", cx);
    label.setAttribute("y", cy);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("alignment-baseline", "central");
    label.setAttribute("font-size", "24px");
    label.setAttribute("stroke", "white");
    label.setAttribute("stroke-width", 2);
    label.innerHTML = id;
    label.id = `${id}_label`;
    label.addEventListener("click", (e) => console.log(circle));

    nodeElement.appendChild(circle);
    nodeElement.appendChild(label);
  });

  const pathElement = document.querySelector("g#paths");

  while (pathElement.hasChildNodes())
    pathElement.removeChild(pathElement.firstChild);

  paths.forEach(({ to, from, text: { x, y, value } }) => {
    const toElement = document.querySelector(`circle#${to}`);
    const fromElement = document.querySelector(`circle#${from}`);

    toElement.dataset.targets += from;
    fromElement.dataset.targets += to;

    const { cx: toX, cy: toY } = toElement.attributes;
    const { cx: fromX, cy: fromY } = fromElement.attributes;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line.setAttribute(
      "d",
      `M${fromX.value} ${fromY.value} ${toX.value} ${toY.value}`
    );
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", 2);
    line.setAttribute("fill", "none");
    line.dataset.nodes = `${from},${to}`;
    line.id = `from${from}_to${to}_path`;

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("alignment-baseline", "central");
    text.setAttribute("font-size", "16px");
    text.setAttribute("stroke", "black");
    text.setAttribute("stroke-width", 2);
    // text.innerHTML = value;
    text.innerHTML = Math.floor(Math.random() * 10) + 1;
    text.id = `from${from}_to${to}_text`;

    pathElement.appendChild(line);
    pathElement.appendChild(text);
  });
}
