/* Standard amortization: EMI = P*r*(1+r)^n / ((1+r)^n - 1), r = annual%/12/100 */
function calcEMI(P, annual, n) {
  const r = annual / 12 / 100;
  if (n <= 0) return 0;
  if (r === 0) return P / n;
  const f = Math.pow(1 + r, n);
  return (P * r * f) / (f - 1);
}
(function () {
  const $ = (id) => document.getElementById(id);
  if (!$("calc")) return;
  const inr = (v) => "₹ " + Math.round(v).toLocaleString("en-IN");
  function update() {
    const P = +$("inP").value, R = +$("inR").value, N = +$("inN").value;
    const e = calcEMI(P, R, N);
    $("oP").textContent = inr(P); $("oR").textContent = R.toFixed(1) + "%"; $("oN").textContent = N + " mo";
    $("rE").textContent = inr(e); $("rI").textContent = inr(e * N - P); $("rT").textContent = inr(e * N);
  }
  ["inP", "inR", "inN"].forEach((id) => $(id).addEventListener("input", update));
  update();
})();
