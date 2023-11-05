const file  = JSON.parse(localStorage.getItem('videos'));

let ytVideos = '';
file.forEach((videos) => {
    ytVideos +=`
    <div class="video-preview">
    <div class="t-row">
    <img class="thumbnail" src="${videos.image}" alt="${videos.image}">
        <div class="video-time"> ${videos.time} </div>
        </div>
        <div class="video-info-grid">
            <div class="channel-picture">
                <img class="profile-picture" src="${videos.channel}" alt="${videos.channel}">
            </div>
            <div class="video-info">
                <p class="v-t">${videos.title}</p>
                <p class="v-a">${videos.author}</p>
                <p class="v-s">${videos.status}</p>
            </div>
        </div>
    </div>
    `;
});

document.querySelector('.panel').innerHTML = ytVideos;


const toggle_btn = document.querySelector('#checkbox');

toggle_btn.addEventListener('change', () => {
    if (toggle_btn.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

const picture = document.querySelector('.user-profile');
const panel = document.querySelector('.user-panel');
    picture.addEventListener('click', () => {
        if (panel.style.display === 'none'){
            panel.style.display = 'block';
        }else{
            panel.style.display = 'none';
        }
});