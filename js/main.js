const barsIcon = document.getElementById('barsIcon');
const listItems = document.getElementById('navBar');

barsIcon.addEventListener('click', () => {
    listItems.classList.toggle('list-items');
});

function sendMessage() {
    const sndMsg = document.getElementById('sendMessage');
    sndMsg.addEventListener('click', (e) => {
        e.preventDefault();
        const targetOverlay = document.querySelector('.overlay');
        const closeDiv = document.querySelector('.close-div');
        targetOverlay.style.display = 'flex';
    
        closeDiv.addEventListener('click', () => {
            targetOverlay.style.display = 'none';
        });
    });
};
sendMessage();

function showCats() {
    const moreCats = document.querySelector('.cats');
    moreCats.addEventListener('click', () => {
        const listCats = document.querySelector('.cats-lg');
        listCats.classList.toggle('more-cats');
    });
};
showCats();