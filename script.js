const wrapper = document.getElementById("cards");

const createTile = (index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  cardContent.innerText = `Card ${index + 1}`;

  card.appendChild(cardContent);

  return card;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).forEach((_, index) => {
    wrapper.appendChild(createTile(index));
  });
};

const createGrid = () => {
  wrapper.innerHTML = "";

  const size = document.body.clientWidth > 800 ? 100 : 50;

  const columns = Math.floor(document.body.clientWidth / size);
  const rows = Math.floor(document.body.clientHeight / size);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};

createGrid();

window.onresize = () => createGrid();

document.getElementById("cards").onmousemove = (e) => {
  const cards = document.getElementsByClassName("card");
  const cardWrapperRect = wrapper.getBoundingClientRect();

  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - cardWrapperRect.left;
    const y = e.clientY - rect.top - cardWrapperRect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
