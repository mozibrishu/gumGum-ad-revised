let containerBox = document.querySelector('#containerBox');
let flexContainer = document.querySelector('#flexContainer');
let videoContainer = document.querySelector('#videoContainer');
let imageTextContainer = document.querySelector('#imageTextContainer');
let mute =1;

document.querySelector('.containerBox').addEventListener('mouseover', ()=>{

    imageTextContainer.classList.add('newImageTextContainer');

    document.querySelector('.containerBox').classList.add('newContainerBox');
    document.querySelector('.videoContainer').classList.add('newVideoContainer');
    document.querySelector('.buynow').classList.add('buynow-move');
    document.querySelector('.Onegb').classList.add('Onegb-move');

    document.querySelector('.imageText').style.opacity = 0;

    document.querySelector('.imageTextMove').classList.add('imageTextMove-animation');
    document.querySelector('.imageTextMove').style.opacity = 1;
});

document.querySelector('.containerBox').addEventListener('mouseout', ()=>{
    document.querySelector('.imageTextContainer').classList.remove('newImageTextContainer');
    document.querySelector('.containerBox').classList.remove('newContainerBox');
    document.querySelector('.videoContainer').classList.remove('newVideoContainer');
    document.querySelector('.buynow').classList.remove('buynow-move');
    document.querySelector('.Onegb').classList.remove('Onegb-move');
    document.querySelector('.imageText').style.opacity = 1;
    document.querySelector('.imageTextMove').style.opacity = 0;
    document.querySelector('.imageTextMove').classList.remove('imageTextMove-animation');
});


function playMute() {
    var player = document.querySelector('#videoContainer');
    var video = player.querySelector('.myVideo');
    var toggle = player.querySelector('#toggle');
    var sound = player.querySelector('#sound');
    
    var playIcon = `<i class="material-icons">play_arrow</i>`;
    var pauseIcon = `<i class="material-icons">pause</i>`;
    var volumeUp = `<i class="material-icons">volume_up</i>`;
    var volumeOff = `<i class="material-icons">volume_off</i>`;
    var replayIcon = `<i class="material-icons">replay</i>`;
    if(!mute){
        video.muted = false;
        sound.innerHTML = volumeUp;
    }else{
        video.muted = true;
        sound.innerHTML = volumeOff;
    }
    // console.log(video.paused);
    toggle.innerHTML = video.paused ? playIcon : pauseIcon; 
    function togglePlay(e) {
        e.stopPropagation();
        var playOrPause = video.paused ? 'play' : 'pause';
        video[playOrPause]();
    }
    
    function updatePlayPause(e) {
        e.stopPropagation();
        var playPauseIcon = this.paused ? playIcon : pauseIcon;    
        toggle.innerHTML = playPauseIcon;
    }
    
    function toggleSound(e) {
        e.stopPropagation();
        if(video.muted){
            video.muted = false;
        sound.innerHTML = volumeUp;
        mute=0;
        }else{
            video.muted = true;
        sound.innerHTML = volumeOff;
        mute=1;
        }
        // var soundIcon = video.muted ? volumeUp : volumeOff;
        // sound.innerHTML = soundIcon;
    
        // if (video.muted) video.muted = false;
        // else video.muted = true;
    }
    
    video.addEventListener('play', updatePlayPause);
    video.addEventListener('pause', updatePlayPause);
    toggle.addEventListener('click', togglePlay);
    sound.addEventListener('click', toggleSound);
        
}