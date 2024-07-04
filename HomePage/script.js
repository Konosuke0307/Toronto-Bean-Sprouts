document.addEventListener('DOMContentLoaded', () => {
    // Array of image paths for the slideshow
    const slideshowImages = [
        'img1.JPG',
        'img2.JPG',
        'img3.JPG',
        'img4.JPG',
        'img5.JPG',
        'img6.JPG',
        'img7.JPG',
        'img8.JPG',
        'img9.JPG',
        'img10.JPG',

        // Add paths for all 10 images
    ];

    const slideshowContainer = document.querySelector('.slideshow');

    // Create slides and captions dynamically
    slideshowImages.forEach(imagePath => {
        const slide = document.createElement('div');
        slide.classList.add('slide');

        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Bean Sprouts Image';

        const caption = document.createElement('div');
        caption.classList.add('slide-caption');

        slide.appendChild(img);
        slide.appendChild(caption);
        slideshowContainer.appendChild(slide);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const schedule = [
        { date: '2024-05-05', place: 'Greenwood', opponent: 'Tanino', homeTeam: 'Tanino', opponentLogo: 'Bean Sprouts.JPG', homeLogo: 'Tanino.JPG' },
        { date: '2024-05-05', place: 'Greenwood', opponent: 'Taro Baseball Club', homeTeam: 'Taro Baseball Club', opponentLogo: 'Bean Sprouts.JPG', homeLogo: 'Taro Baseball Club.JPG' },
        { date: '2024-05-12', place: 'Greenwood', opponent: 'Tigers', homeTeam: 'Tigers', opponentLogo: 'Bean Sprouts.JPG', homeLogo: 'Tigers.JPG' },
        { date: '2024-05-26', place: 'Greenwood', opponent: 'Giants', homeTeam: 'Giants', opponentLogo: 'Bean Sprouts.JPG', homeLogo: 'Giants.JPG' },
        { date: '2024-06-02', place: 'Highview', opponent: 'Blue Hawks', homeTeam: 'Bean Sprouts', opponentLogo: 'Blue Hawks.JPG', homeLogo: 'Bean Sprouts.JPG' },
        { date: '2024-06-09', place: 'Greenwood', opponent: 'Ice Bears', homeTeam: 'Bean Sprouts', opponentLogo: 'Ice Bears.JPG', homeLogo: 'Bean Sprouts.JPG' },
        { date: '2024-06-16', place: 'Greenwood', opponent: 'Whales', homeTeam: 'Bean Sprouts', opponentLogo: 'Whales.JPG', homeLogo: 'Bean Sprouts.JPG' },
        { date: '2024-06-23', place: 'Greenwood', opponent: 'Taro Baseball Club', homeTeam: 'Bean Sprouts', opponentLogo: 'Taro Baseball Club.JPG', homeLogo: 'Bean Sprouts.JPG' },
        { date: '2024-07-07', place: 'Highview', opponent: 'Yusei Dragons', homeTeam: 'Yusei Dragons', opponentLogo: 'Bean Sprouts.JPG', homeLogo: 'Yusei Dragons.JPG' },
        { date: '2024-07-14', place: 'Greenwood', opponent: 'Tigers', homeTeam: 'Bean Sprouts', opponentLogo: 'Tigers.JPG', homeLogo: 'Bean Sprouts.JPG' },
        { date: '2024-07-21', place: 'Highview', opponent: 'Giants', homeTeam: 'Bean Sprouts', opponentLogo: 'Giants.JPG', homeLogo: 'Bean Sprouts.JPG' },
        { date: '2024-07-28', place: 'Greenwood', opponent: 'Blue Hawks', homeTeam: 'Blue Hawks', opponentLogo: 'Bean Sprouts.JPG', homeLogo: 'Blue Hawks.JPG' },
        { date: '2024-08-11', place: 'Highview', opponent: 'Ice Bears', homeTeam: 'Ice Bears', opponentLogo: 'Bean Sprouts.JPG', homeLogo: 'Ice Bears.JPG' },
        { date: '2024-08-18', place: 'Highview', opponent: 'Tanino', homeTeam: 'Bean Sprouts', opponentLogo: 'Tanino.JPG', homeLogo: 'Bean Sprouts.JPG' },
        { date: '2024-08-25', place: 'Highview', opponent: 'Whales', homeTeam: 'Bean Sprouts', opponentLogo: 'Whales.JPG', homeLogo: 'Bean Sprouts.JPG' },

    ];

    let currentIndex = 0;
    const itemsPerPage = 3;

    function renderSchedule() {
        const scheduleContainer = document.getElementById('schedule');
        scheduleContainer.innerHTML = '';

        for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
            if (i >= schedule.length) break;
            const item = schedule[i];
            const scheduleItem = document.createElement('div');
            scheduleItem.classList.add('schedule-item');
            scheduleItem.innerHTML = `
                <p><strong>Date:</strong> ${item.date}</p>
                <p><strong>Place:</strong> ${item.place}</p>
                <p><strong>Opponent:</strong> ${item.opponent}</p>
                <img src="${item.homeLogo}" alt="${item.homeTeam}のロゴ">
                <img src="${item.opponentLogo}" alt="${item.opponent}のロゴ">
                <p><strong>Home Team:</strong> ${item.homeTeam}</p>
            `;
            scheduleContainer.appendChild(scheduleItem);
        }
    }

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex -= itemsPerPage;
                renderSchedule();
                const scheduleContainer = document.getElementById('schedule');
                scheduleContainer.scrollLeft -= scheduleContainer.clientWidth / itemsPerPage;
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex + itemsPerPage < schedule.length) {
                currentIndex += itemsPerPage;
                renderSchedule();
                const scheduleContainer = document.getElementById('schedule');
                scheduleContainer.scrollLeft += scheduleContainer.clientWidth / itemsPerPage;
            }
        });
    }

    // 初期表示
    renderSchedule();
});

//result//
const gameResults = [
    {
        date: 'May 5, 2024',
        teamA: { name: 'Tanino', score: 5, innings: [1, 0, 0, 1, 2, 0, 1] },
        teamB: { name: 'Bean Sprouts', score: 3, innings: [0, 1, 1, 0, 0, 0, 1] },
        highlights: [
            { inning: 'Top of the 5th', description: 'Player 3 hit a home run for Team A.' },
            { inning: 'Bottom of the 7th', description: 'Player 4 struck out three batters in a row for Team B.' }
        ],
        photos: [
            'img17.JPG',
            'photo2.jpg',
            'photo3.jpg'
        ]
    },
    {
        date: 'May 5, 2024',
        teamA: { name: 'Taro Baseball Club', score: 5, innings: [0, 0, 0, 1, 2, 0, 1] },
        teamB: { name: 'Bean Sprouts', score: 3, innings: [0, 1, 1, 0, 0, 0, 1] },
        highlights: [
            { inning: 'Top of the 5th', description: 'Player 3 hit a home run for Team A.' },
            { inning: 'Bottom of the 7th', description: 'Player 4 struck out three batters in a row for Team B.' }
        ],
        photos: [
            'img17.JPG',
            'photo2.jpg',
            'photo3.jpg'
        ]
    },
    {
        date: 'May 12, 2024',
        teamA: { name: 'Tigers', score: 5, innings: [1, 0, 0, 1, 2, 0, 1] },
        teamB: { name: 'Bean Sprouts', score: 3, innings: [0, 1, 1, 0, 0, 0, 1] },
        highlights: [
            { inning: 'Top of the 5th', description: 'Player 3 hit a home run for Team A.' },
            { inning: 'Bottom of the 7th', description: 'Player 4 struck out three batters in a row for Team B.' }
        ],
        photos: [
            'img17.JPG',
            'photo2.jpg',
            'photo3.jpg'
        ]
    },
    {
        date: 'May 26, 2024',
        teamA: { name: 'Bean Sprouts', score: 5, innings: [0, 1, 2, 0, 0, 1, 1] },
        teamB: { name: 'Giants', score: 0, innings: [0, 0, 0, 0, 0, 0, 0] },
        highlights: [
            { inning: 'Top of the 5th', description: 'Player 3 hit a home run for Team A.' },
            { inning: 'Bottom of the 7th', description: 'Player 4 struck out three batters in a row for Team B.' }
        ],
        photos: [
            'img17.JPG',
            'photo2.jpg',
            'photo3.jpg'
        ]
    },
    {
        date: 'June 2, 2024',
        teamA: { name: 'Blue Hawks', score: 5, innings: [0, 1, 2, 0, 0, 1, 1] },
        teamB: { name: 'Bean Sprouts', score: 0, innings: [0, 0, 0, 0, 0, 0, 0] },
        highlights: [
            { inning: 'Top of the 5th', description: 'Player 3 hit a home run for Team A.' },
            { inning: 'Bottom of the 7th', description: 'Player 4 struck out three batters in a row for Team B.' }
        ],
        photos: [
            'img17.JPG',
            'photo2.jpg',
            'photo3.jpg'
        ]
    },
    {
        date: 'June 9, 2024',
        teamA: { name: 'Ice Bears', score: 2, innings: [0, 0, 0, 0, 0, 2, 0] },
        teamB: { name: 'Bean Sprouts', score: 2, innings: [0, 0, 1, 0, 1, 0, 0] },
        highlights: [
            { inning: 'Top of the 5th', description: 'Player 3 hit a home run for Team A.' },
            { inning: 'Bottom of the 7th', description: 'Player 4 struck out three batters in a row for Team B.' }
        ],
        photos: [
            'img17.JPG',
            'photo2.jpg',
            'photo3.jpg'
        ]
    },
    {
        date: 'June 16, 2024',
        teamA: { name: 'Whales', score: 4, innings: [0, 0, 0, 0, 4] },
        teamB: { name: 'Bean Sprouts', score: 20, innings: [2, 11, 3, 0, 4] },
        highlights: [
            { inning: 'Top of the 5th', description: 'Player 3 hit a home run for Team A.' },
            { inning: 'Bottom of the 7th', description: 'Player 4 struck out three batters in a row for Team B.' }
        ],
        photos: [
            'img17.JPG',
            'photo2.jpg',
            'photo3.jpg'
        ]
    },

    // Add 8 more game results
    // ...
];

let currentGameIndex = 0;

function updateGameResult(index) {
    const game = gameResults[index];
    document.querySelector('.date').textContent = `Date: ${game.date}`;
    document.querySelector('.teamA-name').textContent = game.teamA.name;
    document.querySelector('.teamA-score').textContent = game.teamA.score;
    document.querySelector('.teamB-name').textContent = game.teamB.name;
    document.querySelector('.teamB-score').textContent = game.teamB.score;

    const teamAScores = document.querySelector('.teamA-scores');
    teamAScores.innerHTML = `<td class="teamA-name">${game.teamA.name}</td>`;
    game.teamA.innings.forEach(score => {
        const td = document.createElement('td');
        td.textContent = score;
        teamAScores.appendChild(td);
    });

    const teamBScores = document.querySelector('.teamB-scores');
    teamBScores.innerHTML = `<td class="teamB-name">${game.teamB.name}</td>`;
    game.teamB.innings.forEach(score => {
        const td = document.createElement('td');
        td.textContent = score;
        teamBScores.appendChild(td);
    });

    const highlightsContainer = document.querySelector('.highlights-content');
    highlightsContainer.innerHTML = '';
    game.highlights.forEach(highlight => {
        const highlightDiv = document.createElement('div');
        highlightDiv.classList.add('highlight');
        highlightDiv.innerHTML = `
            <h3>${highlight.inning}</h3>
            <p>${highlight.description}</p>
        `;
        highlightsContainer.appendChild(highlightDiv);
    });

    const photosContainer = document.querySelector('.photos');
    photosContainer.innerHTML = '';
    game.photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');
        photoDiv.innerHTML = `<img src="${photo}" alt="Game photo">`;
        photosContainer.appendChild(photoDiv);
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentGameIndex = (currentGameIndex > 0) ? currentGameIndex - 1 : gameResults.length - 1;
    updateGameResult(currentGameIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentGameIndex = (currentGameIndex < gameResults.length - 1) ? currentGameIndex + 1 : 0;
    updateGameResult(currentGameIndex);
});

// Initial load
updateGameResult(currentGameIndex);

//result//

