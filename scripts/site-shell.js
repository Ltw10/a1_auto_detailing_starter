import { siteConfig } from "./content.js";

function normalizePath(path) {
  return path.split("/").pop() || "index.html";
}

function buildHeader() {
  const current = normalizePath(window.location.pathname);
  const links = siteConfig.nav
    .map((item) => {
      const active = current === item.href ? "active" : "";
      return `<a class="${active}" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return `
    <div class="site-wrap nav-wrap">
      <a class="brand" href="index.html" aria-label="${siteConfig.name} home">
        <img class="brand-logo" src="assets/a1_logo.png" alt="A1 Auto Detailing logo" />
        <span>${siteConfig.name}</span>
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav id="site-nav" class="site-nav" aria-label="Main navigation">${links}</nav>
    </div>
  `;
}

function buildFooter() {
  const { contact } = siteConfig;
  return `
    <div class="site-wrap footer-grid">
      <section>
        <img class="footer-logo" src="assets/a1_logo.png" alt="A1 Auto Detailing logo" />
        <h3>${siteConfig.name}</h3>
        <p>${siteConfig.tagline}</p>
      </section>
      <section>
        <h3>Quick Links</h3>
        <div class="footer-links">${siteConfig.nav
          .map((item) => `<a href="${item.href}">${item.label}</a>`)
          .join("")}</div>
      </section>
      <section>
        <h3>Contact</h3>
        <p><a href="${contact.phoneHref}">${contact.phone}</a></p>
        <p><a href="${contact.emailHref}">${contact.email}</a></p>
        <p>${contact.serviceArea}</p>
      </section>
    </div>
  `;
}

export function mountShell() {
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  if (header) header.innerHTML = buildHeader();
  if (footer) footer.innerHTML = buildFooter();

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }
}
