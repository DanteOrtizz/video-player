const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//play and pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
}

function updateProgress() {
    return true;
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress() {
    return true;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
