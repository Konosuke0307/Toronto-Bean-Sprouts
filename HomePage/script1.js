const gameMedia = [
    {
        title: 'Game vs Tanino',
        date: 'May 5, 2024',
        photos: ['img10.JPG', 'img10.JPG', 'img10.JPG'],
        videos: ['video1.mp4', 'video2.mp4']
    },
    {
        title: 'Game vs Taro Baseball Club',
        date: 'May 5, 2024',
        photos: ['img10.JPG', 'img10.JPG', 'img10.JPG'],
        videos: ['video1.mp4', 'video2.mp4']
    },
    {
        title: 'Game vs Tigers',
        date: 'May 12, 2024',
        photos: ['img10.JPG', 'img10.JPG', 'img10.JPG'],
        videos: ['video1.mp4', 'video2.mp4']
    },
    {
        title: 'Game vs Giants',
        date: 'May 26, 2024',
        photos: ['img10.JPG', 'img10.JPG', 'img10.JPG'],
        videos: ['video1.mp4', 'video2.mp4']
    },
    {
        title: 'Game vs Blue Hawks',
        date: 'June 2, 2024',
        photos: ['img10.JPG', 'img10.JPG', 'img10.JPG'],
        videos: ['video1.mp4', 'video2.mp4']
    },
    {
        title: 'Game vs Ice Bears',
        date: 'June 9, 2024',
        photos: ['img10.JPG', 'img10.JPG', 'img10.JPG'],
        videos: ['video1.mp4', 'video2.mp4']
    },
    {
        title: 'Game vs Whales',
        date: 'June 16, 2024',
        photos: ['img10.JPG', 'img10.JPG', 'img10.JPG'],
        videos: ['video1.mp4', 'video2.mp4']
    },
    {
        title: 'Game vs Taro Baseball Club',
        date: 'June 23, 2024',
        photos: ['img10.JPG', 'img10.JPG', 'img10.JPG'],
        videos: ['video1.mp4', 'video2.mp4']
    },

];

let currentGameIndex = 0;

function updateGameMedia(index) {
    const game = gameMedia[index];
    document.querySelector('.game-title').textContent = game.title;
    document.querySelector('.game-date').textContent = game.date;

    const photosContainer = document.querySelector('.photos');
    photosContainer.innerHTML = '';
    game.photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        photosContainer.appendChild(img);
    });

    const videosContainer = document.querySelector('.videos');
    videosContainer.innerHTML = '';
    game.videos.forEach(video => {
        const videoElem = document.createElement('video');
        videoElem.controls = true;
        videoElem.src = video;
        videosContainer.appendChild(videoElem);
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentGameIndex = (currentGameIndex > 0) ? currentGameIndex - 1 : gameMedia.length - 1;
    updateGameMedia(currentGameIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentGameIndex = (currentGameIndex < gameMedia.length - 1) ? currentGameIndex + 1 : 0;
    updateGameMedia(currentGameIndex);
});

// Initial load
updateGameMedia(currentGameIndex);


//
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.team-photo');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change image every 3 seconds
    showSlide(currentSlide); // Show the first slide initially
});
