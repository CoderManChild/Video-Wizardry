const { YoutubeTranscript } = require('youtube-transcript');
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


const { YoutubeTranscript } = require('youtube-transcript');

function getTranscript(videoURL) {
  return new Promise((resolve, reject) => {
    YoutubeTranscript.fetchTranscript(videoURL)
      .then((transcript) => {
        const transcriptText = transcript.map((entry) => entry.text).join('\n');
        resolve(transcriptText);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function processAndAnimate() {
    getTranscript();
    animateContainers();
}
