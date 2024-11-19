const startQuizButton = document.getElementById('startQuizButton');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');

startQuizButton.addEventListener('click', startQuiz);

function startQuiz() {
    const playlistLink = document.getElementById('playlistLink').value;
    if (!playlistLink) {
        alert('Voer een geldige playlist link in.');
        return;
    }

    // Voorbeeld voor het ophalen van gegevens van Spotify (mockup)
    // Hier moet je de Spotify API aanroepen
    const songs = [
        { artist: "Artiest 1", title: "Nummer 1" },
        { artist: "Artiest 2", title: "Nummer 2" }
    ];

    let currentSongIndex = 0;
    let timer;

    function playSong() {
        if (currentSongIndex < songs.length) {
            const song = songs[currentSongIndex];
            quizContainer.innerHTML = `Raad het nummer: ${song.artist} - ${song.title}`;
            currentSongIndex++;
            timer = setTimeout(playSong, 30000); // 30 seconden
        } else {
            clearTimeout(timer);
            resultContainer.innerHTML = "Quiz afgelopen!";
        }
    }

    playSong();
}
