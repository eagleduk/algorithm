const exportDefault = () => {
  renderModule(controllers, connections, Date.now());
};

const controllers = [
  {
    type: "button",
    text: RERENDER,
    events: [
      {
        event: "click",
        action: exportDefault,
      },
    ],
  },
  {
    type: "button",
    text: SPPLABEL,
    events: [
      {
        event: "click",
        action: dijkstra,
      },
    ],
  },
];

const connections = [
  {
    id: "A",
    location: {
      x: 200 + LEFTPADDING,
      y: 100 + TOPPADDING,
    },
    events: [
      {
        type: "click",
        action: selectTargetHandler,
      },
    ],
    connect: [
      {
        target: "B",
        path: `M${197.5 + LEFTPADDING} ${97.5 + TOPPADDING} ${
          47.5 + LEFTPADDING
        } ${167.5 + TOPPADDING}`,
        position: { x: 120 + LEFTPADDING, y: 120 + TOPPADDING },
      },
      {
        target: "C",
        path: `M${195 + LEFTPADDING} ${100 + TOPPADDING} ${245 + LEFTPADDING} ${
          250 + TOPPADDING
        }`,
        position: { x: 210 + LEFTPADDING, y: 180 + TOPPADDING },
      },
      {
        target: "D",
        path: `M${200 + LEFTPADDING} ${95 + TOPPADDING} Q${
          -140 + LEFTPADDING
        } ${75 + TOPPADDING} ${95 + LEFTPADDING} ${455 + TOPPADDING}`,
        position: { x: 0 + LEFTPADDING, y: 140 + TOPPADDING },
      },
      {
        target: "F",
        path: `M${200 + LEFTPADDING} ${105 + TOPPADDING} Q${
          495 + LEFTPADDING
        } ${80 + TOPPADDING} ${395 + LEFTPADDING} ${400 + TOPPADDING}`,
        position: { x: 400 + LEFTPADDING, y: 200 + TOPPADDING },
      },
    ],
  },
  {
    id: "B",
    location: {
      x: 50 + LEFTPADDING,
      y: 170 + TOPPADDING,
    },
    events: [
      {
        type: "click",
        action: selectTargetHandler,
      },
    ],
    connect: [
      {
        target: "A",
        path: `M${57.5 + LEFTPADDING} ${172.5 + TOPPADDING} ${
          207.5 + LEFTPADDING
        } ${102.5 + TOPPADDING}`,
        position: { x: 135 + LEFTPADDING, y: 150 + TOPPADDING },
      },
      {
        target: "C",
        path: `M${50 + LEFTPADDING} ${175 + TOPPADDING} ${250 + LEFTPADDING} ${
          255 + TOPPADDING
        }`,
        position: { x: 140 + LEFTPADDING, y: 225 + TOPPADDING },
      },
      {
        target: "D",
        path: `M${45 + LEFTPADDING} ${170 + TOPPADDING} ${95 + LEFTPADDING} ${
          450 + TOPPADDING
        }`,
        position: { x: 55 + LEFTPADDING, y: 310 + TOPPADDING },
      },
    ],
  },
  {
    id: "C",
    location: {
      x: 250 + LEFTPADDING,
      y: 250 + TOPPADDING,
    },
    events: [
      {
        type: "click",
        action: selectTargetHandler,
      },
    ],
    connect: [
      {
        target: "A",
        path: `M${255 + LEFTPADDING} ${250 + TOPPADDING} ${205 + LEFTPADDING} ${
          100 + TOPPADDING
        }`,
        position: { x: 240 + LEFTPADDING, y: 170 + TOPPADDING },
      },
      {
        target: "B",
        path: `M${250 + LEFTPADDING} ${245 + TOPPADDING} ${50 + LEFTPADDING} ${
          165 + TOPPADDING
        }`,
        position: { x: 160 + LEFTPADDING, y: 195 + TOPPADDING },
      },
      {
        target: "E",
        path: `M${245 + LEFTPADDING} ${250 + TOPPADDING} ${315 + LEFTPADDING} ${
          320 + TOPPADDING
        }`,
        position: { x: 275 + LEFTPADDING, y: 300 + TOPPADDING },
      },
    ],
  },
  {
    id: "D",
    location: {
      x: 100 + LEFTPADDING,
      y: 450 + TOPPADDING,
    },
    events: [
      {
        type: "click",
        action: selectTargetHandler,
      },
    ],
    connect: [
      {
        target: "A",
        path: `M${100 + LEFTPADDING} ${450 + TOPPADDING}Q${
          -130 + LEFTPADDING
        } ${80 + TOPPADDING} ${200 + LEFTPADDING} ${105 + TOPPADDING}`,
        position: { x: 20 + LEFTPADDING, y: 240 + TOPPADDING },
      },
      {
        target: "B",
        path: `M${105 + LEFTPADDING} ${450 + TOPPADDING} ${55 + LEFTPADDING} ${
          170 + TOPPADDING
        }`,
        position: { x: 90 + LEFTPADDING, y: 300 + TOPPADDING },
      },
      {
        target: "E",
        path: `M${100 + LEFTPADDING} ${455 + TOPPADDING} ${320 + LEFTPADDING} ${
          325 + TOPPADDING
        }`,
        position: { x: 230 + LEFTPADDING, y: 395 + TOPPADDING },
      },
      {
        target: "F",
        path: `M${100 + LEFTPADDING} ${455 + TOPPADDING} ${400 + LEFTPADDING} ${
          405 + TOPPADDING
        }`,
        position: { x: 280 + LEFTPADDING, y: 440 + TOPPADDING },
      },
      {
        target: "H",
        path: `M${100 + LEFTPADDING} ${455 + TOPPADDING} ${420 + LEFTPADDING} ${
          525 + TOPPADDING
        }`,
        position: { x: 260 + LEFTPADDING, y: 510 + TOPPADDING },
      },
    ],
  },
  {
    id: "E",
    location: {
      x: 320 + LEFTPADDING,
      y: 320 + TOPPADDING,
    },
    events: [
      {
        type: "click",
        action: selectTargetHandler,
      },
    ],
    connect: [
      {
        target: "C",
        path: `M${325 + LEFTPADDING} ${320 + TOPPADDING} ${255 + LEFTPADDING} ${
          250 + TOPPADDING
        }`,
        position: { x: 300 + LEFTPADDING, y: 275 + TOPPADDING },
      },
      {
        target: "D",
        path: `M${320 + LEFTPADDING} ${315 + TOPPADDING} ${100 + LEFTPADDING} ${
          445 + TOPPADDING
        }`,
        position: { x: 210 + LEFTPADDING, y: 365 + TOPPADDING },
      },
      {
        target: "F",
        path: `M${315 + LEFTPADDING} ${322.5 + TOPPADDING} ${
          395 + LEFTPADDING
        } ${402.5 + TOPPADDING}`,
        position: { x: 350 + LEFTPADDING, y: 375 + TOPPADDING },
      },
    ],
  },
  {
    id: "F",
    location: {
      x: 400 + LEFTPADDING,
      y: 400 + TOPPADDING,
    },
    events: [
      {
        type: "click",
        action: selectTargetHandler,
      },
    ],
    connect: [
      {
        target: "A",
        path: `M${405 + LEFTPADDING} ${400 + TOPPADDING} Q${
          500 + LEFTPADDING
        } ${75 + TOPPADDING} ${200 + LEFTPADDING} ${95 + TOPPADDING}`,
        position: { x: 420 + LEFTPADDING, y: 160 + TOPPADDING },
      },
      {
        target: "D",
        path: `M${400 + LEFTPADDING} ${395 + TOPPADDING} ${100 + LEFTPADDING} ${
          445 + TOPPADDING
        }`,
        position: { x: 255 + LEFTPADDING, y: 405 + TOPPADDING },
      },
      {
        target: "E",
        path: `M${405 + LEFTPADDING} ${397.5 + TOPPADDING} ${
          325 + LEFTPADDING
        } ${317.5 + TOPPADDING}`,
        position: { x: 370 + LEFTPADDING, y: 345 + TOPPADDING },
      },
      {
        target: "G",
        path: `M${395 + LEFTPADDING} ${405 + TOPPADDING} ${515 + LEFTPADDING} ${
          465 + TOPPADDING
        }`,
        position: { x: 455 + LEFTPADDING, y: 450 + TOPPADDING },
      },
      {
        target: "H",
        path: `M${395 + LEFTPADDING} ${400 + TOPPADDING} ${415 + LEFTPADDING} ${
          520 + TOPPADDING
        }`,
        position: { x: 390 + LEFTPADDING, y: 460 + TOPPADDING },
      },
    ],
  },
  {
    id: "G",
    location: {
      x: 520 + LEFTPADDING,
      y: 460 + TOPPADDING,
    },
    events: [
      {
        type: "click",
        action: selectTargetHandler,
      },
    ],
    connect: [
      {
        target: "F",
        path: `M${525 + LEFTPADDING} ${460 + TOPPADDING} ${405 + LEFTPADDING} ${
          400 + TOPPADDING
        }`,
        position: { x: 470 + LEFTPADDING, y: 415 + TOPPADDING },
      },
      {
        target: "H",
        path: `M${520 + LEFTPADDING} ${455 + TOPPADDING} ${420 + LEFTPADDING} ${
          515 + TOPPADDING
        }`,
        position: { x: 455 + LEFTPADDING, y: 480 + TOPPADDING },
      },
    ],
  },
  {
    id: "H",
    location: {
      x: 420 + LEFTPADDING,
      y: 520 + TOPPADDING,
    },
    events: [
      {
        type: "click",
        action: selectTargetHandler,
      },
    ],
    connect: [
      {
        target: "D",
        path: `M${420 + LEFTPADDING} ${515 + TOPPADDING} ${100 + LEFTPADDING} ${
          445 + TOPPADDING
        }`,
        position: { x: 280 + LEFTPADDING, y: 470 + TOPPADDING },
      },
      {
        target: "F",
        path: `M${425 + LEFTPADDING} ${520 + TOPPADDING} ${405 + LEFTPADDING} ${
          400 + TOPPADDING
        }`,
        position: { x: 430 + LEFTPADDING, y: 460 + TOPPADDING },
      },
      {
        target: "G",
        path: `M${420 + LEFTPADDING} ${525 + TOPPADDING} ${520 + LEFTPADDING} ${
          465 + TOPPADDING
        }`,
        position: { x: 470 + LEFTPADDING, y: 515 + TOPPADDING },
      },
    ],
  },
];

function selectTargetHandler(e) {
  document
    .querySelector("g.selectedContent")
    ?.classList.remove("selectedContent");

  e.target.parentNode.classList.add("selectedContent");
}

async function dijkstra(e) {
  const selectedContent = document.querySelector("g.selectedContent");
  if (!selectedContent) {
    errorMessage("Please Select Start Node.");
    return;
  }

  e.target.disabled = true;
  const key = e.target.dataset.key;

  const selectID = selectedContent.id;

  const svg = document.querySelector("svg#spp");
  const paths = svg.querySelector(`g#lineGroup`);
  const contentGroups = svg.querySelectorAll(`g.g${key}`);

  const contents = {};
  const check = [];

  contentGroups.forEach((contentGroup) => {
    const id = contentGroup.id;
    contents[id] = contentGroup.children;

    const circle = contentGroup.children[0];
    const label = contentGroup.children[1];

    contentGroup.id === selectID
      ? (label.innerHTML = 0)
      : (label.innerHTML = "Inf");
  });
  check.push(selectID);

  while (check.length) {
    const source = check.shift();

    const [circle, label] = contents[source];

    circle.classList.add("target");

    const targets = circle.dataset.targets.split(",");
    const targetLength = targets.length;

    const value = parseInt(label.innerHTML, 0);

    for (let i = 0; i < targetLength; i++) {
      const targetID = targets[i];
      const [targetCircle, targetLabel] = contents[targetID];
      targetCircle.classList.add("compare");

      const targetPath = paths.querySelector(
        `path#from${source}_to${targetID}_path.p${key}`
      );
      targetPath.setAttribute("class", `p${key} target`);

      await _timeout();

      const targetText = paths.querySelector(
        `text#from${source}_to${targetID}_text.v${key}`
      );
      const targetValue = parseInt(targetText.innerHTML, 0);

      if (isNaN(targetLabel.innerHTML)) {
        targetLabel.innerHTML = value + targetValue;
        check.push(targetID);
      } else {
        if (parseInt(targetLabel.innerHTML) > value + targetValue) {
          targetLabel.innerHTML = value + targetValue;
          check.push(targetID);
        }
      }

      targetPath.setAttribute("class", `p${key} arrow`);
      targetCircle.classList.remove("compare");
    }

    circle.classList.remove("target");
  }

  e.target.disabled = false;
}

export default exportDefault;
