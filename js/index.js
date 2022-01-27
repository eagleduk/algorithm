const NAMESPACEURI = "http://www.w3.org/2000/svg";

document.querySelectorAll("details").forEach((element) => {
  element.addEventListener("toggle", (e) => {
    if (e.target.open) {
      document.querySelectorAll("details").forEach((detail) => {
        if (e.target !== detail) detail.open = false;
      });
    }
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
