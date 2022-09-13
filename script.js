let containerBox = document.querySelector('#containerBox');
let flexContainer = document.querySelector('#flexContainer');
let videoContainer = document.querySelector('#videoContainer');
let imageTextContainer = document.querySelector('#imageTextContainer');


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


