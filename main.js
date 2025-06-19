
document.addEventListener("DOMContentLoaded", () => {
  const gamesList = document.getElementById("games-list");
  const resultsList = document.getElementById("results-list");

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.games.forEach((game) => {
        const div = document.createElement("div");
        div.className = "game";
        div.innerHTML = `
          <h3>${game.title}</h3>
          <p>${game.sport} – ${game.date}</p>
          <p>Prognoze: ${game.prediction}</p>
          <p>Koeficients: ${game.odds}</p>
        `;
        gamesList.appendChild(div);
      });

      data.games.forEach((game) => {
        if (game.result) {
          const div = document.createElement("div");
          div.className = "result " + (game.result === "win" ? "correct" : "incorrect");
          div.textContent = (game.result === "win" ? "✓" : "✗") + " " + game.title + " — " + (game.result === "win" ? "Uzvara precīzi prognozēta" : "Prognoze garām") + ` (${game.odds})`;
          resultsList.appendChild(div);
        }
      });
    });

  document.querySelectorAll("nav a.nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("nav a.nav-link").forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      const section = document.querySelector(link.getAttribute("href"));
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  });
});
