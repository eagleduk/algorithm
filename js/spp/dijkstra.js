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
      y: 100,
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
        path: `M${197.5 + LEFTPADDING} 97.5 ${47.5 + LEFTPADDING} 167.5`,
        value: "1",
        position: { x: 120 + LEFTPADDING, y: 120 },
      },
      {
        target: "C",
        path: `M${205 + LEFTPADDING} 100 ${255 + LEFTPADDING} 250`,
        value: "2",
        position: { x: 240 + LEFTPADDING, y: 170 },
      },
      {
        target: "D",
        path: `M${200 + LEFTPADDING} 105 Q${-130 + LEFTPADDING} 80 ${
          100 + LEFTPADDING
        } 450`,
        value: "3",
        position: { x: 20 + LEFTPADDING, y: 240 },
      },
      {
        target: "F",
        path: `M${200 + LEFTPADDING} 105 Q${495 + LEFTPADDING} 80 ${
          395 + LEFTPADDING
        } 400`,
        value: "4",
        position: { x: 400 + LEFTPADDING, y: 200 },
      },
    ],
  },
  {
    id: "B",
    location: {
      x: 50 + LEFTPADDING,
      y: 170,
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
        path: `M${57.5 + LEFTPADDING} 172.5 ${207.5 + LEFTPADDING} 102.5`,
        value: "5",
        position: { x: 135 + LEFTPADDING, y: 150 },
      },
      {
        target: "C",
        path: `M${50 + LEFTPADDING} 165 ${250 + LEFTPADDING} 245`,
        value: "6",
        position: { x: 160 + LEFTPADDING, y: 195 },
      },
      {
        target: "D",
        path: `M${55 + LEFTPADDING} 170 ${105 + LEFTPADDING} 450`,
        value: "7",
        position: { x: 90 + LEFTPADDING, y: 300 },
      },
    ],
  },
  {
    id: "C",
    location: {
      x: 250 + LEFTPADDING,
      y: 250,
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
        path: `M${245 + LEFTPADDING} 250 ${195 + LEFTPADDING} 100`,
        value: "8",
        position: { x: 210 + LEFTPADDING, y: 180 },
      },
      {
        target: "B",
        path: `M${250 + LEFTPADDING} 255 ${50 + LEFTPADDING} 175`,
        value: "9",
        position: { x: 140 + LEFTPADDING, y: 225 },
      },
      {
        target: "E",
        path: `M${255 + LEFTPADDING} 250 ${325 + LEFTPADDING} 320`,
        value: "10",
        position: { x: 300 + LEFTPADDING, y: 275 },
      },
    ],
  },
  {
    id: "D",
    location: {
      x: 100 + LEFTPADDING,
      y: 450,
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
        path: `M${95 + LEFTPADDING} 455 Q${-140 + LEFTPADDING} 75 ${
          200 + LEFTPADDING
        } 95`,
        value: "11",
        position: { x: 0 + LEFTPADDING, y: 140 },
      },
      {
        target: "B",
        path: `M${95 + LEFTPADDING} 450 ${45 + LEFTPADDING} 170`,
        value: "12",
        position: { x: 55 + LEFTPADDING, y: 310 },
      },
      {
        target: "E",
        path: `M${100 + LEFTPADDING} 455 ${320 + LEFTPADDING} 325`,
        value: "13",
        position: { x: 230 + LEFTPADDING, y: 395 },
      },
      {
        target: "F",
        path: `M${100 + LEFTPADDING} 445 ${400 + LEFTPADDING} 395`,
        value: "14",
        position: { x: 255 + LEFTPADDING, y: 405 },
      },
      {
        target: "H",
        path: `M${100 + LEFTPADDING} 445 ${420 + LEFTPADDING} 515`,
        value: "15",
        position: { x: 280 + LEFTPADDING, y: 470 },
      },
    ],
  },
  {
    id: "E",
    location: {
      x: 320 + LEFTPADDING,
      y: 320,
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
        path: `M${315 + LEFTPADDING} 320 ${245 + LEFTPADDING} 250`,
        value: "16",
        position: { x: 275 + LEFTPADDING, y: 300 },
      },
      {
        target: "D",
        path: `M${320 + LEFTPADDING} 315 ${100 + LEFTPADDING} 445`,
        value: "17",
        position: { x: 210 + LEFTPADDING, y: 365 },
      },
      {
        target: "F",
        path: `M${325 + LEFTPADDING} 317.5 ${405 + LEFTPADDING} 397.5`,
        value: "18",
        position: { x: 370 + LEFTPADDING, y: 345 },
      },
    ],
  },
  {
    id: "F",
    location: {
      x: 400 + LEFTPADDING,
      y: 400,
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
        path: `M${405 + LEFTPADDING} 400 Q${500 + LEFTPADDING} 75 ${
          200 + LEFTPADDING
        } 95`,
        value: "19",
        position: { x: 420 + LEFTPADDING, y: 160 },
      },
      {
        target: "D",
        path: `M${400 + LEFTPADDING} 405 ${100 + LEFTPADDING} 455`,
        value: "20",
        position: { x: 280 + LEFTPADDING, y: 440 },
      },
      {
        target: "E",
        path: `M${395 + LEFTPADDING} 402.5 ${315 + LEFTPADDING} 322.5`,
        value: "21",
        position: { x: 350 + LEFTPADDING, y: 375 },
      },
      {
        target: "G",
        path: `M${405 + LEFTPADDING} 400 ${525 + LEFTPADDING} 460`,
        value: "22",
        position: { x: 470 + LEFTPADDING, y: 415 },
      },
      {
        target: "H",
        path: `M${395 + LEFTPADDING} 400 ${415 + LEFTPADDING} 520`,
        value: "23",
        position: { x: 390 + LEFTPADDING, y: 460 },
      },
    ],
  },
  {
    id: "G",
    location: {
      x: 520 + LEFTPADDING,
      y: 460,
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
        path: `M${515 + LEFTPADDING} 465 ${395 + LEFTPADDING} 405`,
        value: "24",
        position: { x: 455 + LEFTPADDING, y: 450 },
      },
      {
        target: "H",
        path: `M${520 + LEFTPADDING} 465 ${420 + LEFTPADDING} 525`,
        value: "25",
        position: { x: 470 + LEFTPADDING, y: 515 },
      },
    ],
  },
  {
    id: "H",
    location: {
      x: 420 + LEFTPADDING,
      y: 520,
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
        path: `M${420 + LEFTPADDING} 525 ${100 + LEFTPADDING} 455`,
        value: "26",
        position: { x: 260 + LEFTPADDING, y: 510 },
      },
      {
        target: "F",
        path: `M${425 + LEFTPADDING} 520 ${405 + LEFTPADDING} 400`,
        value: "27",
        position: { x: 430 + LEFTPADDING, y: 460 },
      },
      {
        target: "G",
        path: `M${420 + LEFTPADDING} 515 ${520 + LEFTPADDING} 455`,
        value: "28",
        position: { x: 455 + LEFTPADDING, y: 480 },
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
  if (!selectedContent) return;

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
