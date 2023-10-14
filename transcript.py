from youtube_transcript_api import YouTubeTranscriptApi

def download_transcript(video_url, output_file):
    try:
        # Get the video ID from the URL
        video_id = video_url.split('v=')[1]

        # Download the transcript
        transcript = YouTubeTranscriptApi.get_transcript(video_id)

        # Create a text file to save the transcript
        with open(output_file, 'w', encoding='utf-8') as file:
            for entry in transcript:
                text = entry['text']
                file.write(text + '\n')

        print('Transcript downloaded successfully.')

    except Exception as e:
        print(f'Error: {e}')

video_url = 'https://www.youtube.com/watch?v=6G6i8vSa8Zs&ab_channel=TheOrganicChemistryTutor'
output_file = 'transcript.txt'

download_transcript(video_url, output_file)
