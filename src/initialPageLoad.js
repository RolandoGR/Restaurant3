export function initialPageLoad() {
  //clearContent();
  const content = document.getElementById("content");
  content.replaceChildren();

  const initHeader = document.createElement("h1");
  initHeader.textContent += "Earth Balance";
  content.appendChild(initHeader);

  const para1 = document.createElement("p");
  para1.textContent += `Salud a la mesa`;
  content.appendChild(para1);

  const imgHead = document.createElement("img");
  imgHead.setAttribute("src", "./img/pexels-photo-2377164.jpeg");
  imgHead.classList.add("headerImg");
  content.appendChild(imgHead);
}
