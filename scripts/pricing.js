import { detailPackages } from "./content.js";

const pricingGrid = document.querySelector("#pricing-grid");
if (pricingGrid) {
  pricingGrid.innerHTML = detailPackages
    .map((pkg) => {
      const features = pkg.features.map((feature) => `<li>${feature}</li>`).join("");
      const prices = Object.entries(pkg.pricing)
        .map(
          ([tier, value]) => `
          <div class="tier">
            <span>${tier}</span>
            <strong>${value}</strong>
          </div>
        `,
        )
        .join("");

      return `
        <article class="package-card">
          <p class="pill">${pkg.badge}</p>
          <h3>${pkg.name}</h3>
          <ul>${features}</ul>
          <div class="tiers">${prices}</div>
        </article>
      `;
    })
    .join("");
}
