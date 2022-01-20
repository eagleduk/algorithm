import("../index.js");

const SIZE = 10;
const SWAPTIME = 1000;

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
  const section = document.querySelector("section");
  while (section.hasChildNodes()) {
    section.removeChild(section.firstChild);
  }

  for (let i = 0; i < SIZE; i++) {
    let span = document.createElement("span");
    span.className = "content";
    span.dataset.value = parseInt(Math.random() * 99, 0) + 1;
    section.appendChild(span);
  }
}

function renderModule(controllers) {
  renderControl(controllers);
  render();
}

async function swap(targetContent, sourceContent) {
  let targetLeft = targetContent.offsetLeft;
  let sourceLeft = sourceContent.offsetLeft;
  let x = Math.abs(sourceLeft - targetLeft);

  sourceContent.animate([{ transform: `translateX(-${x}px)` }], {
    duration: SWAPTIME,
  });

  await targetContent.animate([{ transform: `translateX(${x}px)` }], {
    duration: SWAPTIME,
  }).finished;

  const temp = targetContent.dataset.value;
  targetContent.dataset.value = sourceContent.dataset.value;
  sourceContent.dataset.value = temp;
  return { targetContent, sourceContent };
}

function renderControl(controllers = []) {
  const control = document.querySelector("article");

  while (control.hasChildNodes()) control.removeChild(control.firstChild);

  controllers.forEach((controller) => {
    const { type, text, events } = controller;

    const button = document.createElement("input");
    button.type = type;
    button.value = text;
    events.forEach(({ event, action }) => {
      button.addEventListener(event, action);
    });

    control.appendChild(button);
  });
}
