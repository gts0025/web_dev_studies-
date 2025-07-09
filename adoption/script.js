const animals = [
  {
    name: "Meowsalot",
    type: "cat",
    bio: "Enjoys climbing curtains and staring into your soul.",
    image: "https://learnwebcode.github.io/pet-adoption-data/photos/meowsalot.webp"
  },
  {
    name: "Barksalot",
    type: "dog",
    bio: "Loves long walks, digging holes, and chasing squirrels.",
    image: "https://learnwebcode.github.io/pet-adoption-data/photos/barksalot.webp"
  },
  {
    name: "Fluffy",
    type: "rabbit",
    bio: "Eats carrots and hops around happily all day.",
    image: "https://learnwebcode.github.io/pet-adoption-data/photos/fluffy.webp"
  }
];

const container = document.querySelector(".Animals");

// Clear existing content
container.innerHTML = "";

// Loop and insert each animal
animals.forEach(animal => {
  const animalDiv = document.createElement("div");
  animalDiv.classList.add("single");

  animalDiv.innerHTML = `
    <img src="${animal.image}" alt="${animal.name}" />
    <div class="info">
      <div class="name">${animal.name}</div>
      <div class="text">${animal.bio}</div>
      <button class="adopt">ADOPT</button>
    </div>
  `;

  container.appendChild(animalDiv);
});
