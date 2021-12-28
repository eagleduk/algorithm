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
