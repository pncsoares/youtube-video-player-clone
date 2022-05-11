const playPauseBtn = document.querySelector('.play-pause-btn');
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('video');

playPauseBtn.addEventListener('click', togglePlayPause);

function togglePlayPause() {
    video.paused ? video.play() : video.pause();
}

video.addEventListener('play', () => {
    videoContainer.classList.remove('paused');
});

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused');
});
