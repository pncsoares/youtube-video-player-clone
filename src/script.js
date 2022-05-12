const playPauseBtn = document.querySelector('.play-pause-btn');
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('video');

document.addEventListener('keydown', e => {
    switch (e.key.toLowerCase()) {
        case ' ':
        case 'k':
            togglePlayPause();
            break;
    }
});

playPauseBtn.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause() {
    video.paused ? video.play() : video.pause();
}

video.addEventListener('play', () => {
    videoContainer.classList.remove('paused');
});

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused');
});
