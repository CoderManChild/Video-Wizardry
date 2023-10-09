from youtube_transcript_api import YouTubeTranscriptApi

# Replace 'YOUR_VIDEO_URL' with the URL of the YouTube video you want to download the transcript for
video_url = 'https://www.youtube.com/watch?v=4kn3WXjYdPE'

try:
    # Get the video ID from the URL
    video_id = video_url.split('v=')[1]

    # Download the transcript
    transcript = YouTubeTranscriptApi.get_transcript(video_id)

    # Create a text file to save the transcript
    with open('transcript.txt', 'w', encoding='utf-8') as file:
        for entry in transcript:
            text = entry['text']
            file.write(text + '\n')

    print('Transcript downloaded successfully.')

except Exception as e:
    print(f'Error: {e}')
