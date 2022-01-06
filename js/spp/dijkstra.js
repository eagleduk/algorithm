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
        value: "5",
        position: "",
      },
      {
        target: "C",
        path: `M${205 + left} 100 ${255 + left} 250`,
        value: "",
        position: "",
      },
      {
        target: "D",
        path: `M${200 + left} 105 Q${-130 + left} 80 ${100 + left} 445`,
        value: "",
        position: "",
      },
      {
        target: "F",
        path: `M${200 + left} 105 Q${495 + left} 80 ${395 + left} 400`,
        value: "",
        position: "",
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
        value: "",
        position: "",
      },
      {
        target: "C",
        path: `M${50 + left} 165 ${250 + left} 245`,
        value: "",
        position: "",
      },
      {
        target: "D",
        path: `M${55 + left} 170 ${105 + left} 450`,
        value: "",
        position: "",
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
        value: "",
        position: "",
      },
      {
        target: "B",
        path: `M${250 + left} 255 ${50 + left} 175`,
        value: "",
        position: "",
      },
      {
        target: "E",
        path: `M${255 + left} 250 ${325 + left} 320`,
        value: "",
        position: "",
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
        value: "",
        position: "",
      },
      {
        target: "B",
        path: `M${95 + left} 450 ${45 + left} 170`,
        value: "",
        position: "",
      },
      {
        target: "E",
        path: `M${100 + left} 455 ${320 + left} 325`,
        value: "",
        position: "",
      },
      {
        target: "F",
        path: `M${100 + left} 445 ${400 + left} 395`,
        value: "",
        position: "",
      },
      {
        target: "H",
        path: `M${100 + left} 445 ${420 + left} 515`,
        value: "",
        position: "",
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
        value: "",
        position: "",
      },
      {
        target: "D",
        path: `M${320 + left} 315 ${100 + left} 445`,
        value: "",
        position: "",
      },
      {
        target: "F",
        path: `M${325 + left} 317.5 ${405 + left} 397.5`,
        value: "",
        position: "",
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
        value: "",
        position: "",
      },
      {
        target: "D",
        path: `M${400 + left} 405 ${100 + left} 455`,
        value: "",
        position: "",
      },
      {
        target: "E",
        path: `M${395 + left} 402.5 ${315 + left} 322.5`,
        value: "",
        position: "",
      },
      {
        target: "G",
        path: `M${405 + left} 400 ${505 + left} 480`,
        value: "",
        position: "",
      },
      {
        target: "H",
        path: `M${395 + left} 400 ${415 + left} 520`,
        value: "",
        position: "",
      },
    ],
  },
  {
    id: "G",
    location: {
      x: 500 + left,
      y: 480,
    },
    connect: [
      {
        target: "F",
        path: `M${495 + left} 485 ${395 + left} 405`,
        value: "",
        position: "",
      },
      {
        target: "H",
        path: `M${500 + left} 485 ${420 + left} 525`,
        value: "",
        position: "",
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
        value: "",
        position: "",
      },
      {
        target: "F",
        path: `M${425 + left} 520 ${405 + left} 400`,
        value: "",
        position: "",
      },
      {
        target: "G",
        path: `M${420 + left} 515 ${500 + left} 475`,
        value: "",
        position: "",
      },
    ],
  },
];

const html = ``;

(function render() {
  const svg = document.querySelector("svg#dijkstra");

  connections.forEach(({ id, location: { x: cx, y: cy }, connect }) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 2);
    circle.setAttribute("fill", "black");
    // circle.setAttribute("fill-rule", "evenodd");

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", cx);
    text.setAttribute("y", cy);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("alignment-baseline", "central");
    text.setAttribute("font-size", "24px");
    text.setAttribute("stroke", "white");
    text.setAttribute("stroke-width", 2);
    text.innerHTML = id;

    g.appendChild(circle);
    g.appendChild(text);

    connect.forEach(({ target, path, value, position }) => {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      line.setAttribute("d", path);
      line.setAttribute("stroke", "black");
      line.setAttribute("stroke-width", 2);
      line.setAttribute("fill", "none");
      // line.setAttribute("fill-rule", "evenodd");
      line.setAttribute("marker-end", "url(#Triangle)");

      g.appendChild(line);
    });

    svg.appendChild(g);
  });
})();
