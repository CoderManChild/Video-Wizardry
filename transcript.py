from youtube_transcript_api import YouTubeTranscriptApi

def get_transcript(video_url):
    try:
        # Get the video ID from the URL
        video_id = video_url.split('v=')[1]

        # Download the transcript
        transcript = YouTubeTranscriptApi.get_transcript(video_id)

        print('Transcript downloaded successfully.')
        return transcript

    except Exception as e:
        print(f'Error: {e}')
        return None

video_url = 'https://www.youtube.com/watch?v=6G6i8vSa8Zs&ab_channel=TheOrganicChemistryTutor'

transcript = get_transcript(video_url)
