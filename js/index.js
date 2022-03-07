const NAMESPACEURI = "http://www.w3.org/2000/svg";

const ADDRESS = [
  {
    type: "mail",
    path: "eagleduk@gmail.com",
    icon: "/images/email_white_24dp.svg",
  },
  {
    type: "github",
    path: "https://github.com/eagleduk",
    icon: "/images/GitHub-Mark-Light-32px.png",
  },
];

const SORTLABEL = "sort";
const SEARCHLABEL = "search";
const SPPLABEL = "navigate";
const MSTLABEL = "find";

const RERENDER = "render";

const MODULES = [
  {
    key: "sort",
    title: "sorting",
    icon: "/images/icons/sort.png",
    page: "/html/sort.html",
    modules: [
      { title: "bubble", value: "bubble" },
      { title: "selection", value: "selection" },
      { title: "insertion", value: "insert" },
    ],
  },
  {
    key: "search",
    title: "search",
    icon: "/images/icons/search.png",
    page: "/html/search.html",
    modules: [
      { title: "sequential", value: "sequential" },
      { title: "binary", value: "binary" },
      { title: "breadth-first search", value: "bfs" },
      { title: "depth-first search", value: "dfs" },
    ],
  },
  {
    key: "spp",
    title: "shortest path",
    icon: "/images/icons/icons8-path-30.png",
    page: "/html/spp.html",
    modules: [{ title: "dijkstra", value: "dijkstra" }],
  },
  {
    key: "mst",
    title: "min spanning tree",
    icon: "/images/icons/neural.png",
    page: "/html/mst.html",
    modules: [
      { title: "kruskal", value: "kruskal" },
      { title: "prim", value: "prim" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", (e) => {
  const path = location.pathname;
  const fullScreenMenu = document.querySelector("div.full-screen-menu");
  const miniScreenMenu = document.querySelector("div.mini-screen-menu");

  const ul = document.createElement("ul");
  MODULES.forEach(({ key, title, icon, page, modules }) => {
    const details = document.createElement("details");

    const summary = document.createElement("summary");
    const titleSpan = document.createElement("span");
    titleSpan.title = title;
    titleSpan.innerText = title;
    summary.appendChild(titleSpan);

    const ul2 = document.createElement("ul");
    ul2.classList.add("sub-menu");

    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = icon;
    img.alt = title;
    img.width = 30;

    li.appendChild(img);
    modules.forEach(({ title, value }) => {
      const li2 = document.createElement("li");
      li2.id = value;

      const anchor = document.createElement("a");
      anchor.href = `${path === page ? "" : page}#${value}`;

      const titleSpan = document.createElement("span");
      titleSpan.innerText = title;

      anchor.appendChild(titleSpan);

      li2.appendChild(anchor);

      ul2.appendChild(li2);
    });
    details.appendChild(summary);
    details.appendChild(ul2.cloneNode(true));

    fullScreenMenu.appendChild(details);

    li.appendChild(ul2);
    ul.appendChild(li);
  });
  miniScreenMenu.appendChild(ul);

  const address = document.querySelector("footer address");
  ADDRESS.forEach(({ type, path, icon }) => {
    const anchor = document.createElement("a");
    anchor.href = "#";

    const span = document.createElement("span");
    span.innerText = path;

    const img = document.createElement("img");
    img.src = icon;
    img.alt = type;
    img.width = 24;

    anchor.appendChild(span);
    anchor.appendChild(img);

    address.appendChild(anchor);
  });

  document.querySelectorAll("details").forEach((element) => {
    element.addEventListener("toggle", (e) => {
      if (e.target.open) {
        document.querySelectorAll("details").forEach((detail) => {
          if (e.target !== detail) detail.open = false;
        });
      }
    });
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
