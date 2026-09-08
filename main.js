// Menu
const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".links");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("hidden");

  if (nav.classList.contains("hidden")) {
    menuIcon.textContent = "+";
  } else {
    menuIcon.textContent = "x";
  }
});

// Dark mode
const darkToggle = document.querySelector(".dark-toggle");
const darkIcon = document.querySelector(".dark-icon");

darkToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    darkIcon.textContent = "🌞";
  } else {
    darkIcon.textContent = "🌙";
  }
});

// Joke API
const jokeId = document.getElementById("joke-id");
const jokeText = document.getElementById("joke-text");
const nextJokeBtn = document.getElementById("next-joke");
const loading = document.getElementById("loading");
const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");

const getJoke = async (category = "Any") => {
  loading.classList.remove("hidden");

  try {
    const response = await fetch(
      `https://v2.jokeapi.dev/joke/${category}?safe-mode`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }

    const data = await response.json();

    console.log(data);

    jokeId.textContent = `JOKE #${data.id}`;

    if (data.type === "single") {
      jokeText.textContent = data.joke;
    } else {
      jokeText.textContent = `${data.setup} ${data.delivery}`;
    }
  } catch (error) {
    console.error(error);
    jokeText.textContent = "Oops! Couldn't get a joke. Try again!";
  } finally {
    loading.classList.add("hidden");
  }

  likeBtn.textContent = "♡";
  likeBtn.classList.remove("scale-125", "text-red-500");

  dislikeBtn.classList.remove("scale-125");
};

// Like/dislike buttons

likeBtn.addEventListener("click", () => {
  likeBtn.textContent = "♥";
  likeBtn.classList.add("scale-125", "text-red-500");

  dislikeBtn.classList.remove("scale-125");
});

dislikeBtn.addEventListener("click", () => {
  dislikeBtn.classList.add("scale-125");

  likeBtn.textContent = "♡";
  likeBtn.classList.remove("scale-125", "text-red-500");
});

// Categories
const categoriesBtn = document.getElementById("categories-btn");
const categoriesMenu = document.getElementById("categories-menu");

categoriesBtn.addEventListener("click", () => {
  categoriesMenu.classList.toggle("hidden");
});
const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    getJoke(category);

    categoriesMenu.classList.add("hidden");
  });
});
getJoke();

nextJokeBtn.addEventListener("click", () => {
  getJoke();
});
