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
    progress.value = (video.currentTime / video.duration) * 100;
   let mins = Math.floor(video.currentTime /60 );
   if (mins < 10) {
    mins = '0' + String(mins);
   }

   let sec = Math.floor(video.currentTime % 60);
   if (sec < 10) {
    sec = '0' + String(sec);
   }

   timestamp.innerHTML = `${mins}:${sec}`;
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
