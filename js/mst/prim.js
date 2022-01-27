const exportDefault = () => {
  renderModule(controllers, Date.now());
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
    text: MSTLABEL,
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
      const source = element.id;
      Array.from(element.dataset.targets).forEach((target) => {
        let targetElement = document.querySelector(`circle#${target}.c${key}`);
        let element;
        if (document.querySelector(`path#from${source}_to${target}_path`)) {
          element = document.querySelector(
            `path#from${source}_to${target}_path`
          );
        } else {
          element = document.querySelector(
            `path#from${target}_to${source}_path`
          );
        }
        const value = element.dataset.value;
        nodes[source]
          ? nodes[source].push([
              parseInt(value),
              { id: source, element },
              { id: target, element: targetElement },
              element,
            ])
          : (nodes[source] = [
              [
                parseInt(value),
                { id: source, element },
                { id: target, element: targetElement },
                element,
              ],
            ]);
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
    const [
      value,
      { id: from, element: fromElement },
      { id: to, element: toElement },
      element,
    ] = lines.shift();
    fromElement.classList.add("target");
    toElement.classList.add("target");

    element.classList.add("compare");
    await _timeout();

    if (!checked.has(to)) {
      checked.add(to);
      lines = [...lines, ...nodes[to]];
      lines.sort((a, b) => a[0] - b[0]);

      element.classList.add("target");
      toElement.classList.add("disabled");
    }
    element.classList.remove("compare");
    fromElement.classList.remove("target");
    toElement.classList.remove("target");
  }

  e.target.disabled = false;
}

export default exportDefault;
