function checkPastGamesAndMoveToResults(games) {
    const today = new Date().toISOString().split("T")[0];
    const pastGames = games.filter(game => {
        return (
            game.sport &&
            game.match &&
            game.date &&
            game.date < today
        );
    });

    const currentResults = pastGames.map(game => ({
        sport: game.sport,
        match: game.match,
        date: game.date,
        prediction: game.prediction,
        confidence: game.confidence
    }));

    fetch("results.json")
        .then(res => res.json())
        .then(results => {
            const combined = [...results, ...currentResults];
            saveJSON("results.json", combined);
        });
}

function saveJSON(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

window.onload = function () {
    const baseUrl = window.location.origin;
    fetch(`${baseUrl}/games.json`)
        .then(res => res.json())
        .then(games => {
            checkPastGamesAndMoveToResults(games);
        });
};
