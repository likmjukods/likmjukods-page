
const root = document.getElementById('root');
const navBtns = document.querySelectorAll('.nav-btn');

const fixtureData = [
  {date:'19.06', home:'DE Vācija', away:'HU Ungārija', odd:'1.35'},
  {date:'20.06', home:'ES Spānija', away:'PL Polija', odd:'1.52'},
  {date:'21.06', home:'FR Francija', away:'NL Nīderlande', odd:'1.63'}
];
const resultData = [
  {date:'16.06', home:'IT Itālija', away:'GR Grieķija', score:'2-0'},
  {date:'17.06', home:'PT Portugāle', away:'HR Horvātija', score:'1-1'}
];

function HomePage(){
  return `
  <section class="section hero">
    <div class="hero-content">
      <h1>Likmju Kods</h1>
      <p>Tava vieta profesionālām sporta prognozēm, datu analīzei un AI-vērtētiem koeficientiem.</p>
      <button class="nav-btn primary" data-page="bet">Veikt likmi</button>
    </div>
  </section>`;
}

function GamesPage(){
  const rows = fixtureData.map(m=>`
    <tr>
      <td>${m.date}</td>
      <td><span class="tag-home">HOME</span> ${m.home}</td>
      <td><span class="tag-away">AWAY</span> ${m.away}</td>
      <td>@ <strong>${m.odd}</strong></td>
    </tr>`).join('');
  return `
    <section class="section">
      <h2>Nākamās spēles</h2>
      <table class="table">
        <thead><tr><th>Datums</th><th>Komanda</th><th></th><th>Koef.</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`;
}

function ResultsPage(){
  const rows = resultData.map(m=>`
    <tr>
      <td>${m.date}</td>
      <td>${m.home}</td>
      <td>${m.away}</td>
      <td><strong>${m.score}</strong></td>
    </tr>`).join('');
  return `
    <section class="section">
      <h2>Rezultāti</h2>
      <table class="table">
        <thead><tr><th>Datums</th><th>Home</th><th>Away</th><th>Rez.</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>`;
}

function BetPage(){
  return `
    <section class="section">
      <h2>Veikt likmi (demo)</h2>
      <p>Drīzumā – AI ģenerētas prognozes un drošības filtri.</p>
    </section>`;
}

const routes = {
  home:HomePage,
  games:GamesPage,
  results:ResultsPage,
  bet:BetPage
};

function render(page='home'){
  root.innerHTML = routes[page]();
  root.querySelectorAll('[data-page]').forEach(btn=>{
    btn.onclick = () => render(btn.dataset.page);
  });
}

navBtns.forEach(btn=>{
  btn.onclick = () => render(btn.dataset.page);
});

render('home');
