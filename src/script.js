let cars = [
  {
    model: "Model 3",
    brand: "Tesla",
    isElectrical: true,
    price: 39900,
    image:
      "https://images.unsplash.com/photo-1746968578004-8f7a566e87fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    model: "Model 3",
    brand: "Tesla",
    isElectrical: true,
    price: 39900,
    image:
      "https://images.unsplash.com/photo-1745952201713-a725ce1eac8a?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let el = document.querySelector(".main");

cars.forEach((car) => {
  let card = document.createElement("div");
  card.className = "car-card";
  card.style.border = "1px solid #ccc";
  card.style.padding = "16px";
  card.style.margin = "16px";
  card.style.borderRadius = "8px";
  card.style.maxWidth = "300px";
  card.style.textAlign = "center";

  let img = document.createElement("img");
  img.src = car.image;
  img.alt = `${car.brand} ${car.model}`;
  img.style.width = "100%";
  img.style.borderRadius = "8px";

  let title = document.createElement("h2");
  title.textContent = `${car.brand} ${car.model}`;

  let price = document.createElement("p");
  price.textContent = `Price: $${car.price.toLocaleString()}`;

  let type = document.createElement("p");
  type.textContent = car.isElectrical ? "Electric Car" : "Gasoline Car";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(type);
  card.appendChild(price);

  el.appendChild(card);
});
