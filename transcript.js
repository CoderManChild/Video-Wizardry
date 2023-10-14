const { YoutubeTranscript } = require('youtube-transcript');

YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=aFfmMZ7AQzs&ab_channel=DharMannStudios').then((transcript) => {
    transcript.forEach((entry, index) => {
        console.log(`${entry.text}`);
    });
});
