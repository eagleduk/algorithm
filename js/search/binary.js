const exportDefault = () => {
  renderArrayModule(controllers, Date.now(), true);
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
    options: [{}],
  },
  {
    type: "text",
    text: "",
    events: [{}],
    options: [{ name: "maxLength", value: 2 }],
  },
  {
    type: "button",
    text: SEARCHLABEL,
    events: [
      {
        event: "click",
        action: binarySearch,
      },
    ],
    options: [{}],
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
  halfRect.setAttribute("class", "compare");

  const halfText = halfContent.children[1];
  const value = parseInt(halfText.innerHTML);

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
  const input = e.target.previousElementSibling;
  const searchValue = input.value;
  if (!searchValue.length) return;

  e.target.disabled = true;
  const key = e.target.dataset.key;

  const svg = document.querySelector("svg#search");

  const arrs = Array.from(svg.querySelectorAll(`g.g${key}`));
  const result = await search(arrs, parseInt(input.value));

  e.target.disabled = false;
}

export default exportDefault;
