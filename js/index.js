const NAMESPACEURI = "http://www.w3.org/2000/svg";

const SORTLABEL = "sort";
const SEARCHLABEL = "search";
const SPPLABEL = "navigate";
const MSTLABEL = "find";

const RERENDER = "render";

document.querySelectorAll("details").forEach((element) => {
  element.addEventListener("toggle", (e) => {
    if (e.target.open) {
      document.querySelectorAll("details").forEach((detail) => {
        if (e.target !== detail) detail.open = false;
      });
    }
  });
  // element.addEventListener("mouseleave", (e) => {
  //   if (e.target.open) {
  //     e.target.open = false;
  //   }
  // });
});

document.querySelectorAll("div.home-index img").forEach((element) => {
  const { normalSrc, hoverSrc } = element.dataset;
  element.addEventListener("mouseover", (e) => {
    element.src = hoverSrc;
  });
  element.addEventListener("mouseout", (e) => {
    element.src = normalSrc;
  });
});

async function _timeout(ms = 2000, fn) {
  await new Promise((resolve, reject) => {
    setTimeout((e) => {
      if (typeof fn === "function") {
        fn();
      }
      resolve();
    }, ms);
  });
}

async function errorMessage(msg) {
  const notification = document.querySelector("div.notification");

  const span = notification.querySelector("span");
  span.innerHTML = msg;

  notification.classList.add("action");

  _timeout(5000, () => notification.classList.remove("action"));
}
