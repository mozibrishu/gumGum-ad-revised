let containerBox = document.querySelector('#containerBox');
let flexContainer = document.querySelector('#flexContainer');
let videoContainer = document.querySelector('#videoContainer');
let imageTextContainer = document.querySelector('#imageTextContainer');
let buynow = document.querySelector('#buynow');
let Onegb = document.querySelector('#Onegb');
let imageText = document.querySelector('#imageText');
let imageTextMove = document.querySelector('#imageTextMove');


let mute = 1;
playMute();

let listenerIn = () => { };
let listenerOut = () => { };
checkMediaQuery();
window.addEventListener('resize', checkMediaQuery);

function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth > 768) {
        flexContainer.classList.remove('minFlexContainer');
        containerBox.classList.remove('minContainerBox');
        videoContainer.classList.remove('minVideoContainer');
        imageTextContainer.classList.remove('minImageTextContainer');
        buynow.classList.remove('hidden');
        Onegb.classList.remove('minOnegb');
        imageText.classList.remove('minImageText');
        listenerIn = maxFirst;
        listenerOut = maxSecond;
        document.querySelector('.containerBox').addEventListener('mouseover', listenerIn);
        document.querySelector('.containerBox').addEventListener('mouseout', listenerOut);
    }
    else {
        flexContainer.classList.add('minFlexContainer');
        containerBox.classList.add('minContainerBox');
        videoContainer.classList.add('minVideoContainer');
        imageTextContainer.classList.add('minImageTextContainer');
        buynow.classList.add('hidden');
        Onegb.classList.add('minOnegb');
        imageText.classList.add('minImageText');
        listenerIn = minFirst;
        listenerOut = minSecond;
        document.querySelector('.containerBox').addEventListener('mouseover', listenerIn);
        document.querySelector('.containerBox').addEventListener('mouseout', listenerOut);
    }
}


function maxFirst() {

    minSecond();
    imageTextContainer.classList.add('newImageTextContainer');

    document.querySelector('.containerBox').classList.add('newContainerBox');
    document.querySelector('.videoContainer').classList.add('newVideoContainer');
    document.querySelector('.buynow').classList.add('buynow-move');
    document.querySelector('.Onegb').classList.add('Onegb-move');

    imageText.classList.add('zeroOpacity');
    imageTextMove.classList.add('oneOpacity');

    document.querySelector('.imageTextMove').classList.add('imageTextMove-animation');
    // document.querySelector('.imageTextMove').style.opacity = 1;

}

function maxSecond() {
    imageTextContainer.classList.remove('newImageTextContainer');
    containerBox.classList.remove('newContainerBox');
    videoContainer.classList.remove("newVideoContainer");

    document.querySelector('.buynow').classList.remove('buynow-move');
    document.querySelector('.Onegb').classList.remove('Onegb-move');
    imageText.classList.remove('zeroOpacity');
    imageTextMove.classList.remove('oneOpacity');

    document.querySelector('.imageTextMove').classList.remove('imageTextMove-animation');
}



function minFirst() {

    containerBox.classList.add('newMinContainerBox');
    videoContainer.classList.add('newMinVideoContainer');
    imageTextContainer.classList.add('newMinImageTextContainer');
    Onegb.classList.add('newMinOnegb');
    imageText.classList.add('newMinImageText');
    buynow.classList.add('newMinBuyNow');
    buynow.classList.remove('hidden','zeroOpacity');
    document.querySelector('.imageText').style.opacity = 1;
    document.querySelector('.imageTextMove').style.opacity = 0;

}

function minSecond() {

    containerBox.classList.remove('newMinContainerBox');
    videoContainer.classList.remove('newMinVideoContainer');
    imageTextContainer.classList.remove('newMinImageTextContainer');
    Onegb.classList.remove('newMinOnegb');
    buynow.classList.remove('newMinBuyNow'); 
    buynow.classList.add('zeroOpacity');
    imageText.classList.remove('newMinImageText');


}








// video code
function playMute() {
    var player = document.querySelector('#videoContainer');
    var video = player.querySelector('#myVideo');
    var toggle = player.querySelector('#toggle');
    var sound = player.querySelector('#sound');

    var playIcon = `<i class="material-icons">play_arrow</i>`;
    var pauseIcon = `<i class="material-icons">pause</i>`;
    var volumeUp = `<i class="material-icons">volume_up</i>`;
    var volumeOff = `<i class="material-icons">volume_off</i>`;
    var replayIcon = `<i class="material-icons">replay</i>`;
    if (!mute) {
        video.muted = false;
        sound.innerHTML = volumeUp;
    } else {
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
        if (video.muted) {
            video.muted = false;
            sound.innerHTML = volumeUp;
            mute = 0;
        } else {
            video.muted = true;
            sound.innerHTML = volumeOff;
            mute = 1;
        }
    }

    video.addEventListener('play', updatePlayPause);
    video.addEventListener('pause', updatePlayPause);
    toggle.addEventListener('click', togglePlay);
    sound.addEventListener('click', toggleSound);

}