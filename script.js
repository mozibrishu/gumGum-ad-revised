let containerBox = document.querySelector('#containerBox');
let flexContainer = document.querySelector('#flexContainer');
let videoContainer = document.querySelector('#videoContainer');
let imageTextContainer = document.querySelector('#imageTextContainer');


document.querySelector('.containerBox').addEventListener('mouseover', ()=>{

    imageTextContainer.classList.add('newImageTextContainer');

    document.querySelector('.containerBox').classList.add('newContainerBox');
    document.querySelector('.videoContainer').classList.add('newVideoContainer');


});

document.querySelector('.containerBox').addEventListener('mouseout', ()=>{
    document.querySelector('.imageTextContainer').classList.remove('newImageTextContainer');
    document.querySelector('.containerBox').classList.remove('newContainerBox');
    document.querySelector('.videoContainer').classList.remove('newVideoContainer');

});


