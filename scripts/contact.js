import { siteConfig } from "./content.js";

const { contact } = siteConfig;

const phone = document.querySelector("#contact-phone");
const email = document.querySelector("#contact-email");
const area = document.querySelector("#contact-area");
const hours = document.querySelector("#contact-hours");
const facebook = document.querySelector("#contact-facebook");
const instagram = document.querySelector("#contact-instagram");

if (phone) {
  phone.href = contact.phoneHref;
  phone.textContent = contact.phone;
}

if (email) {
  email.href = contact.emailHref;
  email.textContent = contact.email;
}

if (area) {
  area.textContent = contact.serviceArea;
}

if (hours) {
  hours.textContent = contact.hours.join(" | ");
}

if (facebook) {
  facebook.href = contact.facebook;
}

if (instagram) {
  instagram.href = contact.instagram;
}
