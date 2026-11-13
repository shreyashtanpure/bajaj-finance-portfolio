(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  gsap.timeline({ delay: .6 })
    .from(".line>span", { yPercent: 110, duration: 1, stagger: .12, ease: "power4.out" })
    .from(".sub,.cta .btn,.hero .eyebrow", { y: 20, opacity: 0, stagger: .1, duration: .7 }, "-=.5")
    .from(".phone", { scale: .8, opacity: 0, duration: 1, ease: "back.out(1.4)" }, "-=1")
    .from(".fcard", { scale: .4, opacity: 0, stagger: .12, ease: "back.out(2)" }, "-=.6");
  if (matchMedia("(hover:hover)").matches) {
    addEventListener("mousemove", (e) => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      document.querySelectorAll(".fcard").forEach((c) => gsap.to(c, { x: x * +c.dataset.depth, y: y * +c.dataset.depth, duration: .8, ease: "power2.out" }));
      gsap.to(".g1", { x: x * -60, y: y * -60, duration: 1.2 });
    });
    document.querySelectorAll(".magnetic").forEach((b) => {
      b.addEventListener("mousemove", (e) => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .25, y: (e.clientY - r.top - r.height / 2) * .35, duration: .3 }); });
      b.addEventListener("mouseleave", () => gsap.to(b, { x: 0, y: 0, duration: .5, ease: "elastic.out(1,.5)" }));
    });
  }
  gsap.utils.toArray(".reveal,.sec .eyebrow").forEach((el) =>
    gsap.from(el, { y: 40, opacity: 0, duration: .9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }));
  ScrollTrigger.batch(".card", { start: "top 90%", once: true, onEnter: (b) => gsap.from(b, { y: 50, opacity: 0, stagger: .08, duration: .7 }) });
  gsap.to(".stage", { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  const steps = gsap.utils.toArray(".step");
  ScrollTrigger.create({ trigger: ".story", start: "top top", end: "bottom bottom",
    onUpdate: (s) => { const i = Math.min(steps.length - 1, Math.floor(s.progress * steps.length)); steps.forEach((el, k) => el.classList.toggle("on", k === i)); gsap.set("#trackFill", { width: s.progress * 100 + "%" }); } });
})();
