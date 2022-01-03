import("../index.js");

const SIZE = 10;

async function loadModule() {
  renderControl();
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
    span.dataset.value = parseInt(Math.random() * 99, 0) + 1;
    section.appendChild(span);
  }
}

async function swap(targetContent, sourceContent) {
  let targetLeft = targetContent.offsetLeft;
  let sourceLeft = sourceContent.offsetLeft;
  let x = Math.abs(sourceLeft - targetLeft);

  sourceContent.animate([{ transform: "translateX(-" + x + "px)" }], {
    duration: 1000,
  });

  await targetContent.animate([{ transform: "translateX(" + x + "px)" }], {
    duration: 1000,
  }).finished;

  const temp = targetContent.dataset.value;
  targetContent.dataset.value = sourceContent.dataset.value;
  sourceContent.dataset.value = temp;
  return { targetContent, sourceContent };
}

function renderControl() {
  const control = document.querySelector("article");

  while (control.hasChildNodes()) control.removeChild(control.firstChild);
}
