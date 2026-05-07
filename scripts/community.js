import { communityImages } from "./content.js";

const communityGrid = document.querySelector("#community-grid");
if (communityGrid) {
  communityGrid.innerHTML = communityImages
    .map(
      (image, index) => `
      <figure class="community-item">
        <img loading="lazy" src="${image}" alt="A1 community customer ${index + 1}" />
      </figure>
    `,
    )
    .join("");
}
