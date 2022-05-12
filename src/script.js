const playPauseBtn = document.querySelector('.play-pause-btn');
const theatherBtn = document.querySelector('.theater-btn');
const fullScreenBtn = document.querySelector('.full-screen-btn');
const miniPlayerBtn = document.querySelector('.mini-player-btn');
const muteBtn = document.querySelector('.mute-btn');
const volumeSlider = document.querySelector('.volume-slider');

const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('video');

document.addEventListener('keydown', (e) => {
    const tagName = document.activeElement.tagName.toLowerCase();

    if (tagName === 'input') {
        return;
    }

    switch (e.key.toLowerCase()) {
        case ' ':
            if (tagName === 'button') {
                return;
            }
        case 'k':
            togglePlayPause();
            break;

        case 'f':
            toggleFullScreenMode();
            break;

        case 't':
            toggleTheaterMode();
            break;

        case 'i':
            toggleMiniPlayerMode();
            break;

        case 'm':
            toggleMute();
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

theatherBtn.addEventListener('click', toggleTheaterMode);

function toggleTheaterMode() {
    videoContainer.classList.toggle('theater');
}

fullScreenBtn.addEventListener('click', toggleFullScreenMode);
document.addEventListener('fullscreenchange', () => {
    videoContainer.classList.toggle('full-screen', document.fullscreenElement);
});

function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

miniPlayerBtn.addEventListener('click', toggleMiniPlayerMode);

function toggleMiniPlayerMode() {
    if (videoContainer.classList.contains('mini-player')) {
        document.exitPictureInPicture();
    } else {
        video.requestPictureInPicture();
    }
}

video.addEventListener('enterpictureinpicture', () => {
    videoContainer.classList.add('mini-player');
});

video.addEventListener('leavepictureinpicture', () => {
    videoContainer.classList.remove('mini-player');
});

muteBtn.addEventListener('click', toggleMute);

function toggleMute() {
    video.muted = !video.muted;
}

volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
    video.muted = e.target.value === 0;
});

video.addEventListener('volumechange', () => {
    volumeSlider.value = video.volume;

    let volumeLevel;

    if (video.muted || video.volume === 0) {
        volumeSlider.value = 0;
        volumeLevel = 'muted';
    } else if (video.volume >= 0.5) {
        volumeLevel = 'high';
    } else {
        volumeLevel = 'low';
    }

    videoContainer.dataset.volumeLevel = volumeLevel;
});
