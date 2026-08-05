document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const links = [
    { href: "index.html",    label: "Home" },
    { href: "research.html", label: "Research" },
    { href: "teaching.html", label: "Teaching & Outreach" },
    { href: "honors.html",   label: "Honors" },
  ];

  const nav = document.createElement("nav");
  links.forEach(function (link) {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    if (link.href === currentPage) a.classList.add("active");
    nav.appendChild(a);
  });

  document.querySelector("header .name").after(nav);
});
