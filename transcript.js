const YouTubeTranscriptApi = require('youtube-transcript-api');

async function getTranscript(videoUrl) {
    try {
        // Get the video ID from the URL
        const videoId = videoUrl.split('v=')[1].split('&')[0];

        // Download the transcript
        const transcript = await YouTubeTranscriptApi.getTranscript(videoId);

        console.log('Transcript downloaded successfully.');
        return transcript;
    } catch (error) {
        console.error(`Error: ${error}`);
        return null;
    }
}

// Replace 'YOUR_VIDEO_URL' with the URL of the YouTube video you want to download the transcript for
const videoUrl = 'https://www.youtube.com/watch?v=6G6i8vSa8Zs&ab_channel=TheOrganicChemistryTutor';

getTranscript(videoUrl).then((transcript) => {
    console.log(transcript);
});
