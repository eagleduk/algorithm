const exportDefault = () => {
  renderArrayModule(controllers, Date.now(), true);
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
    type: "input",
    text: "",
    events: [{}],
  },
  {
    type: "button",
    text: "search",
    events: [
      {
        event: "click",
        action: binarySearch,
      },
    ],
  },
];

function contentDisabled(arrs) {
  arrs.forEach((arr) => {
    arr.children[0].setAttribute("class", "disabled");
  });
}

async function search(arrs, input) {
  if (arrs.length === 1) {
    return false;
  }

  const length = arrs.length;
  const half = parseInt(length / 2);

  const halfContent = arrs[half];
  const halfRect = halfContent.children[0];
  const halfText = halfContent.children[1];
  const value = parseInt(halfText.innerHTML);

  halfRect.setAttribute("class", "compare");
  await _timeout();

  if (value === input) {
    halfRect.setAttribute("class", "target");
    return true;
  }

  halfRect.setAttribute("class", "");
  if (value < input) {
    contentDisabled(arrs.slice(0, half));
    return await search(arrs.slice(half), input);
  } else if (value > input) {
    contentDisabled(arrs.slice(half));
    return await search(arrs.slice(0, half), input);
  }
}

async function binarySearch(e) {
  e.target.disabled = true;
  const key = e.target.dataset.key;
  const input = e.target.previousElementSibling;

  const svg = document.querySelector("svg#search");

  const arrs = Array.from(svg.querySelectorAll(`g.g${key}`));
  const result = await search(arrs, parseInt(input.value));

  e.target.disabled = false;
}

export default exportDefault;
