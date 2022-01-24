/*
document.querySelectorAll("ul.main-menu>li>span").forEach((element) => {
  element.addEventListener("click", (e) => {
    const flag = e.target.parentNode.classList.contains("selected");
    document.querySelectorAll("ul.main-menu li").forEach((li) => {
      li.classList.remove("selected");
    });
    flag || e.target.parentNode.classList.add("selected");
  });
});

document.querySelectorAll("ul.sub-menu>li>span").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e);
  });
});
*/

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
