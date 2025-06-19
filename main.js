// Šis ir JS koda fragments, kas automātiski pārvieto spēles uz rezultātu sarakstu pēc spēles datuma // Pieņemam, ka tev jau ir pievienots "games.json" un "results.json"

function checkPastGamesAndMoveToResults(games) { const today = new Date().toISOString().split("T")[0]; const pastGames = games.filter(game => game.date < today); const upcomingGames = games.filter(game => game.date >= today);

const resultsToAdd = pastGames.map(game => ({ sport: game.sport, match: game.match, date: game.date, prediction: game.prediction, odds: game.odds, result: "nav zināms" // var vēlāk atzīmēt pareizi/garām }));

// Saglabājam jauno results.json fetch("results.json") .then(res => res.json()) .then(currentResults => { const combined = [...currentResults, ...resultsToAdd]; saveJSON("results.json", combined); });

// Atjauninām games.json saveJSON("games.json", upcomingGames); }

function saveJSON(filename, data) { const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click(); }

// Izsaucam tikai vienu reizi kad ielādē lapa window.onload = function() { fetch("games.json") .then(res => res.json()) .then(games => { checkPastGamesAndMoveToResults(games); setActive("link-sakums"); }); };

                                             
