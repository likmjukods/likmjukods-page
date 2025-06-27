// main.js — pilnā versija

// Navigācijas pārslēgšana function setActive(id) { document.querySelectorAll('nav a').forEach(el => el.classList.remove('active')); document.getElementById(id).classList.add('active');

document.querySelectorAll('main > section').forEach(section => section.style.display = 'none'); document.getElementById('section-' + id.replace('link-', '')).style.display = 'block'; }

// Spēļu ielāde async function loadGames() { try { const response = await fetch('games.json'); const games = await response.json();

const container = document.getElementById('games-container');
container.innerHTML = '';

for (const game of games) {
  const gameEl = document.createElement('div');
  gameEl.className = 'game';
  gameEl.innerHTML = `
    <strong>${game.time} — ${game.team1} vs ${game.team2}</strong><br>
    <em>${game.sport}</em>
  `;
  container.appendChild(gameEl);
}

} catch (e) { console.error('Kļūda ielādējot spēles:', e); } }

// Rezultātu sadaļa (vēl nav aktīva) function showResults() { alert('Drīzumā pieejams!'); }

// Notikumi window.onload = () => { setActive('link-sakums'); document.getElementById('link-sakums').addEventListener('click', () => setActive('link-sakums')); document.getElementById('link-speles').addEventListener('click', () => { setActive('link-speles'); loadGames(); }); document.getElementById('link-rezultati').addEventListener('click', () => { setActive('link-rezultati'); showResults(); }); }

