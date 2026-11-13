/* Product data. Links are on the official domain; entity per the official company page.
   Re-verify each URL before publishing (see README). */
const BASE = "https://www.bajajfinserv.in/";
const PRODUCTS = [
  { t: "Personal Loans", c: "loans", e: "Bajaj Finance", d: "Loans for personal needs such as travel, weddings or medical costs.", u: "personal-loan", i: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6" },
  { t: "Business & MSME Loans", c: "loans", e: "Bajaj Finance", d: "Financing for small and medium businesses and professionals.", u: "business-loan", i: "M3 8h18v12H3zM8 8V4h8v4" },
  { t: "Consumer Durable Loans", c: "loans", e: "Bajaj Finance", d: "Finance electronics and appliances in instalments.", u: "consumer-durable-loan", i: "M3 5h18v11H3zM8 20h8M12 16v4" },
  { t: "EMI Card & EMI Financing", c: "cards", e: "Bajaj Finance", d: "The EMI Card, introduced in 2012, spreads purchases into instalments.", u: "emi-network", i: "M2 6h20v12H2zM2 10h20M6 15h4" },
  { t: "Fixed Deposits", c: "invest", e: "Bajaj Finance", d: "Deposits with Bajaj Finance, a deposit-taking NBFC.", u: "fixed-deposit", i: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" },
  { t: "Gold Loans", c: "loans", e: "Bajaj Finance", d: "Loans secured against gold, offered in urban markets since 2016.", u: "gold-loan", i: "M12 3l3 6 6 1-4.5 4.5 1 6.5L12 18l-5.5 3 1-6.5L3 10l6-1z" },
  { t: "Two-Wheeler Loans", c: "loans", e: "Bajaj Finance", d: "Where the company began: vehicle finance since 1987.", u: "two-wheeler-loan", i: "M6 17a3 3 0 100-.1M18 17a3 3 0 100-.1M9 17h6l-3-8H8" },
  { t: "Home Loans", c: "loans", e: "Bajaj Housing Finance Ltd.", d: "Housing finance is provided by Bajaj Housing Finance, a subsidiary.", u: "home-loan", i: "M3 11l9-7 9 7v9H3zM10 20v-6h4v6" },
  { t: "Loans Against Securities", c: "loans", e: "Bajaj Finance", d: "Borrow against eligible shares and mutual funds.", u: "loan-against-securities", i: "M3 20h18M6 16l4-5 4 3 5-8" },
  { t: "Payments & Digital Services", c: "cards", e: "Bajaj Finserv ecosystem", d: "Digital payments and services through the Bajaj Finserv app.", u: "", i: "M7 2h10v20H7zM11 18h2" }
];
const grid = document.getElementById("grid");
PRODUCTS.forEach((p) => {
  const a = document.createElement("article");
  a.className = "card"; a.dataset.cat = p.c;
  a.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${p.i}"/></svg><h3>${p.t}</h3><p>${p.d}</p><small>Offered by: ${p.e}</small>` +
    `<a href="${BASE + p.u}" target="_blank" rel="noopener noreferrer" aria-label="Learn more about ${p.t} (official site)">Learn More ↗</a>`;
  grid.appendChild(a);
});
document.querySelectorAll(".chip").forEach((b) => b.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach((x) => x.classList.toggle("on", x === b));
  const f = b.dataset.f;
  document.querySelectorAll(".card").forEach((c) => c.classList.toggle("hide", f !== "all" && c.dataset.cat !== f));
  if (window.gsap) gsap.fromTo(".card:not(.hide)", { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: .05, duration: .5, overwrite: true });
}));
const nav = document.getElementById("nav"), burger = document.getElementById("burger"), menu = document.getElementById("menu"), toTop = document.getElementById("toTop");
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
menu.addEventListener("click", (e) => { if (e.target.closest("a")) { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
addEventListener("scroll", () => { nav.classList.toggle("solid", scrollY > 30); toTop.classList.toggle("show", scrollY > 700); }, { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
addEventListener("load", () => setTimeout(() => document.getElementById("preloader").classList.add("done"), 500));
setTimeout(() => document.getElementById("preloader").classList.add("done"), 4000);
