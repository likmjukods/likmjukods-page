// Funkcija, lai ielādētu games.json failu
async function loadGames() {
  try {
    const response = await fetch('games.json');
    const data = await response.json();
    console.log("Ielādētie dati:", data);
    saveJSON("games.json", data); // parāda rezultātus
  } catch (error) {
    console.error("Kļūda ielādējot failu:", error);
  }
}

// Funkcija, kas parāda rezultātus lapā
function paradiRezultatusLapa(data) {
  const bloks = document.getElementById("rezultati-bloks");
  if (!bloks) return;

  bloks.innerHTML = ""; // Notīra iepriekšējo saturu

  data.forEach((spēle) => {
    const rinda = document.createElement("div");
    rinda.innerHTML = `
      <strong>${spēle.komandas}</strong><br>
      Prognoze: ${spēle.prognoze} – <em>${spēle.rezultats}</em>
      <hr>
    `;
    bloks.appendChild(rinda);
  });
}

// Šī funkcija vairs nesaglabā, tikai rāda
function saveJSON(filename, data) {
  console.log("Saglabāts:", filename);
  paradiRezultatusLapa(data);
}

// Automātiski izpilda pēc lapas ielādes
window.onload = () => {
  loadGames();
};
