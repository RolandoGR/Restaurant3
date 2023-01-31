export function locations() {
  const content = document.getElementById("content");
  content.replaceChildren();

  const initHeader = document.createElement("h1");
  initHeader.textContent += "Locations";
  content.appendChild(initHeader);

  const para1 = document.createElement("p");
  para1.textContent += `Salud a la mesa`;
  content.appendChild(para1);
}
