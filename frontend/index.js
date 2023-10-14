let transcript;

function animateContainers() {
            // Hide the text-container
            const textContainer = document.querySelector('.textbox-container');
            textContainer.style.display = 'none';

            // Show the button-container
            const buttonContainer = document.querySelector('.button-container');
            buttonContainer.style.display = 'flex';
         }

function animateButtonContainer() {
            // Hide the button-container
            const buttonContainer = document.querySelector('.button-container');
            buttonContainer.style.display = 'none';

            // Show the button-3-container
            const button3Container = document.querySelector('.button-3-container');
            button3Container.style.display = 'flex';
         }


async function getTranscript() {
    const videoUrl = document.getElementById("url-textbox").value;
    try {
        // Get the video ID from the URL
        const videoId = videoUrl.split('v=')[1].split('&')[0];

        // Get the transcript data
        const transcriptData = await YouTubeTranscriptApi.getTranscript(videoId);

        // Extract the text content from the transcript data
        const transcript = transcriptData.map(entry => entry.text).join('\n');

        console.log('Transcript retrieved successfully.');
        return transcript;
    } catch (error) {
        console.error(`Error: ${error}`);
        return null;
    }
}

function processAndAnimate() {
    getTranscript();
    animateContainers();
}
