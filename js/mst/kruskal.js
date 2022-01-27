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
        action: kruskal,
      },
    ],
  },
];

function getParent(parents, node) {
  if (parents[node] === node) return node;
  else return (parents[node] = getParent(parents, parents[node]));
}

function union(parents, from, to) {
  const a = getParent(parents, from);
  const b = getParent(parents, to);

  if (a < b) parents[b] = a;
  else parents[a] = b;
}

async function kruskal(e) {
  e.target.disabled = true;
  const key = e.target.dataset.key;

  const lines = [];
  const parents = {};

  document
    .querySelector("g#paths")
    .querySelectorAll("path")
    .forEach((element) => {
      const [a, b] = element.dataset.nodes.split(",");
      const from = document.querySelector(`circle#${a}.c${key}`);
      parents[a] = a;

      const to = document.querySelector(`circle#${b}.c${key}`);
      parents[b] = b;
      lines.push([
        parseInt(element.dataset.value),
        { id: a, element: from },
        { id: b, element: to },
        element,
      ]);
    });

  lines.sort((a, b) => a[0] - b[0]);

  while (lines.length) {
    const [
      value,
      { id: from, element: fromElement },
      { id: to, element: toElement },
      element,
    ] = lines.shift();
    element.classList.add("compare");

    await _timeout();

    if (getParent(parents, from) !== getParent(parents, to)) {
      union(parents, from, to);

      fromElement.classList.add("disabled");
      toElement.classList.add("disabled");

      element.classList.add("target");
    }
    element.classList.remove("compare");
  }

  e.target.disabled = false;
}

export default exportDefault;
