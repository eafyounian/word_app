// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("practiceButton").addEventListener("click", fetchRandomCards);
//     fetchRandomCards();
// });

// function fetchRandomCards() {
//     const data = [
//         { abbreviation: 'HA', meaning: 'HALI' },
//         { abbreviation: 'JA', meaning: 'JANO' },
//         { abbreviation: 'KA', meaning: 'KALA' },
//         { abbreviation: 'LA', meaning: 'LATO' },
//         { abbreviation: 'MA', meaning: 'MATO' },
//         { abbreviation: 'NA', meaning: 'NARU' },
//         { abbreviation: 'RA', meaning: 'RAPU' },
//         { abbreviation: 'SA', meaning: 'SALAMA' },
//         { abbreviation: 'TA', meaning: 'TALO' },
//         { abbreviation: 'VA', meaning: 'VALO' },
//         { abbreviation: 'KI', meaning: 'KIVI' },
//         { abbreviation: 'VI', meaning: 'KIVI' },
//         { abbreviation: 'LI', meaning: 'LIHA' },
//         { abbreviation: 'MI', meaning: 'MINÄ' },
//         { abbreviation: 'NI', meaning: 'NIMI' },
//         { abbreviation: 'RI', meaning: 'RISU' },
//         { abbreviation: 'SI', meaning: 'SIVU' },
//         { abbreviation: 'TI', meaning: 'TIKU' },
//         { abbreviation: 'KE', meaning: 'KETO' },
//         { abbreviation: 'LE', meaning: 'LELU' },
//         { abbreviation: 'ME', meaning: 'MERI' },
//         { abbreviation: 'NE', meaning: 'NENÄ' },
//         { abbreviation: 'SE', meaning: 'SEKAMEHU' },
//         { abbreviation: 'TE', meaning: 'TELINE' },
//         { abbreviation: 'VE', meaning: 'VENE' },
//         { abbreviation: 'JO', meaning: 'JOKI' },
//         { abbreviation: 'KO', meaning: 'KORI' },
//         { abbreviation: 'LO', meaning: 'LOMA' },
//         { abbreviation: 'MO', meaning: 'MORO' },
//         { abbreviation: 'NO', meaning: 'NOKI' },
//         { abbreviation: 'RO', meaning: 'ROMU' },
//         { abbreviation: 'TO', meaning: 'TORI' },
//         { abbreviation: 'HU', meaning: 'HURINA' },
//         { abbreviation: 'KU', meaning: 'KUVA' },
//         { abbreviation: 'LU', meaning: 'LUMI' },
//         { abbreviation: 'MU', meaning: 'MUNA' },
//         { abbreviation: 'SU', meaning: 'SUKU' },
//         { abbreviation: 'TU', meaning: 'TULI' }
//     ];

//     const cards = selectRandomCards(data, 9);
//     renderCards(cards);
// }

// function selectRandomCards(data, count) {
//     const shuffled = data.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
// }

// function renderCards(cards) {
//     const container = document.querySelector('.grid-container');
//     container.innerHTML = '';
//     cards.forEach(card => {
//         const cardElement = document.createElement('div');
//         cardElement.classList.add('card');
//         cardElement.textContent = card.abbreviation;
//         cardElement.dataset.meaning = card.meaning;
//         cardElement.addEventListener('click', handleCardClick);
//         container.appendChild(cardElement);
//     });
// }

// function handleCardClick(event) {
//     const clickedCard = event.currentTarget;
//     const previousClickedCard = document.querySelector('.card.purple');

//     if (previousClickedCard && previousClickedCard !== clickedCard) {
//         previousClickedCard.classList.remove('purple');
//         previousClickedCard.classList.remove('shake');
//     }

//     clickedCard.classList.toggle('purple');
//     clickedCard.classList.toggle('shake');
//     displayMeaning(clickedCard.dataset.meaning);

//     if (clickedCard.classList.contains('purple')) {
//         speakMeaning(clickedCard.dataset.meaning);
//     }
// }

// function displayMeaning(meaning) {
//     const display = document.getElementById('display');
//     display.textContent = meaning;
// }

// function speakMeaning(meaning) {
//     const utterance = new SpeechSynthesisUtterance(meaning);
//     utterance.lang = 'fi-FI'; // Finnish language
//     window.speechSynthesis.speak(utterance);
// }



document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("practiceButton").addEventListener("click", fetchRandomCards);
    fetchRandomCards();
});

function fetchRandomCards() {
    const data = [
        { abbreviation: 'HA', meaning: 'HALI' },
        { abbreviation: 'JA', meaning: 'JANO' },
        { abbreviation: 'KA', meaning: 'KALA' },
        { abbreviation: 'LA', meaning: 'LATO' },
        { abbreviation: 'MA', meaning: 'MATO' },
        { abbreviation: 'NA', meaning: 'NARU' },
        { abbreviation: 'RA', meaning: 'RAPU' },
        { abbreviation: 'SA', meaning: 'SALAMA' },
        { abbreviation: 'TA', meaning: 'TALO' },
        { abbreviation: 'VA', meaning: 'VALO' },
        { abbreviation: 'KI', meaning: 'KIVI' },
        { abbreviation: 'VI', meaning: 'KIVI' },
        { abbreviation: 'LI', meaning: 'LIHA' },
        { abbreviation: 'MI', meaning: 'MINÄ' },
        { abbreviation: 'NI', meaning: 'NIMI' },
        { abbreviation: 'RI', meaning: 'RISU' },
        { abbreviation: 'SI', meaning: 'SIVU' },
        { abbreviation: 'TI', meaning: 'TIKU' },
        { abbreviation: 'KE', meaning: 'KETO' },
        { abbreviation: 'LE', meaning: 'LELU' },
        { abbreviation: 'ME', meaning: 'MERI' },
        { abbreviation: 'NE', meaning: 'NENÄ' },
        { abbreviation: 'SE', meaning: 'SEKAMEHU' },
        { abbreviation: 'TE', meaning: 'TELINE' },
        { abbreviation: 'VE', meaning: 'VENE' },
        { abbreviation: 'JO', meaning: 'JOKI' },
        { abbreviation: 'KO', meaning: 'KORI' },
        { abbreviation: 'LO', meaning: 'LOMA' },
        { abbreviation: 'MO', meaning: 'MORO' },
        { abbreviation: 'NO', meaning: 'NOKI' },
        { abbreviation: 'RO', meaning: 'ROMU' },
        { abbreviation: 'TO', meaning: 'TORI' },
        { abbreviation: 'HU', meaning: 'HURINA' },
        { abbreviation: 'KU', meaning: 'KUVA' },
        { abbreviation: 'LU', meaning: 'LUMI' },
        { abbreviation: 'MU', meaning: 'MUNA' },
        { abbreviation: 'SU', meaning: 'SUKU' },
        { abbreviation: 'TU', meaning: 'TULI' }
    ];

    const cards = selectRandomCards(data, 9);
    renderCards(cards);
}

function selectRandomCards(data, count) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function renderCards(cards) {
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card.abbreviation;
        cardElement.dataset.meaning = card.meaning;
        cardElement.addEventListener('click', handleCardClick);
        container.appendChild(cardElement);
    });
}

function handleCardClick(event) {
    const clickedCard = event.currentTarget;
    const previousClickedCard = document.querySelector('.card.purple');

    if (previousClickedCard && previousClickedCard !== clickedCard) {
        previousClickedCard.classList.remove('purple');
        previousClickedCard.classList.remove('shake');
    }

    clickedCard.classList.toggle('purple');
    clickedCard.classList.toggle('shake');
    displayMeaning(clickedCard.textContent, clickedCard.dataset.meaning);

    if (clickedCard.classList.contains('purple')) {
        speakMeaning(clickedCard.dataset.meaning);
    }
}

function displayMeaning(abbreviation, meaning) {
    const display = document.getElementById('display');
    const formattedMeaning = meaning.replace(abbreviation, `<span class="abbreviation">${abbreviation}</span>`);
    display.innerHTML = formattedMeaning;
}

function speakMeaning(meaning) {
    const utterance = new SpeechSynthesisUtterance(meaning);
    utterance.lang = 'fi-FI'; // Finnish language
    window.speechSynthesis.speak(utterance);
}
