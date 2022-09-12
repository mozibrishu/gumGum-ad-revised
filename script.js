let containerBox = document.querySelector('.containerBox');
let flexContainer = document.querySelector('.flexContainer');

let videoContainer = document.querySelector('.videoContainer');
let imageContainer = document.querySelector('.imageContainer');


document.querySelector('.containerBox').addEventListener('mouseover', ()=>{
    document.querySelector('.imageContainer').classList.add('newImageContainer');

    document.querySelector('.containerBox').classList.add('newContainerBox');
    document.querySelector('.videoContainer').classList.add('newVideoContainer');


});

document.querySelector('.containerBox').addEventListener('mouseout', ()=>{
    document.querySelector('.imageContainer').classList.remove('newImageContainer');
    document.querySelector('.containerBox').classList.remove('newContainerBox');
    document.querySelector('.videoContainer').classList.remove('newVideoContainer');

});