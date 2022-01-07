import("../index.js");

const left = 100;
const r = 25;

const connections = [
  {
    id: "A",
    location: {
      x: 200 + left,
      y: 100,
    },
    connect: [
      {
        target: "B",
        path: `M${197.5 + left} 97.5 ${47.5 + left} 167.5`,
        value: "1",
        position: { x: 120 + left, y: 120 },
      },
      {
        target: "C",
        path: `M${205 + left} 100 ${255 + left} 250`,
        value: "2",
        position: { x: 240 + left, y: 170 },
      },
      {
        target: "D",
        path: `M${200 + left} 105 Q${-130 + left} 80 ${100 + left} 450`,
        value: "3",
        position: { x: 20 + left, y: 240 },
      },
      {
        target: "F",
        path: `M${200 + left} 105 Q${495 + left} 80 ${395 + left} 400`,
        value: "4",
        position: { x: 400 + left, y: 200 },
      },
    ],
  },
  {
    id: "B",
    location: {
      x: 50 + left,
      y: 170,
    },
    connect: [
      {
        target: "A",
        path: `M${57.5 + left} 172.5 ${207.5 + left} 102.5`,
        value: "5",
        position: { x: 135 + left, y: 150 },
      },
      {
        target: "C",
        path: `M${50 + left} 165 ${250 + left} 245`,
        value: "6",
        position: { x: 160 + left, y: 195 },
      },
      {
        target: "D",
        path: `M${55 + left} 170 ${105 + left} 450`,
        value: "7",
        position: { x: 90 + left, y: 300 },
      },
    ],
  },
  {
    id: "C",
    location: {
      x: 250 + left,
      y: 250,
    },
    connect: [
      {
        target: "A",
        path: `M${245 + left} 250 ${195 + left} 100`,
        value: "8",
        position: { x: 210 + left, y: 180 },
      },
      {
        target: "B",
        path: `M${250 + left} 255 ${50 + left} 175`,
        value: "9",
        position: { x: 140 + left, y: 225 },
      },
      {
        target: "E",
        path: `M${255 + left} 250 ${325 + left} 320`,
        value: "10",
        position: { x: 300 + left, y: 275 },
      },
    ],
  },
  {
    id: "D",
    location: {
      x: 100 + left,
      y: 450,
    },
    connect: [
      {
        target: "A",
        path: `M${95 + left} 455 Q${-140 + left} 75 ${200 + left} 95`,
        value: "11",
        position: { x: 0 + left, y: 140 },
      },
      {
        target: "B",
        path: `M${95 + left} 450 ${45 + left} 170`,
        value: "12",
        position: { x: 55 + left, y: 310 },
      },
      {
        target: "E",
        path: `M${100 + left} 455 ${320 + left} 325`,
        value: "13",
        position: { x: 230 + left, y: 395 },
      },
      {
        target: "F",
        path: `M${100 + left} 445 ${400 + left} 395`,
        value: "14",
        position: { x: 255 + left, y: 405 },
      },
      {
        target: "H",
        path: `M${100 + left} 445 ${420 + left} 515`,
        value: "15",
        position: { x: 280 + left, y: 470 },
      },
    ],
  },
  {
    id: "E",
    location: {
      x: 320 + left,
      y: 320,
    },
    connect: [
      {
        target: "C",
        path: `M${315 + left} 320 ${245 + left} 250`,
        value: "16",
        position: { x: 275 + left, y: 300 },
      },
      {
        target: "D",
        path: `M${320 + left} 315 ${100 + left} 445`,
        value: "17",
        position: { x: 210 + left, y: 365 },
      },
      {
        target: "F",
        path: `M${325 + left} 317.5 ${405 + left} 397.5`,
        value: "18",
        position: { x: 370 + left, y: 345 },
      },
    ],
  },
  {
    id: "F",
    location: {
      x: 400 + left,
      y: 400,
    },
    connect: [
      {
        target: "A",
        path: `M${405 + left} 400 Q${500 + left} 75 ${200 + left} 95`,
        value: "19",
        position: { x: 420 + left, y: 160 },
      },
      {
        target: "D",
        path: `M${400 + left} 405 ${100 + left} 455`,
        value: "20",
        position: { x: 280 + left, y: 440 },
      },
      {
        target: "E",
        path: `M${395 + left} 402.5 ${315 + left} 322.5`,
        value: "21",
        position: { x: 350 + left, y: 375 },
      },
      {
        target: "G",
        path: `M${405 + left} 400 ${525 + left} 460`,
        value: "22",
        position: { x: 470 + left, y: 415 },
      },
      {
        target: "H",
        path: `M${395 + left} 400 ${415 + left} 520`,
        value: "23",
        position: { x: 390 + left, y: 460 },
      },
    ],
  },
  {
    id: "G",
    location: {
      x: 520 + left,
      y: 460,
    },
    connect: [
      {
        target: "F",
        path: `M${515 + left} 465 ${395 + left} 405`,
        value: "24",
        position: { x: 455 + left, y: 450 },
      },
      {
        target: "H",
        path: `M${520 + left} 465 ${420 + left} 525`,
        value: "25",
        position: { x: 470 + left, y: 515 },
      },
    ],
  },
  {
    id: "H",
    location: {
      x: 420 + left,
      y: 520,
    },
    connect: [
      {
        target: "D",
        path: `M${420 + left} 525 ${100 + left} 455`,
        value: "26",
        position: { x: 260 + left, y: 510 },
      },
      {
        target: "F",
        path: `M${425 + left} 520 ${405 + left} 400`,
        value: "27",
        position: { x: 430 + left, y: 460 },
      },
      {
        target: "G",
        path: `M${420 + left} 515 ${520 + left} 455`,
        value: "28",
        position: { x: 455 + left, y: 480 },
      },
    ],
  },
];

const html = ``;

function render() {
  const svg = document.querySelector("svg#dijkstra");
  const lineGroup = document.querySelector("g#lineGroup");

  connections.forEach(({ id, location: { x: cx, y: cy }, connect }) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const targets = [];
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

    connect.forEach(({ target, path, value, position: { x, y } }) => {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      line.setAttribute("d", path);
      line.setAttribute("stroke", "black");
      line.setAttribute("stroke-width", 2);
      line.setAttribute("fill", "none");
      line.setAttribute("marker-end", "url(#Triangle)");
      line.id = `from${id}_to${target}_path`;

      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", x);
      text.setAttribute("y", y);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("alignment-baseline", "central");
      text.setAttribute("font-size", "16px");
      text.setAttribute("stroke", "black");
      text.setAttribute("stroke-width", 2);
      // text.innerHTML = value;
      text.innerHTML = Math.floor(Math.random() * 15) + 1;
      text.id = `from${id}_to${target}_text`;

      lineGroup.appendChild(line);
      lineGroup.appendChild(text);
      targets.push(target);
    });

    circle.dataset.targets = targets.join(",");

    g.appendChild(circle);
    g.appendChild(label);
    svg.appendChild(g);
  });
}

function dijkstra() {
  const check = [];
  // const checked = new Set();

  const selectID = "E";

  document.querySelectorAll("circle").forEach((circle) => {
    circle.id === selectID
      ? (document.querySelector(`text#${circle.id}_label`).innerHTML = 0)
      : (document.querySelector(`text#${circle.id}_label`).innerHTML = "Inf");
  });

  check.push(selectID);

  while (check.length) {
    let source = check.shift();

    let circle = document.querySelector(`circle#${source}`);
    let label = document.querySelector(`text#${source}_label`);
    let value = parseInt(label.innerHTML, 0);
    let targets = circle.dataset.targets.split(",");

    targets.forEach((targetID) => {
      let targetCircle = document.querySelector(`circle#${targetID}`);
      let targetLabel = document.querySelector(`text#${targetID}_label`);
      let targetText = document.querySelector(
        `text#from${source}_to${targetID}_text`
      );
      let targetValue = parseInt(targetText.innerHTML, 0);

      if (isNaN(targetLabel.innerHTML)) {
        targetLabel.innerHTML = value + targetValue;
        check.push(targetID);
      } else {
        if (parseInt(targetLabel.innerHTML) > value + targetValue) {
          targetLabel.innerHTML = value + targetValue;
          check.push(targetID);
        }
      }
    });
  }
}

function renderControl() {
  const article = document.querySelector("article");

  while (article.hasChildNodes()) article.removeChild(article.firstChild);

  const refresh = document.createElement("input");
  refresh.type = "button";
  refresh.addEventListener("click", (e) => {
    // render();
  });
  refresh.value = "refresh";

  const search = document.createElement("input");
  search.type = "button";
  search.addEventListener("click", (e) => {
    dijkstra();
  });
  search.value = "go";

  article.appendChild(refresh);
  article.appendChild(search);
}

(function init() {
  renderControl();
  render();
})();
