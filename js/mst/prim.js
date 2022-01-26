const exportDefault = () => {
  renderModule(controllers, Date.now());
};

const controllers = [
  {
    type: "button",
    text: "render",
    events: [
      {
        event: "click",
        action: exportDefault,
      },
    ],
  },
  {
    type: "button",
    text: "go",
    events: [
      {
        event: "click",
        action: prim,
      },
    ],
  },
];

async function prim(e) {
  e.target.disabled = true;
  const key = e.target.dataset.key;
  const nodes = {};

  const checked = new Set();

  document
    .querySelector("g#nodes")
    .querySelectorAll("circle")
    .forEach((element) => {
      const id = element.id;
      Array.from(element.dataset.targets).forEach((target) => {
        let element;
        if (document.querySelector(`path#from${id}_to${target}_path`)) {
          element = document.querySelector(`path#from${id}_to${target}_path`);
        } else {
          element = document.querySelector(`path#from${target}_to${id}_path`);
        }
        const value = element.dataset.value;
        nodes[id]
          ? nodes[id].push([parseInt(value), id, target, element])
          : (nodes[id] = [[parseInt(value), id, target, element]]);
      });
    });

  const startNode = "A";

  checked.add(startNode);
  let lines = [...nodes[startNode]];
  lines.sort((a, b) => a[0] - b[0]);
  document
    .querySelector(`circle#${startNode}.c${key}`)
    .classList.add("disabled");

  while (lines.length) {
    const [value, from, to, element] = lines.shift();
    document.querySelector(`circle#${from}.c${key}`).classList.add("target");
    document.querySelector(`circle#${to}.c${key}`).classList.add("target");

    element.classList.add("compare");
    await _timeout();

    if (!checked.has(to)) {
      checked.add(to);
      lines = [...lines, ...nodes[to]];
      lines.sort((a, b) => a[0] - b[0]);

      element.classList.add("target");
      document.querySelector(`circle#${to}.c${key}`).classList.add("disabled");
    }
    element.classList.remove("compare");
    document.querySelector(`circle#${from}.c${key}`).classList.remove("target");
    document.querySelector(`circle#${to}.c${key}`).classList.remove("target");
  }

  e.target.disabled = false;
}

export default exportDefault;
