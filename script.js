// Quiz Data with multiple sets of questions
const quizData = [
    // Set 1 - Poziom łatwy
    [
        // Zamiana pytań z obrazkami na pytania z podanymi odpowiedziami
        {
            category: "Minecraft",
            type: "multiple-choice",
            question: "Jak nazywa się zielony stwór z Minecraft, który eksploduje gdy się do niego zbliżysz?",
            answers: [
                "Enderman",
                "Creeper",
                "Zombie",
                "Skeleton"
            ],
            correct: 1,
            difficulty: "łatwy"
        },
        {
            category: "Fortnite",
            type: "multiple-choice",
            question: "Która broń w Fortnite ma najlepsze przybliżenie przy celowaniu?",
            answers: [
                "Assault Rifle",
                "Sniper Rifle",
                "Shotgun",
                "SMG"
            ],
            correct: 1,
            difficulty: "łatwy"
        },
        {
            category: "CS:GO",
            type: "multiple-choice",
            question: "Która mapa w CS:GO zawiera charakterystyczne miejsca jak 'Long A', 'B tunele' i 'Catwalk'?",
            answers: [
                "Dust II",
                "Mirage",
                "Inferno",
                "Nuke"
            ],
            correct: 0,
            difficulty: "łatwy"
        },
        // 5 pytań z wielokrotnym wyborem
        {
            category: "Minecraft",
            question: "Ile bloków obsydianu potrzebujesz do zbudowania portalu do Netheru?",
            type: "multiple-choice",
            answers: [
                "8",
                "10",
                "12",
                "14"
            ],
            correct: 2,
            difficulty: "łatwy"
        },
        {
            category: "Valorant",
            question: "Która postać w Valorant ma umiejętność 'Resurrection'?",
            type: "multiple-choice",
            answers: [
                "Sage",
                "Reyna",
                "Skye",
                "Jett"
            ],
            correct: 0,
            difficulty: "łatwy"
        },
        {
            category: "Roblox",
            question: "Jak nazywa się waluta w Roblox?",
            type: "multiple-choice",
            answers: [
                "Robux",
                "R-coins",
                "Tix",
                "Blox"
            ],
            correct: 0,
            difficulty: "łatwy"
        },
        {
            category: "Among Us",
            question: "Ile maksymalnie graczy może uczestniczyć w jednej rozgrywce Among Us?",
            type: "multiple-choice",
            answers: [
                "8",
                "10",
                "12",
                "15"
            ],
            correct: 2,
            difficulty: "łatwy"
        },
        {
            category: "Terraria",
            question: "Który boss jest ostatnim bossem w Terrarii?",
            type: "multiple-choice",
            answers: [
                "Lunatic Cultist",
                "Moon Lord",
                "Empress of Light",
                "Duke Fishron"
            ],
            correct: 1,
            difficulty: "łatwy"
        },
        // 2 pytania z własną odpowiedzią
        {
            category: "League of Legends",
            type: "text-input",
            question: "Jak nazywa się najpopularniejsza mapa w League of Legends?",
            correctAnswers: ["summoner's rift", "summoners rift", "rift"],
            caseSensitive: false,
            difficulty: "łatwy"
        },
        {
            category: "Minecraft",
            type: "text-input",
            question: "Jak nazywa się finałowy boss w Minecraft?",
            correctAnswers: ["ender dragon", "enderdragon", "dragon", "smok endu", "smok"],
            caseSensitive: false,
            difficulty: "łatwy"
        }
    ],
    // Set 2 - Poziom średni
    [
        // Zamiana pytań z obrazkami na pytania z podanymi odpowiedziami
        {
            category: "Terraria",
            type: "multiple-choice",
            question: "Jaki jest najpotężniejszy miecz w Terrarii, zrobiony przez połączenie wielu innych mieczy?",
            answers: [
                "Terra Blade",
                "Excalibur",
                "Zenith",
                "Night's Edge"
            ],
            correct: 2,
            difficulty: "średni"
        },
        {
            category: "Minecraft",
            type: "multiple-choice",
            question: "Do wykonania wędki w Minecraft potrzebujesz:",
            answers: [
                "3 patyki i 2 sznurki",
                "3 patyki i 2 nici",
                "2 patyki i 1 nić",
                "4 patyki i 1 sznurek"
            ],
            correct: 1,
            difficulty: "średni"
        },
        {
            category: "Valorant",
            type: "multiple-choice",
            question: "Która umiejętność agenta Sova pozwala ujawnić położenie przeciwników?",
            answers: [
                "Recon Bolt",
                "Shock Bolt",
                "Owl Drone",
                "Hunter's Fury"
            ],
            correct: 0,
            difficulty: "średni"
        },
        // 5 pytań z wielokrotnym wyborem
        {
            category: "CS:GO",
            question: "Ile rund musi wygrać drużyna, aby wygrać standardowy mecz w CS:GO?",
            type: "multiple-choice",
            answers: [
                "13",
                "16",
                "21",
                "30"
            ],
            correct: 1,
            difficulty: "średni"
        },
        {
            category: "Minecraft",
            question: "Co jest potrzebne do stworzenia End Portal w trybie survival?",
            type: "multiple-choice",
            answers: [
                "8 bloków obsydianu",
                "10 bloków End Stone",
                "12 ramek End Portal i 12 oczu Endera",
                "14 bloków End Stone i 1 oko Endera"
            ],
            correct: 2,
            difficulty: "średni"
        },
        {
            category: "Fortnite",
            question: "Co znajdowało się w 'Cube' podczas rozdziału 1 Fortnite?",
            type: "multiple-choice",
            answers: [
                "Nic, był solidny",
                "Lava",
                "Zero Point",
                "Tajemnicza energia"
            ],
            correct: 2,
            difficulty: "średni"
        },
        {
            category: "Terraria",
            question: "Która z tych broni NIE jest bronią magiczną w Terrarii?",
            type: "multiple-choice",
            answers: [
                "Last Prism",
                "Razorblade Typhoon",
                "Megashark",
                "Crystal Serpent"
            ],
            correct: 2,
            difficulty: "średni"
        },
        {
            category: "League of Legends",
            question: "Ile linii znajduje się na Summoner's Rift?",
            type: "multiple-choice",
            answers: [
                "2",
                "3",
                "4",
                "5"
            ],
            correct: 1,
            difficulty: "średni"
        },
        // 2 pytania z własną odpowiedzią
        {
            category: "Valorant",
            type: "text-input",
            question: "Jak nazywa się umiejętność ultimate (X) agenta Phoenix?",
            correctAnswers: ["run it back", "runit back", "run back"],
            caseSensitive: false,
            difficulty: "średni"
        },
        {
            category: "Among Us",
            type: "text-input",
            question: "Jak nazywa się główne zadanie polegające na przesuwaniu suwaka w Among Us?",
            correctAnswers: ["calibrate distributor", "kalibracja dystrybutora", "kalibracja"],
            caseSensitive: false,
            difficulty: "średni"
        }
    ],
    // Set 3 - Poziom trudny
    [
        // Zamiana pytań z obrazkami na pytania z podanymi odpowiedziami
        {
            category: "Genshin Impact",
            type: "multiple-choice",
            question: "Który element w Genshin Impact jest reprezentowany przez kolor zielony i symbol wiatru?",
            answers: [
                "Anemo",
                "Geo",
                "Electro",
                "Hydro"
            ],
            correct: 0,
            difficulty: "trudny"
        },
        {
            category: "Dark Souls",
            type: "multiple-choice",
            question: "Który boss z Dark Souls walczy w parze - jeden duży i powolny, drugi mniejszy i szybki?",
            answers: [
                "Ornstein and Smough",
                "Gwyn, Lord of Cinder",
                "Artorias the Abysswalker",
                "The Nameless King"
            ],
            correct: 0,
            difficulty: "trudny"
        },
        {
            category: "The Legend of Zelda",
            type: "multiple-choice",
            question: "Jaki trójkątny artefakt jest głównym symbolem serii The Legend of Zelda?",
            answers: [
                "Master Sword",
                "Hylian Shield",
                "Triforce",
                "Ocarina of Time"
            ],
            correct: 2,
            difficulty: "trudny"
        },
        // 5 pytań z wielokrotnym wyborem
        {
            category: "Final Fantasy",
            question: "Która postać jest głównym antagonistą w Final Fantasy VII?",
            type: "multiple-choice",
            answers: [
                "Sephiroth",
                "Kefka",
                "Seymour",
                "Ultimecia"
            ],
            correct: 0,
            difficulty: "trudny"
        },
        {
            category: "Minecraft",
            question: "Jaki blok ma najwyższą odporność na wybuchy w Minecraft?",
            type: "multiple-choice",
            answers: [
                "Bedrock",
                "Obsidian",
                "Netherite Block",
                "Ancient Debris"
            ],
            correct: 0,
            difficulty: "trudny"
        },
        {
            category: "CS:GO",
            question: "Jaki jest maksymalny limit pieniędzy w CS:GO?",
            type: "multiple-choice",
            answers: [
                "10000$",
                "12000$",
                "16000$",
                "20000$"
            ],
            correct: 2,
            difficulty: "trudny"
        },
        {
            category: "Overwatch",
            question: "Która postać w Overwatch wypowiada frazę 'Heroes never die'?",
            type: "multiple-choice",
            answers: [
                "Mercy",
                "Moira",
                "Ana",
                "Baptiste"
            ],
            correct: 0,
            difficulty: "trudny"
        },
        {
            category: "Elden Ring",
            question: "Jak nazywa się główny hub w Elden Ring?",
            type: "multiple-choice",
            answers: [
                "Leyndell, Royal Capital",
                "Roundtable Hold",
                "The Erdtree",
                "Limgrave"
            ],
            correct: 1,
            difficulty: "trudny"
        },
        // 2 pytania z własną odpowiedzią
        {
            category: "The Witcher 3",
            type: "text-input",
            question: "Jak nazywa się wiedźmiński znak używany do kontroli umysłu?",
            correctAnswers: ["axii", "aksji", "axj", "axie"],
            caseSensitive: false,
            difficulty: "trudny"
        },
        {
            category: "World of Warcraft",
            type: "text-input",
            question: "Jak nazywa się główny antagonista dodatku Wrath of the Lich King?",
            correctAnswers: ["arthas", "lich king", "the lich king", "arthas menethil", "król lisz"],
            caseSensitive: false,
            difficulty: "trudny"
        }
    ]
];

// Game state variables
let currentSet = 0;
let currentQuestion = 0;
let score = 0;
let coins = 0;
let questions = [];
let playerName = "Nieznany";
let highScores = [];
let weeklyHighScores = [];
let selectedDifficulty = 0;
let difficultyText = ["Łatwy", "Trudny", "Strasznie trudny"];
let currentTab = "all-time"; // Domyślnie pokazujemy wszystkie czasy
let timerInterval = null; // Interwał dla timera
let timeLeft = 60; // Czas na odpowiedź w sekundach
let timeoutRef = null; // Referencja do timeout dla odliczania czasu

// Czas na odpowiedź w zależności od poziomu trudności (w sekundach)
const DIFFICULTY_TIMES = [60, 40, 20]; // Łatwy, Trudny, Strasznie trudny

// Zmienne dla ulepszaczy
let correctAnswersStreak = 0; // Licznik poprawnych odpowiedzi pod rząd
let powerups = {
    doublePoints: 0,
    doubleTime: 0,
    removeAnswers: 0
};
let activePowerups = {
    doublePoints: false,
    doubleTime: false,
    removeAnswers: false
};
const ANSWERS_STREAK_FOR_POWERUP = 5; // Ile poprawnych odpowiedzi potrzeba na ulepszacz

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const feedbackScreen = document.getElementById('feedback-screen');
const completionScreen = document.getElementById('completion-screen');
const gameOverScreen = document.getElementById('game-over-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const nextSetBtn = document.getElementById('next-set-btn');
const restartBtn = document.getElementById('restart-btn');

const coinCount = document.getElementById('coinCount');
const quizSetDisplay = document.getElementById('quizSet');
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const textAnswerContainer = document.getElementById('text-answer-container');
const textAnswerInput = document.getElementById('text-answer-input');
const submitTextAnswerBtn = document.getElementById('submit-text-answer');
const categoryElement = document.getElementById('game-category').querySelector('span');
const feedbackText = document.getElementById('feedback-text');
const feedbackInfo = document.getElementById('feedback-info');
const playerNameInput = document.getElementById('player-name');
const finalScore = document.getElementById('final-score');

// Difficulty buttons
const easyBtn = document.getElementById('easy-btn');
const mediumBtn = document.getElementById('medium-btn');
const hardBtn = document.getElementById('hard-btn');
const difficultyBtns = [easyBtn, mediumBtn, hardBtn];

// Scoreboard Elements
const currentPlayerName = document.getElementById('current-player-name');
const playerSetDisplay = document.getElementById('player-set');
const playerScoreDisplay = document.getElementById('player-score');
const playerCoinsDisplay = document.getElementById('player-coins');
const difficultyLevel = document.getElementById('difficulty-level');
const highScoresBody = document.getElementById('high-scores-body');

// Przyciski zakładek tabeli wyników
const allTimeTab = document.getElementById('all-time-tab');
const thisWeekTab = document.getElementById('this-week-tab');
const exportScoresBtn = document.getElementById('export-scores-btn');

// Elementy dla timera
const timerCount = document.getElementById('timer-count');
const timerBar = document.getElementById('timer-bar');
const timerCircle = document.querySelector('.timer-circle');
const timeoutScreen = document.getElementById('timeout-screen');
const timeoutNextBtn = document.getElementById('timeout-next-btn');

// Elementy dla ulepszaczy
const powerupCounter = document.getElementById('powerup-counter');
const doublePointsCounter = document.querySelector('#double-points .powerup-count');
const doubleTimeCounter = document.querySelector('#double-time .powerup-count');
const removeAnswersCounter = document.querySelector('#remove-answers .powerup-count');

const useDoublePointsBtn = document.getElementById('use-double-points');
const useDoubleTimeBtn = document.getElementById('use-double-time');
const useRemoveAnswersBtn = document.getElementById('use-remove-answers');

const powerupScreen = document.getElementById('powerup-screen');
const receivedPowerupIcon = document.getElementById('powerup-icon');
const powerupName = document.getElementById('powerup-name');
const powerupDescription = document.getElementById('powerup-description');
const claimPowerupBtn = document.getElementById('claim-powerup-btn');

// Elementy dla tutoriala
const tutorialBtn = document.getElementById('tutorial-btn');
const tutorialScreen = document.getElementById('tutorial-screen');
const prevStepBtn = document.getElementById('prev-step');
const nextStepBtn = document.getElementById('next-step');
const finishTutorialBtn = document.getElementById('finish-tutorial');
const currentStepSpan = document.getElementById('current-step');
const totalStepsSpan = document.getElementById('total-steps');
const progressFill = document.querySelector('.progress-fill');
const tutorialSlides = document.querySelectorAll('.tutorial-slide');

// Elementy dla zadań dziennych
const dailyQuestsBtn = document.getElementById('daily-quests-btn');
const dailyQuestsScreen = document.getElementById('daily-quests-screen');
const backToWelcomeBtn = document.getElementById('back-to-welcome-btn');
const questBtns = document.querySelectorAll('.quest-btn');
const claimDailyRewardBtn = document.getElementById('claim-daily-reward-btn');
const dailyQuestCompleteScreen = document.getElementById('daily-quest-complete-screen');
const backToQuestsBtn = document.getElementById('back-to-quests-btn');
const correctAnswersCount = document.getElementById('correct-answers-count');

// Struktura danych dla zadań dziennych
let dailyQuests = [
    { id: 1, category: "Minecraft", progress: 0, completed: false, questions: [] },
    { id: 2, category: "Fortnite", progress: 0, completed: false, questions: [] },
    { id: 3, category: "CS:GO", progress: 0, completed: false, questions: [] }
];

let currentQuestId = null;
let currentQuestQuestions = [];
let currentQuestQuestionIndex = 0;
let correctAnswersInQuest = 0;
let dailyRewardClaimed = false;

// Usunięcie starych event listenerów
startBtn.removeEventListener('click', startQuiz);
nextBtn.removeEventListener('click', nextQuestion);
nextSetBtn.removeEventListener('click', nextSet);
restartBtn.removeEventListener('click', restartGame);
submitTextAnswerBtn.removeEventListener('click', checkTextAnswer);
timeoutNextBtn.removeEventListener('click', nextQuestion);
exportScoresBtn.removeEventListener('click', exportScores);
allTimeTab.removeEventListener('click', () => switchScoreTab('all-time'));
thisWeekTab.removeEventListener('click', () => switchScoreTab('this-week'));

// Dodanie nowych event listenerów
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
nextSetBtn.addEventListener('click', nextSet);
restartBtn.addEventListener('click', restartGame);
submitTextAnswerBtn.addEventListener('click', checkTextAnswer);
timeoutNextBtn.addEventListener('click', nextQuestion);
exportScoresBtn.addEventListener('click', exportScores);
allTimeTab.addEventListener('click', () => switchScoreTab('all-time'));
thisWeekTab.addEventListener('click', () => switchScoreTab('this-week'));

// Event listenery dla przycisków trudności
difficultyBtns.forEach((btn, index) => {
    btn.removeEventListener('click', () => selectDifficulty(index));
    btn.addEventListener('click', () => selectDifficulty(index));
});

// Event listenery dla przycisków ulepszaczy
useDoublePointsBtn.addEventListener('click', () => activatePowerup('doublePoints'));
useDoubleTimeBtn.addEventListener('click', () => activatePowerup('doubleTime'));
useRemoveAnswersBtn.addEventListener('click', () => activatePowerup('removeAnswers'));
claimPowerupBtn.addEventListener('click', handleClaimPowerup);

// Event listenery dla tutoriala
tutorialBtn.addEventListener('click', showTutorial);
prevStepBtn.addEventListener('click', prevTutorialStep);
nextStepBtn.addEventListener('click', nextTutorialStep);
finishTutorialBtn.addEventListener('click', finishTutorial);

// Event listenery dla zadań dziennych
dailyQuestsBtn.addEventListener('click', showDailyQuests);
backToWelcomeBtn.addEventListener('click', () => {
    hideAllScreens();
    welcomeScreen.classList.add('active');
});
backToQuestsBtn.addEventListener('click', () => {
    hideAllScreens();
    dailyQuestsScreen.classList.add('active');
    updateDailyQuestsUI();
});
claimDailyRewardBtn.addEventListener('click', claimDailyReward);

questBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const questId = parseInt(btn.getAttribute('data-quest'));
        startDailyQuest(questId);
    });
});

// Zmienne dla tutoriala
let currentTutorialStep = 1;
const totalTutorialSteps = tutorialSlides.length;

// Inicjalizacja totalu kroków
totalStepsSpan.textContent = totalTutorialSteps;

// Przykładowe nicki dla tabeli wyników
const randomNicknames = [
    "GameMaster", "ProGamer", "PixelHero", "LevelBoss", "QuestSeeker",
    "BattleKing", "EpicPlayer", "GamerGirl", "NoobSlayer", "RespawnQueen",
    "FinalBoss", "GameWizard", "PixelNinja", "PowerGamer", "RespawnMaster",
    "GameLegend", "KillStreak", "MegaPlayer", "FirstPlace", "CriticalHit",
    "MythicGamer", "LegendaryPlayer", "UltraNoob", "AimBot", "SpeedRunner"
];

// Funkcja tworząca losowy wynik dla podanego nicka
function createRandomScore(nickname, maxScore = 30) {
    return {
        name: nickname,
        score: Math.floor(Math.random() * maxScore) + 1,
        difficulty: Math.floor(Math.random() * 3),
        timestamp: Date.now() - Math.floor(Math.random() * 86400000 * 14) // Losowa data z ostatnich 14 dni
    };
}

// Wybór poziomu trudności
function selectDifficulty(index) {
    selectedDifficulty = index;
    
    // Aktualizuj styl przycisków
    difficultyBtns.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
    
    // Aktualizuj wyświetlanie poziomu trudności
    difficultyLevel.textContent = difficultyText[index];
    
    // Zaktualizuj wygląd timera
    updateTimerAppearance();
}

// Przełączanie między zakładkami tabeli wyników
function switchScoreTab(tab) {
    currentTab = tab;
    
    // Dodaj efekt płynnego przejścia
    highScoresBody.style.opacity = '0';
    highScoresBody.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        // Aktualizuj style zakładek
        if (tab === 'all-time') {
            allTimeTab.classList.add('active');
            thisWeekTab.classList.remove('active');
        } else {
            allTimeTab.classList.remove('active');
            thisWeekTab.classList.add('active');
        }
        
        // Aktualizuj wyświetlane wyniki
        updateHighScoresTable();
        
        // Przywróć widoczność po aktualizacji
        setTimeout(() => {
            highScoresBody.style.opacity = '1';
            highScoresBody.style.transform = 'translateY(0)';
        }, 100);
    }, 200);
}

// Inicjalizacja tablicy wyników z localStorage
function initHighScores() {
    // Wczytaj wszystkie wyniki
    const savedScores = localStorage.getItem('quizHighScores');
    if (savedScores) {
        highScores = JSON.parse(savedScores);
    } else {
        // Przykładowe dane dla tablicy wyników - teraz używamy randomNicknames
        highScores = [];
        
        // Dodaj 10 losowych graczy z losowymi wynikami
        const usedNicknames = new Set();
        for (let i = 0; i < 10; i++) {
            let randomNickname;
            do {
                randomNickname = randomNicknames[Math.floor(Math.random() * randomNicknames.length)];
            } while (usedNicknames.has(randomNickname));
            
            usedNicknames.add(randomNickname);
            highScores.push(createRandomScore(randomNickname));
        }
        
        saveHighScores();
    }
    
    // Aktualizuj tygodniowe wyniki
    updateWeeklyHighScores();
    
    // Aktualizuj tabelę wyników
    updateHighScoresTable();
}

// Aktualizacja tygodniowych wyników
function updateWeeklyHighScores() {
    const oneWeekAgo = Date.now() - 86400000 * 7; // 7 dni w milisekundach
    weeklyHighScores = highScores.filter(score => score.timestamp && score.timestamp >= oneWeekAgo);
}

// Zapisywanie wyników do localStorage
function saveHighScores() {
    localStorage.setItem('quizHighScores', JSON.stringify(highScores));
    
    // Zaktualizuj tygodniowe wyniki
    updateWeeklyHighScores();
    
    // Zapisz wyniki do pliku JSON
    saveScoresToJSON();
}

// Aktualizacja tablicy wyników
function updateHighScoresTable() {
    highScoresBody.innerHTML = '';
    
    // Wybierz odpowiedni zestaw wyników
    const scoresToDisplay = currentTab === 'all-time' ? highScores : weeklyHighScores;
    
    // Sortuj wyniki od najwyższego
    const sortedScores = [...scoresToDisplay].sort((a, b) => 
        (b.score - a.score) || (b.difficulty - a.difficulty)
    );
    
    // Znajdź pozycję bieżącego gracza
    let playerRank = -1;
    const playerScore = sortedScores.find((score, index) => {
        if (score.name === playerName) {
            playerRank = index + 1;
            return true;
        }
        return false;
    });
    
    // Aktualizuj informację o pozycji gracza w tabeli
    const playerRankElement = document.getElementById('player-rank');
    if (playerRankElement) {
        if (playerRank > 0) {
            playerRankElement.textContent = `${playerRank}/${sortedScores.length}`;
            playerRankElement.parentElement.style.display = 'block';
        } else {
            playerRankElement.textContent = '-';
            playerRankElement.parentElement.style.display = 'block';
        }
    }
    
    // Wyświetl 10 najlepszych wyników (zamiast 5)
    sortedScores.slice(0, 10).forEach((score, index) => {
        const row = document.createElement('tr');
        row.style.animationDelay = `${index * 0.1}s`;
        row.classList.add('tr-animate');
        
        // Podświetl bieżącego gracza
        if (score.name === playerName) {
            row.classList.add('current-player-row');
        }
        
        // Dodaj atrybut title dla długich nazw
        const playerNameDisplay = score.name.length > 15 ? 
            score.name.substring(0, 15) + '...' : score.name;
        
        // Formatuj datę
        const dateDisplay = score.timestamp ? 
            new Date(score.timestamp).toLocaleDateString() : 'Nieznana';
        
        // Dodaj klasę dla pozycji - złoto (1), srebro (2), brąz (3)
        let positionClass = '';
        if (index === 0) positionClass = 'gold-position';
        if (index === 1) positionClass = 'silver-position';
        if (index === 2) positionClass = 'bronze-position';
        
        row.innerHTML = `
            <td class="${positionClass}">${index + 1}</td>
            <td title="${score.name}">${playerNameDisplay}</td>
            <td>${score.score}</td>
            <td>${difficultyText[score.difficulty]}</td>
            <td title="${dateDisplay}">${dateDisplay}</td>
        `;
        highScoresBody.appendChild(row);
    });
    
    // Jeśli gracz nie jest w top 10 i jest w wybranym zestawie wyników, dodaj jego wiersz na końcu
    if (playerRank > 10 && playerRank !== -1) {
        // Dodaj separator
        const separatorRow = document.createElement('tr');
        separatorRow.innerHTML = `<td colspan="5">...</td>`;
        separatorRow.classList.add('tr-animate');
        separatorRow.style.animationDelay = '1.0s';
        separatorRow.style.textAlign = 'center';
        highScoresBody.appendChild(separatorRow);
        
        // Dodaj wiersz gracza
        const playerRow = document.createElement('tr');
        playerRow.classList.add('current-player-row', 'tr-animate');
        playerRow.style.animationDelay = '1.1s';
        
        // Dodaj efekt podświetlenia po załadowaniu
        setTimeout(() => {
            playerRow.classList.add('highlight-animation');
        }, 1200);
        
        // Dodaj atrybut title dla długich nazw
        const playerNameDisplay = playerName.length > 15 ? 
            playerName.substring(0, 15) + '...' : playerName;
        
        // Formatuj datę
        const dateDisplay = playerScore.timestamp ? 
            new Date(playerScore.timestamp).toLocaleDateString() : 'Nieznana';
        
        playerRow.innerHTML = `
            <td>${playerRank}</td>
            <td title="${playerName}">${playerNameDisplay}</td>
            <td>${playerScore.score}</td>
            <td>${difficultyText[playerScore.difficulty]}</td>
            <td title="${dateDisplay}">${dateDisplay}</td>
        `;
        highScoresBody.appendChild(playerRow);
    }
    
    // Jeśli gracz nie jest jeszcze w tabeli, dodaj go na końcu z aktualnym wynikiem
    if (playerRank === -1 && playerName && playerName !== 'Nieznany') {
        // Jeśli tabela nie jest pusta, dodaj separator
        if (sortedScores.length > 0) {
            const separatorRow = document.createElement('tr');
            separatorRow.innerHTML = `<td colspan="5">...</td>`;
            separatorRow.classList.add('tr-animate');
            separatorRow.style.animationDelay = '1.0s';
            separatorRow.style.textAlign = 'center';
            highScoresBody.appendChild(separatorRow);
        }
        
        const playerRow = document.createElement('tr');
        playerRow.classList.add('current-player-row', 'tr-animate', 'new-player-row');
        playerRow.style.animationDelay = '1.2s';
        
        const playerNameDisplay = playerName.length > 15 ? 
            playerName.substring(0, 15) + '...' : playerName;
        
        playerRow.innerHTML = `
            <td>-</td>
            <td title="${playerName}">${playerNameDisplay}</td>
            <td>${score}</td>
            <td>${difficultyText[selectedDifficulty]}</td>
            <td>Dziś</td>
        `;
        highScoresBody.appendChild(playerRow);
    }
    
    // Jeśli nie ma wyników do wyświetlenia
    if (sortedScores.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `<td colspan="5">Brak wyników</td>`;
        emptyRow.classList.add('tr-animate');
        highScoresBody.appendChild(emptyRow);
    }
}

// Zapisywanie wyników do pliku JSON
function saveScoresToJSON() {
    try {
        // W środowisku przeglądarki nie możemy bezpośrednio zapisywać do plików
        // Dla celów tej aplikacji, tworzymy obiekt Blob i generujemy link do pobrania
        const data = JSON.stringify({
            allTime: highScores,
            weekly: weeklyHighScores,
            lastUpdated: new Date().toISOString()
        }, null, 2);
        
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // Sprawdź, czy istnieje przycisk do pobierania, jeśli nie, utwórz go
        let downloadBtn = document.getElementById('download-scores');
        if (!downloadBtn) {
            downloadBtn = document.createElement('a');
            downloadBtn.id = 'download-scores';
            downloadBtn.style.display = 'none';
            downloadBtn.download = 'quiz_scores.json';
            document.body.appendChild(downloadBtn);
        }
        
        // Zaktualizuj URL i symuluj kliknięcie, aby pobrać plik
        downloadBtn.href = url;
        
        console.log('Wyniki zapisane do pliku JSON');
        
        // Opcjonalnie możemy automatycznie pobierać plik, ale to może być irytujące dla użytkownika
        // downloadBtn.click();
    } catch (error) {
        console.error('Błąd podczas zapisywania wyników do pliku JSON:', error);
    }
}

// Aktualizacja statystyk gracza w panelu bocznym
function updatePlayerStats() {
    currentPlayerName.textContent = playerName || 'Nieznany';
    playerSetDisplay.textContent = currentSet + 1;
    playerScoreDisplay.textContent = score;
    playerCoinsDisplay.textContent = `${coins}/10`;
    difficultyLevel.textContent = difficultyText[selectedDifficulty];
    
    // Aktualizuj pozycję gracza w rankingu
    if (playerName && playerName !== 'Nieznany') {
        const sortedScores = [...highScores].sort((a, b) => 
            (b.score - a.score) || (b.difficulty - a.difficulty)
        );
        
        let playerRank = -1;
        sortedScores.forEach((score, index) => {
            if (score.name === playerName) {
                playerRank = index + 1;
            }
        });
        
        const rankElement = document.getElementById('player-rank');
        if (rankElement) {
            rankElement.textContent = playerRank > 0 ? `${playerRank}/${sortedScores.length}` : '-';
        }
    }
}

// Dodawanie wyniku gracza do tablicy wyników
function addHighScore() {
    const now = Date.now();
    let playerRankBefore = -1;
    let playerRankAfter = -1;
    
    // Znajdź aktualną pozycję gracza przed aktualizacją
    if (playerName) {
        const sortedScoresBefore = [...highScores].sort((a, b) => 
            (b.score - a.score) || (b.difficulty - a.difficulty)
        );
        sortedScoresBefore.forEach((score, index) => {
            if (score.name === playerName) {
                playerRankBefore = index + 1;
            }
        });
    }
    
    // Sprawdź, czy gracz już istnieje w tablicy wyników
    const existingScoreIndex = highScores.findIndex(score => score.name === playerName);
    
    if (existingScoreIndex !== -1) {
        // Aktualizuj wynik, jeśli jest lepszy
        if (highScores[existingScoreIndex].score < score || 
            (highScores[existingScoreIndex].score === score && 
             highScores[existingScoreIndex].difficulty < selectedDifficulty)) {
            highScores[existingScoreIndex].score = score;
            highScores[existingScoreIndex].difficulty = selectedDifficulty;
            highScores[existingScoreIndex].timestamp = now;
        }
    } else {
        // Dodaj nowy wynik
        highScores.push({
            name: playerName,
            score: score,
            difficulty: selectedDifficulty,
            timestamp: now
        });
    }
    
    // Sortowanie i ograniczenie do 100 najlepszych wyników
    highScores.sort((a, b) => 
        (b.score - a.score) || (b.difficulty - a.difficulty)
    );
    
    if (highScores.length > 100) {
        highScores = highScores.slice(0, 100);
    }
    
    // Znajdź nową pozycję gracza po aktualizacji
    if (playerName) {
        highScores.forEach((score, index) => {
            if (score.name === playerName) {
                playerRankAfter = index + 1;
            }
        });
    }
    
    // Zapisz wyniki i zaktualizuj tabelę
    saveHighScores();
    updateHighScoresTable();
    
    // Dodaj powiadomienie o zmianie pozycji
    if (playerRankBefore !== -1 && playerRankAfter !== -1 && playerRankAfter < playerRankBefore) {
        // Gracz awansował w rankingu
        const playerRankElement = document.getElementById('player-rank');
        if (playerRankElement) {
            playerRankElement.classList.add('value-change');
            playerRankElement.textContent = `${playerRankAfter}/${highScores.length} ⬆️`;
            
            // Usuń klasę animacji po jej zakończeniu
            setTimeout(() => {
                playerRankElement.classList.remove('value-change');
            }, 1000);
        }
    }
}

// Aktualizuj liczniki ulepszaczy
function updatePowerupCounters() {
    powerupCounter.textContent = `${correctAnswersStreak}/${ANSWERS_STREAK_FOR_POWERUP}`;
    doublePointsCounter.textContent = powerups.doublePoints;
    doubleTimeCounter.textContent = powerups.doubleTime;
    removeAnswersCounter.textContent = powerups.removeAnswers;
    
    // Aktualizuj dostępność przycisków ulepszaczy
    useDoublePointsBtn.disabled = powerups.doublePoints <= 0;
    useDoubleTimeBtn.disabled = powerups.doubleTime <= 0;
    useRemoveAnswersBtn.disabled = powerups.removeAnswers <= 0 || questions[currentQuestion].type !== 'multiple-choice';
    
    // Dodaj pulsowanie do przycisków z dostępnymi ulepszaczami
    useDoublePointsBtn.classList.toggle('active', powerups.doublePoints > 0);
    useDoubleTimeBtn.classList.toggle('active', powerups.doubleTime > 0);
    useRemoveAnswersBtn.classList.toggle('active', powerups.removeAnswers > 0 && questions[currentQuestion].type === 'multiple-choice');
}

// Aktywacja ulepszacza
function activatePowerup(type) {
    if (powerups[type] <= 0) return;
    
    powerups[type]--;
    activePowerups[type] = true;
    
    switch(type) {
        case 'doublePoints':
            useDoublePointsBtn.disabled = true;
            useDoublePointsBtn.classList.add('active');
            useDoublePointsBtn.title = "Aktywny: Podwójne punkty za to pytanie";
            break;
            
        case 'doubleTime':
            useDoubleTimeBtn.disabled = true;
            useDoubleTimeBtn.classList.add('active');
            useDoubleTimeBtn.title = "Aktywny: Podwójny czas";
            
            // Podwój czas
            clearInterval(timerInterval);
            clearTimeout(timeoutRef);
            
            // Restart timera z podwójnym czasem
            const baseTime = DIFFICULTY_TIMES[selectedDifficulty];
            timeLeft = baseTime * 2; // Podwajamy czas dla aktualnego poziomu trudności
            timerCount.textContent = timeLeft;
            
            // Zresetuj animację timer bara
            timerBar.style.transition = 'none';
            timerBar.style.transform = 'scaleY(1)';
            void timerBar.offsetWidth; // Force reflow
            
            // Przywróć animację, ale z podwójnym czasem
            timerBar.style.transition = 'transform 2s linear'; // Wolniejsza animacja
            timerBar.classList.remove('countdown-animation');
            timerBar.style.animationDuration = `${timeLeft}s`;
            void timerBar.offsetWidth; // Force reflow
            timerBar.classList.add('countdown-animation');
            
            // Restart interwału
            startTimer(timeLeft);
            break;
            
        case 'removeAnswers':
            useRemoveAnswersBtn.disabled = true;
            useRemoveAnswersBtn.classList.add('active');
            useRemoveAnswersBtn.title = "Aktywny: Usunięto połowę odpowiedzi";
            
            // Usuń połowę niepoprawnych odpowiedzi
            removeHalfAnswers();
            break;
    }
    
    updatePowerupCounters();
}

// Usunięcie połowy niepoprawnych odpowiedzi
function removeHalfAnswers() {
    if (questions[currentQuestion].type !== 'multiple-choice') return;
    
    const correctIndex = questions[currentQuestion].correct;
    const incorrectIndexes = [];
    
    // Zbierz wszystkie niepoprawne odpowiedzi
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((button, index) => {
        if (index !== correctIndex) {
            incorrectIndexes.push(index);
        }
    });
    
    // Losowo wybierz połowę niepoprawnych odpowiedzi do usunięcia
    shuffleArray(incorrectIndexes);
    const toRemove = incorrectIndexes.slice(0, Math.ceil(incorrectIndexes.length / 2));
    
    // Ukryj wybrane niepoprawne odpowiedzi
    toRemove.forEach(index => {
        answerButtons[index].style.opacity = '0.3';
        answerButtons[index].style.background = '#333';
        answerButtons[index].style.color = '#666';
        answerButtons[index].disabled = true;
        answerButtons[index].style.pointerEvents = 'none';
        answerButtons[index].style.cursor = 'not-allowed';
    });
}

// Przyznaj losowy ulepszacz
function giveRandomPowerup() {
    // Zresetuj licznik poprawnych odpowiedzi
    correctAnswersStreak = 0;
    
    // Wybierz losowy ulepszacz
    const powerupTypes = ['doublePoints', 'doubleTime', 'removeAnswers'];
    const randomType = powerupTypes[Math.floor(Math.random() * powerupTypes.length)];
    
    // Zwiększ licznik ulepszacza
    powerups[randomType]++;
    
    // Przygotuj ekran z powiadomieniem
    let icon, name, description;
    
    switch(randomType) {
        case 'doublePoints':
            icon = '×2';
            name = 'Podwójne punkty';
            description = 'Ten ulepszacz podwaja punkty zdobyte za jedno pytanie.';
            receivedPowerupIcon.style.backgroundColor = '#E91E63';
            break;
            
        case 'doubleTime':
            icon = '⏱';
            name = 'Podwójny czas';
            description = `Ten ulepszacz podwaja czas na odpowiedź z ${DIFFICULTY_TIMES[selectedDifficulty]} do ${DIFFICULTY_TIMES[selectedDifficulty] * 2} sekund.`;
            receivedPowerupIcon.style.backgroundColor = '#2196F3';
            break;
            
        case 'removeAnswers':
            icon = '½';
            name = 'Eliminacja odpowiedzi';
            description = 'Ten ulepszacz usuwa połowę niepoprawnych odpowiedzi.';
            receivedPowerupIcon.style.backgroundColor = '#FF9800';
            break;
    }
    
    receivedPowerupIcon.textContent = icon;
    powerupName.textContent = name;
    powerupDescription.textContent = description;
    
    // Pokaż ekran z ulepszaczem
    hideAllScreens();
    powerupScreen.classList.add('active');
    
    // Aktualizuj liczniki
    updatePowerupCounters();
}

// Obsługa przycisku odbioru ulepszacza
function handleClaimPowerup() {
    // Kontynuuj grę
    hideAllScreens();
    showQuestion();
    questionScreen.classList.add('active');
}

// Initialize Game
function initializeGame() {
    // Rozpocznij od wybranego poziomu trudności
    currentSet = selectedDifficulty;
    
    questions = [...quizData[currentSet]];
    shuffleArray(questions);
    quizSetDisplay.textContent = currentSet + 1;
    coinCount.textContent = coins;
    
    // Resetuj ulepszacze
    correctAnswersStreak = 0;
    powerups = {
        doublePoints: 0,
        doubleTime: 0,
        removeAnswers: 0
    };
    activePowerups = {
        doublePoints: false,
        doubleTime: false,
        removeAnswers: false
    };
    
    // Aktualizuj liczniki ulepszaczy
    updatePowerupCounters();
    
    // Aktualizuj statystyki gracza
    updatePlayerStats();
}

// Show Question
function showQuestion() {
    const question = questions[currentQuestion];
    
    categoryElement.textContent = question.category;
    questionElement.textContent = question.question;
    
    // Reset previous question state
    textAnswerContainer.classList.remove('active');
    textAnswerInput.value = '';
    answersContainer.innerHTML = '';
    
    // Resetuj aktywne ulepszacze z poprzedniego pytania
    activePowerups = {
        doublePoints: false,
        doubleTime: false,
        removeAnswers: false
    };
    
    // Aktualizuj przyciski ulepszaczy
    useDoublePointsBtn.disabled = powerups.doublePoints <= 0;
    useDoubleTimeBtn.disabled = powerups.doubleTime <= 0;
    useRemoveAnswersBtn.disabled = powerups.removeAnswers <= 0 || question.type !== 'multiple-choice';
    
    useDoublePointsBtn.classList.remove('active');
    useDoubleTimeBtn.classList.remove('active');
    useRemoveAnswersBtn.classList.remove('active');
    
    useDoublePointsBtn.title = "Podwójne punkty za to pytanie";
    useDoubleTimeBtn.title = "Podwójny czas na odpowiedź";
    useRemoveAnswersBtn.title = "Usuń połowę niepoprawnych odpowiedzi";
    
    // Handle question by type
    switch(question.type) {
        case 'text-input':
            // Show text input field
            textAnswerContainer.classList.add('active');
            break;
            
        case 'multiple-choice':
        default:
            // Create answer buttons
            createMultipleChoiceAnswers(question);
            break;
    }
    
    // Aktualizuj liczniki ulepszaczy
    updatePowerupCounters();
    
    // Start timer for the question with appropriate time for difficulty level
    startTimer(DIFFICULTY_TIMES[selectedDifficulty]);
}

// Create multiple choice answers
function createMultipleChoiceAnswers(question) {
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer;
        // Dodaj indeks dla animacji
        button.style.setProperty('--index', index);
        
        button.addEventListener('click', () => {
            checkAnswer(index, question.correct);
        });
        
        answersContainer.appendChild(button);
    });
}

// Check multiple choice answer
function checkAnswer(selected, correct) {
    // Zatrzymaj timer
    clearInterval(timerInterval);
    clearTimeout(timeoutRef);
    
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    // Disable all buttons
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Mark selected button
    const isCorrect = selected === correct;
    answerButtons[selected].classList.add(isCorrect ? 'correct' : 'incorrect');
    
    // If not selected, mark correct answer
    if (!isCorrect) {
        answerButtons[correct].classList.add('correct');
    }
    
    // Show feedback
    setTimeout(() => {
        showFeedback(isCorrect, questions[currentQuestion].answers ? questions[currentQuestion].answers[correct] : '');
    }, 1000);
}

// Check text answer
function checkTextAnswer() {
    // Zatrzymaj timer
    clearInterval(timerInterval);
    clearTimeout(timeoutRef);
    
    const question = questions[currentQuestion];
    const userAnswer = textAnswerInput.value.trim();
    let isCorrect = false;
    
    // Check if answer is correct (case insensitive if specified)
    if (question.caseSensitive) {
        isCorrect = question.correctAnswers.includes(userAnswer);
    } else {
        isCorrect = question.correctAnswers.some(ans => 
            ans.toLowerCase() === userAnswer.toLowerCase());
    }
    
    // Show feedback
    showFeedback(isCorrect, question.correctAnswers[0]);
}

// Show feedback for any question type
function showFeedback(isCorrect, correctAnswer) {
    hideAllScreens();
    
    if (isCorrect) {
        feedbackText.textContent = 'Poprawna odpowiedź!';
        feedbackText.className = 'correct';
        
        // Zwiększ licznik poprawnych odpowiedzi pod rząd
        correctAnswersStreak++;
        
        // Przyznaj monetę
        coins++;
        
        // Oblicz punkty (uwzględnij poziom trudności i ulepszacz podwójnych punktów)
        let pointsToAdd = selectedDifficulty + 1;
        
        // Jeśli ulepszacz podwójnych punktów jest aktywny, podwój punkty
        if (activePowerups.doublePoints) {
            pointsToAdd *= 2;
            feedbackInfo.textContent = `Otrzymujesz 1 monetę i ${pointsToAdd} punktów (podwójne punkty)!`;
        } else {
            feedbackInfo.textContent = `Otrzymujesz 1 monetę i ${pointsToAdd} punktów!`;
        }
        
        // Dodaj punkty
        score += pointsToAdd;
        
        // Animuj zmianę wartości
        coinCount.textContent = coins;
        coinCount.classList.add('value-change');
        playerCoinsDisplay.textContent = `${coins}/10`;
        playerCoinsDisplay.classList.add('value-change');
        playerScoreDisplay.textContent = score;
        playerScoreDisplay.classList.add('value-change');
        
        // Usuń klasę animacji po zakończeniu
        setTimeout(() => {
            coinCount.classList.remove('value-change');
            playerCoinsDisplay.classList.remove('value-change');
            playerScoreDisplay.classList.remove('value-change');
        }, 500);
        
        // Aktualizuj licznik na ekranie
        powerupCounter.textContent = `${correctAnswersStreak}/${ANSWERS_STREAK_FOR_POWERUP}`;
        
        // Jeśli osiągnięto 5 poprawnych odpowiedzi pod rząd, przyznaj ulepszacz
        if (correctAnswersStreak >= ANSWERS_STREAK_FOR_POWERUP) {
            setTimeout(() => {
                giveRandomPowerup();
            }, 1500);
            return;
        }
    } else {
        feedbackText.textContent = 'Niepoprawna odpowiedź!';
        feedbackText.className = 'incorrect';
        
        // Zresetuj licznik poprawnych odpowiedzi pod rząd
        correctAnswersStreak = 0;
        powerupCounter.textContent = `${correctAnswersStreak}/${ANSWERS_STREAK_FOR_POWERUP}`;
        
        const question = questions[currentQuestion];
        if (question.type === 'text-input') {
            feedbackInfo.textContent = 'Poprawna odpowiedź to: ' + question.correctAnswers[0];
        } else {
            feedbackInfo.textContent = 'Poprawna odpowiedź to: ' + correctAnswer;
        }
    }
    
    feedbackScreen.classList.add('active');
    
    // Check if player has collected enough coins
    if (coins >= 10) {
        nextBtn.style.display = 'none';
        setTimeout(() => {
            hideAllScreens();
            completionScreen.classList.add('active');
        }, 2000);
    } else {
        nextBtn.style.display = 'block';
    }
}

// Next Question
function nextQuestion() {
    currentQuestion++;
    
    // Reset active powerups
    activePowerups = {
        doublePoints: false,
        doubleTime: false,
        removeAnswers: false
    };
    
    // Check if we've reached the end of questions
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
        shuffleArray(questions);
    }
    
    hideAllScreens();
    showQuestion();
    questionScreen.classList.add('active');
}

// Next Set
function nextSet() {
    currentSet++;
    currentQuestion = 0;
    coins = 0;
    coinCount.textContent = coins;
    
    // Resetuj licznik poprawnych odpowiedzi pod rząd
    correctAnswersStreak = 0;
    
    // Check if we've completed all sets
    if (currentSet >= quizData.length) {
        // Zapisz wynik końcowy
        finalScore.textContent = `${score} punktów (${difficultyText[selectedDifficulty]})`;
        
        // Dodaj wynik do tablicy wyników
        addHighScore();
        
        hideAllScreens();
        gameOverScreen.classList.add('active');
        return;
    }
    
    initializeGame();
    hideAllScreens();
    showQuestion();
    questionScreen.classList.add('active');
    startTimer(DIFFICULTY_TIMES[selectedDifficulty]);
}

// Restart Game
function restartGame() {
    currentSet = 0;
    currentQuestion = 0;
    coins = 0;
    score = 0;
    
    // Resetuj ulepszacze
    correctAnswersStreak = 0;
    powerups = {
        doublePoints: 0,
        doubleTime: 0,
        removeAnswers: 0
    };
    activePowerups = {
        doublePoints: false,
        doubleTime: false,
        removeAnswers: false
    };
    currentTutorialStep = 1; // Reset tutoriala
    
    // Aktualizuj liczniki ulepszaczy
    updatePowerupCounters();
    
    hideAllScreens();
    playerNameInput.value = playerName;
    selectDifficulty(0); // Reset do łatwego poziomu trudności
    welcomeScreen.classList.add('active');
}

// Helper Functions
function hideAllScreens() {
    welcomeScreen.classList.remove('active');
    questionScreen.classList.remove('active');
    feedbackScreen.classList.remove('active');
    completionScreen.classList.remove('active');
    gameOverScreen.classList.remove('active');
    timeoutScreen.classList.remove('active');
    powerupScreen.classList.remove('active');
    tutorialScreen.classList.remove('active');
    dailyQuestsScreen.classList.remove('active');
    dailyQuestCompleteScreen.classList.remove('active');
    speedModeScreen.classList.remove('active');
    speedResultScreen.classList.remove('active');
    
    // Zatrzymaj timer przy ukryciu ekranu pytania
    clearInterval(timerInterval);
    clearTimeout(timeoutRef);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Dodaj style dla podświetlenia bieżącego gracza w tabeli
function addCurrentPlayerHighlightStyle() {
    const style = document.createElement('style');
    style.textContent = `
        .current-player-row {
            background-color: rgba(126, 87, 194, 0.3) !important;
            font-weight: bold;
        }
        .current-player-row td {
            border-color: #7e57c2;
        }
    `;
    document.head.appendChild(style);
}

// Eksport wyników do pliku JSON
function exportScores() {
    try {
        const data = JSON.stringify({
            allTime: highScores,
            weekly: weeklyHighScores,
            lastUpdated: new Date().toISOString()
        }, null, 2);
        
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'quiz_scores.json';
        
        // Dodaj do DOM, kliknij i usuń
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Zwolnij URL
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Błąd podczas eksportu wyników:', error);
        alert('Wystąpił błąd podczas eksportu wyników. Sprawdź konsolę.');
    }
}

// Dodaj funkcję do animowania elementów tablicy wyników po zmianie
function animateScoreElements() {
    highScoresBody.querySelectorAll('tr').forEach((row, index) => {
        row.style.animationDelay = `${index * 0.1}s`;
        row.style.opacity = 0;
        
        // Resetuj animację poprzez usunięcie i ponowne dodanie klasy
        row.classList.remove('tr-animate');
        setTimeout(() => {
            row.style.opacity = 1;
            row.classList.add('tr-animate');
        }, 10);
    });
}

// Dodajemy animację dla coinCount gdy wartość się zmienia
function updateCoins(newValue) {
    coinCount.textContent = newValue;
    coinCount.classList.add('value-change');
    
    setTimeout(() => {
        coinCount.classList.remove('value-change');
    }, 500);
}

// Start Quiz z timerem
function startQuiz() {
    // Pobierz nazwę gracza
    const inputName = playerNameInput.value.trim();
    if (inputName) {
        playerName = inputName;
    } else {
        playerName = "Nieznany";
    }
    
    initializeGame();
    hideAllScreens();
    
    // Dodaj efekt animacji przed pokazaniem pytania
    setTimeout(() => {
        showQuestion();
        questionScreen.classList.add('active');
        startTimer(DIFFICULTY_TIMES[selectedDifficulty]);
    }, 300);
    
    // Aktualizuj nazwę gracza w tablicy wyników
    updatePlayerStats();
    updateHighScoresTable();
}

// Start timera
function startTimer(customTime) {
    // Resetuj timer
    clearInterval(timerInterval);
    clearTimeout(timeoutRef);
    
    // Ustaw czas na podstawie parametru lub domyślnie dla poziomu trudności
    timeLeft = customTime || DIFFICULTY_TIMES[selectedDifficulty]; 
    timerCount.textContent = timeLeft;
    
    // Dostosuj wygląd timera do poziomu trudności
    updateTimerAppearance();
    
    // Przygotuj animację dla timer bar
    timerBar.style.transition = 'none';
    timerBar.style.transform = 'scaleY(1)';
    timerCircle.classList.remove('timer-warning');
    
    // Odtwórz animację od nowa
    setTimeout(() => {
        timerBar.style.transition = 'transform 1s linear';
        timerBar.classList.remove('countdown-animation');
        void timerBar.offsetWidth; // Trigger reflow
        
        // Ustaw czas animacji
        timerBar.style.animationDuration = `${timeLeft}s`;
        timerBar.classList.add('countdown-animation');
    }, 50);
    
    // Ustaw interwał co sekundę
    timerInterval = setInterval(() => {
        timeLeft--;
        timerCount.textContent = timeLeft;
        
        // Ostrzeżenie o końcu czasu
        if (timeLeft <= Math.min(10, DIFFICULTY_TIMES[selectedDifficulty] / 4)) {
            timerCircle.classList.add('timer-warning');
        }
        
        // Koniec czasu
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

// Dostosuj wygląd timera do poziomu trudności
function updateTimerAppearance() {
    // Usuń wszystkie klasy poziomu trudności
    timerCircle.classList.remove('easy-timer', 'medium-timer', 'hard-timer');
    
    // Dodaj odpowiednią klasę
    switch(selectedDifficulty) {
        case 0:
            timerCircle.classList.add('easy-timer');
            timerBar.style.backgroundColor = '#4caf50'; // zielony
            break;
        case 1:
            timerCircle.classList.add('medium-timer');
            timerBar.style.backgroundColor = '#ff9800'; // pomarańczowy
            break;
        case 2:
            timerCircle.classList.add('hard-timer');
            timerBar.style.backgroundColor = '#f44336'; // czerwony
            break;
    }
}

// Obsługa końca czasu
function handleTimeout() {
    clearInterval(timerInterval);
    hideAllScreens();
    timeoutScreen.classList.add('active');
}

// Pokaż tutorial
function showTutorial() {
    hideAllScreens();
    tutorialScreen.classList.add('active');
    setTutorialStep(1); // Zaczynamy od pierwszego kroku
}

// Ustawienie kroku tutoriala
function setTutorialStep(step) {
    // Aktualizacja aktywnego slajdu
    tutorialSlides.forEach((slide, index) => {
        if (index + 1 === step) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Aktualizacja paska postępu
    const progressPercentage = (step / totalTutorialSteps) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    
    // Aktualizacja licznika kroków
    currentStepSpan.textContent = step;
    
    // Aktualizacja dostępności przycisków nawigacji
    prevStepBtn.disabled = step === 1;
    
    if (step === totalTutorialSteps) {
        nextStepBtn.style.display = 'none';
        finishTutorialBtn.style.display = 'block';
    } else {
        nextStepBtn.style.display = 'block';
        finishTutorialBtn.style.display = 'none';
    }
    
    // Zapisanie aktualnego kroku
    currentTutorialStep = step;
}

// Poprzedni krok tutoriala
function prevTutorialStep() {
    if (currentTutorialStep > 1) {
        setTutorialStep(currentTutorialStep - 1);
    }
}

// Następny krok tutoriala
function nextTutorialStep() {
    if (currentTutorialStep < totalTutorialSteps) {
        setTutorialStep(currentTutorialStep + 1);
    }
}

// Zakończenie tutoriala
function finishTutorial() {
    hideAllScreens();
    welcomeScreen.classList.add('active');
}

// Pokaż ekran zadań dziennych
function showDailyQuests() {
    // Sprawdź czy minął dzień od ostatniej generacji zadań
    const lastQuestGeneration = localStorage.getItem('lastQuestGeneration');
    const now = new Date().setHours(0, 0, 0, 0); // Dzisiejsza data bez czasu
    
    if (!lastQuestGeneration || parseInt(lastQuestGeneration) < now) {
        // Nowy dzień, generuj nowe zadania
        generateDailyQuests();
        localStorage.setItem('lastQuestGeneration', now.toString());
        dailyRewardClaimed = false;
    } else {
        // Ten sam dzień, wczytaj postęp
        loadDailyQuestsProgress();
    }
    
    hideAllScreens();
    dailyQuestsScreen.classList.add('active');
    updateDailyQuestsUI();
}

// Generowanie pytań dla zadań dziennych
function generateDailyQuests() {
    dailyQuests.forEach(quest => {
        quest.progress = 0;
        quest.completed = false;
        quest.questions = []; // Reset pytań
        
        // Znajdź wszystkie pytania z danej kategorii
        const categoryQuestions = [];
        quizData.forEach(set => {
            set.forEach(question => {
                if (question.category.includes(quest.category)) {
                    categoryQuestions.push({ ...question });
                }
            });
        });
        
        // Wybierz losowo 3 pytania
        if (categoryQuestions.length > 0) {
            shuffleArray(categoryQuestions);
            quest.questions = categoryQuestions.slice(0, 3);
        } else {
            // Jeśli brak pytań z kategorii, wybierz dowolne
            const allQuestions = [];
            quizData.forEach(set => {
                set.forEach(question => {
                    allQuestions.push({ ...question });
                });
            });
            shuffleArray(allQuestions);
            quest.questions = allQuestions.slice(0, 3);
        }
    });
    
    // Zapisz nowe zadania do localStorage
    saveDailyQuestsProgress();
}

// Zapisz postęp zadań dziennych
function saveDailyQuestsProgress() {
    localStorage.setItem('dailyQuests', JSON.stringify(dailyQuests));
    localStorage.setItem('dailyRewardClaimed', dailyRewardClaimed.toString());
}

// Wczytaj postęp zadań dziennych
function loadDailyQuestsProgress() {
    const savedQuests = localStorage.getItem('dailyQuests');
    if (savedQuests) {
        dailyQuests = JSON.parse(savedQuests);
    }
    
    const savedRewardClaimed = localStorage.getItem('dailyRewardClaimed');
    if (savedRewardClaimed) {
        dailyRewardClaimed = savedRewardClaimed === 'true';
    }
}

// Aktualizacja interfejsu zadań dziennych
function updateDailyQuestsUI() {
    dailyQuests.forEach(quest => {
        const questElement = document.getElementById(`daily-quest-${quest.id}`);
        const statusElement = questElement.querySelector('.quest-status');
        const progressFill = questElement.querySelector('.progress-fill');
        const questBtn = questElement.querySelector('.quest-btn');
        
        // Aktualizuj status
        statusElement.textContent = `${quest.progress}/3`;
        
        // Aktualizuj pasek postępu
        const progressPercentage = (quest.progress / 3) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        // Aktualizuj przycisk i wygląd zadania
        if (quest.completed) {
            questElement.classList.add('completed');
            questBtn.classList.add('completed');
            questBtn.textContent = 'Ukończono';
        } else {
            questElement.classList.remove('completed');
            questBtn.classList.remove('completed');
            questBtn.textContent = 'Rozpocznij';
        }
    });
    
    // Sprawdź czy wszystkie zadania są ukończone
    const allCompleted = dailyQuests.every(quest => quest.completed);
    claimDailyRewardBtn.disabled = !allCompleted || dailyRewardClaimed;
    
    if (allCompleted && !dailyRewardClaimed) {
        claimDailyRewardBtn.style.opacity = '1';
        claimDailyRewardBtn.classList.add('pulse-animation');
    } else {
        claimDailyRewardBtn.style.opacity = '0.5';
        claimDailyRewardBtn.classList.remove('pulse-animation');
    }
}

// Rozpocznij zadanie dzienne
function startDailyQuest(questId) {
    const quest = dailyQuests.find(q => q.id === questId);
    if (!quest || quest.completed) return;
    
    currentQuestId = questId;
    currentQuestQuestions = [...quest.questions];
    currentQuestQuestionIndex = 0;
    correctAnswersInQuest = 0;
    
    // Przygotuj i pokaż pierwsze pytanie
    hideAllScreens();
    showDailyQuestQuestion();
}

// Pokaż pytanie z zadania dziennego
function showDailyQuestQuestion() {
    if (currentQuestQuestionIndex >= currentQuestQuestions.length) {
        finishDailyQuest();
        return;
    }
    
    const question = currentQuestQuestions[currentQuestQuestionIndex];
    questionScreen.classList.add('active');
    
    // Wyświetl kategorię
    document.querySelector('#game-category span').textContent = question.category;
    
    // Wyświetl pytanie
    document.getElementById('question').textContent = question.question;
    
    // Wyczyść poprzednie odpowiedzi
    answersContainer.innerHTML = '';
    textAnswerContainer.classList.remove('active');
    
    // Pokaż odpowiednie pole w zależności od typu pytania
    if (question.type === 'multiple-choice') {
        createMultipleChoiceAnswersForDailyQuest(question);
    } else if (question.type === 'text-input') {
        textAnswerContainer.classList.add('active');
        textAnswerInput.value = '';
        textAnswerInput.focus();
        submitTextAnswerBtn.onclick = () => checkDailyQuestTextAnswer();
    }
    
    // Ustaw timer na 60 sekund niezależnie od poziomu trudności
    startTimer(60);
}

// Tworzenie przycisków dla pytań wielokrotnego wyboru w zadaniu dziennym
function createMultipleChoiceAnswersForDailyQuest(question) {
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.style.setProperty('--index', index);
        
        button.addEventListener('click', () => {
            checkDailyQuestAnswer(index, question.correct);
        });
        
        answersContainer.appendChild(button);
    });
}

// Sprawdzanie odpowiedzi na pytanie wielokrotnego wyboru w zadaniu dziennym
function checkDailyQuestAnswer(selected, correct) {
    clearInterval(timerInterval);
    clearTimeout(timeoutRef);
    
    const isCorrect = selected === correct;
    const buttons = document.querySelectorAll('.answer-btn');
    
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === correct) {
            button.classList.add('correct');
        } else if (index === selected && !isCorrect) {
            button.classList.add('incorrect');
        }
    });
    
    if (isCorrect) {
        correctAnswersInQuest++;
    }
    
    // Przejdź do następnego pytania po krótkim opóźnieniu
    setTimeout(() => {
        currentQuestQuestionIndex++;
        showDailyQuestQuestion();
    }, 1500);
}

// Sprawdzanie odpowiedzi na pytanie tekstowe w zadaniu dziennym
function checkDailyQuestTextAnswer() {
    clearInterval(timerInterval);
    clearTimeout(timeoutRef);
    
    const question = currentQuestQuestions[currentQuestQuestionIndex];
    const userAnswer = textAnswerInput.value.trim().toLowerCase();
    
    let isCorrect = false;
    if (question.correctAnswers) {
        // Sprawdzenie z uwzględnieniem wielkości liter
        if (question.caseSensitive) {
            isCorrect = question.correctAnswers.includes(userAnswer);
        } else {
            isCorrect = question.correctAnswers.some(
                answer => answer.toLowerCase() === userAnswer
            );
        }
    }
    
    if (isCorrect) {
        correctAnswersInQuest++;
    }
    
    // Podświetl pole tekstowe jako poprawne lub niepoprawne
    textAnswerInput.style.borderColor = isCorrect ? '#4caf50' : '#f44336';
    
    // Przejdź do następnego pytania po krótkim opóźnieniu
    setTimeout(() => {
        currentQuestQuestionIndex++;
        showDailyQuestQuestion();
    }, 1500);
}

// Zakończenie zadania dziennego
function finishDailyQuest() {
    // Zaktualizuj postęp zadania
    const questIndex = dailyQuests.findIndex(q => q.id === currentQuestId);
    if (questIndex !== -1) {
        dailyQuests[questIndex].progress = 3; // Zadanie zawsze kończy się po 3 pytaniach
        dailyQuests[questIndex].completed = true;
        saveDailyQuestsProgress();
    }
    
    // Aktualizuj ekran ukończenia zadania
    correctAnswersCount.textContent = correctAnswersInQuest;
    
    // Pokaż ekran ukończenia
    hideAllScreens();
    dailyQuestCompleteScreen.classList.add('active');
    
    // Pokaż powiadomienie o ukończeniu
    showNotification(
        '✅ Zadanie ukończone!',
        `Odpowiedziałeś poprawnie na ${correctAnswersInQuest}/3 pytań.`
    );
    
    // Sprawdź czy wszystkie zadania są ukończone
    if (dailyQuests.every(quest => quest.completed)) {
        setTimeout(() => {
            showNotification(
                '🎉 Wszystkie zadania ukończone!',
                'Możesz teraz odebrać specjalną nagrodę!'
            );
        }, 3000);
    }
}

// Odbieranie nagrody za ukończenie wszystkich zadań
function claimDailyReward() {
    if (dailyQuests.every(quest => quest.completed) && !dailyRewardClaimed) {
        // Dodaj punkty do wyniku
        score += 5;
        updatePlayerStats();
        
        // Oznacz nagrodę jako odebraną
        dailyRewardClaimed = true;
        saveDailyQuestsProgress();
        updateDailyQuestsUI();
        
        // Pokaż efekt konfetti
        createConfetti();
        
        // Pokaż powiadomienie
        showNotification(
            '🏆 Nagroda odebrana!',
            'Dodano +5 punktów do Twojego wyniku!'
        );
    }
}

// Tworzenie efektu konfetti
function createConfetti() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Losowy kolor
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.setProperty('--color', color);
        
        // Losowa pozycja X
        confetti.style.left = Math.random() * 100 + 'vw';
        
        // Losowy czas trwania animacji
        const duration = (Math.random() * 3 + 2) + 's';
        confetti.style.setProperty('--duration', duration);
        
        // Losowy ksztalt (kwadrat lub kółko)
        const radius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.setProperty('--radius', radius);
        
        document.body.appendChild(confetti);
        
        // Usuń konfetti po zakończeniu animacji
        setTimeout(() => {
            confetti.remove();
        }, parseFloat(duration) * 1000);
    }
}

// Pokaż powiadomienie
function showNotification(title, message) {
    // Usuń poprzednie powiadomienie
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) {
        oldNotification.remove();
    }
    
    // Stwórz nowe powiadomienie
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    notification.innerHTML = `
        <div class="notification-icon">🎮</div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <div class="notification-close">×</div>
    `;
    
    // Dodaj do body
    document.body.appendChild(notification);
    
    // Obsłuż zamykanie powiadomienia
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 500);
    });
    
    // Automatycznie zamknij po 5 sekundach
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.classList.add('hide');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }
    }, 5000);
}

// Initialize the game
window.addEventListener('load', () => {
    addCurrentPlayerHighlightStyle();
    initHighScores();
    restartGame();
}); 

// Elementy dla trybu SZYBCIOR
const speedModeBtn = document.getElementById('speed-mode-btn');
const speedModeScreen = document.getElementById('speed-mode-screen');
const speedResultScreen = document.getElementById('speed-result-screen');
const currentSpeedQuestion = document.getElementById('current-speed-question');
const speedTimerBar = document.getElementById('speed-timer-bar');
const speedTimerCount = document.getElementById('speed-timer-count');
const speedQuestion = document.getElementById('speed-question');
const speedAnswers = document.getElementById('speed-answers');
const speedCorrectCount = document.getElementById('speed-correct-count');
const speedPoints = document.getElementById('speed-points');
const speedAvgTime = document.getElementById('speed-avg-time');
const speedRestartBtn = document.getElementById('speed-restart-btn');
const speedHomeBtn = document.getElementById('speed-home-btn');

// Zmienne dla trybu SZYBCIOR
let speedQuestions = [];
let currentSpeedQuestionIndex = 0;
let speedCorrectAnswers = 0;
let speedTotalPoints = 0;
let speedTimerInterval;
let speedTimeoutRef;
let speedAnswerTimes = [];
let isSpeedModeActive = false;

// Event listenery dla trybu SZYBCIOR
speedModeBtn.addEventListener('click', startSpeedMode);
speedRestartBtn.addEventListener('click', restartSpeedMode);
speedHomeBtn.addEventListener('click', () => {
    hideAllScreens();
    welcomeScreen.classList.add('active');
    isSpeedModeActive = false;
}); 

// Funkcja uruchamiająca tryb SZYBCIOR
function startSpeedMode() {
    // Reset zmiennych
    speedQuestions = [];
    currentSpeedQuestionIndex = 0;
    speedCorrectAnswers = 0;
    speedTotalPoints = 0;
    speedAnswerTimes = [];
    isSpeedModeActive = true;
    
    // Wybierz 25 losowych pytań
    selectSpeedQuestions();
    
    // Pokaż ekran trybu SZYBCIOR
    hideAllScreens();
    speedModeScreen.classList.add('active');
    
    // Pokaż pierwsze pytanie
    showSpeedQuestion();
}

// Funkcja wybierająca pytania do trybu SZYBCIOR
function selectSpeedQuestions() {
    // Zbierz wszystkie pytania z zestawów do jednej tablicy
    const allQuestions = [];
    quizData.forEach(set => {
        set.forEach(question => {
            // Dodajemy tylko pytania wielokrotnego wyboru dla szybkości
            if (question.type === 'multiple-choice') {
                allQuestions.push({ ...question });
            }
        });
    });
    
    // Jeśli nie ma wystarczającej liczby pytań, powiel istniejące
    if (allQuestions.length < 25) {
        while (allQuestions.length < 25) {
            const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
            allQuestions.push({ ...randomQuestion });
        }
    }
    
    // Losowo wybierz 25 pytań
    speedQuestions = [];
    const shuffledQuestions = [...allQuestions];
    shuffleArray(shuffledQuestions);
    speedQuestions = shuffledQuestions.slice(0, 25);
}

// Funkcja pokazująca aktualne pytanie w trybie SZYBCIOR
function showSpeedQuestion() {
    if (currentSpeedQuestionIndex >= speedQuestions.length) {
        finishSpeedMode();
        return;
    }
    
    const question = speedQuestions[currentSpeedQuestionIndex];
    
    // Aktualizuj licznik pytań
    currentSpeedQuestion.textContent = currentSpeedQuestionIndex + 1;
    
    // Pokaż pytanie
    speedQuestion.textContent = question.question;
    
    // Wyczyść poprzednie odpowiedzi
    speedAnswers.innerHTML = '';
    
    // Pokaż odpowiedzi
    createSpeedAnswers(question);
    
    // Uruchom timer na 10 sekund
    startSpeedTimer();
}

// Funkcja tworząca przyciski odpowiedzi w trybie SZYBCIOR
function createSpeedAnswers(question) {
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.style.setProperty('--index', index);
        
        button.addEventListener('click', () => {
            checkSpeedAnswer(index, question.correct);
        });
        
        speedAnswers.appendChild(button);
    });
}

// Funkcja sprawdzająca odpowiedź w trybie SZYBCIOR
function checkSpeedAnswer(selected, correct) {
    // Zatrzymaj timer
    clearInterval(speedTimerInterval);
    speedTimerInterval = null;
    
    // Oblicz czas odpowiedzi (pozostały czas)
    const remainingTime = parseInt(document.getElementById('speed-timer-count').textContent);
    const responseTime = 10 - remainingTime;
    
    // Zapisz czas odpowiedzi
    speedAnswerTimes.push(responseTime);
    
    // Pozyskaj przyciski odpowiedzi
    const buttons = document.querySelectorAll('#speed-answers .answer-btn');
    
    // Zablokuj wszystkie przyciski
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Sprawdź czy odpowiedź jest poprawna
    const isCorrect = selected === correct;
    
    // Zaznacz poprawną i błędną odpowiedź
    buttons.forEach((button, index) => {
        if (index === correct) {
            button.classList.add('correct');
        } else if (index === selected && !isCorrect) {
            button.classList.add('incorrect');
        }
    });
    
    // Jeśli odpowiedź poprawna, dodaj punkty
    if (isCorrect) {
        speedCorrectAnswers++;
        
        // System punktacji: 1 punkt bazowy + do 9 punktów za szybkość
        // Im szybsza odpowiedź, tym więcej punktów (max 10 punktów za pytanie)
        const basePoints = 1;
        const speedPoints = Math.round((10 - responseTime) * 0.9);
        const pointsGained = basePoints + speedPoints;
        
        speedTotalPoints += pointsGained;
        
        // Dodaj wizualny efekt zdobycia punktów
        const pointsFeedback = document.createElement('div');
        pointsFeedback.className = 'points-feedback';
        pointsFeedback.textContent = `+${pointsGained}`;
        pointsFeedback.style.position = 'absolute';
        pointsFeedback.style.top = '50%';
        pointsFeedback.style.left = '50%';
        pointsFeedback.style.transform = 'translate(-50%, -50%)';
        pointsFeedback.style.color = '#ffcc00';
        pointsFeedback.style.fontSize = '3rem';
        pointsFeedback.style.fontWeight = 'bold';
        pointsFeedback.style.textShadow = '0 0 10px rgba(255, 204, 0, 0.7)';
        pointsFeedback.style.zIndex = '100';
        pointsFeedback.style.animation = 'fadeOut 1s forwards';
        
        document.getElementById('speed-mode-screen').appendChild(pointsFeedback);
        
        setTimeout(() => {
            pointsFeedback.remove();
        }, 1000);
    }
    
    // Przejdź do następnego pytania po krótkiej pauzie
    setTimeout(() => {
        currentSpeedQuestionIndex++;
        
        // Jeśli to było ostatnie pytanie, pokaż wyniki, w przeciwnym razie kolejne pytanie
        if (currentSpeedQuestionIndex >= speedQuestions.length) {
            finishSpeedMode();
        } else {
            showSpeedQuestion();
        }
    }, 1000);
}

// Funkcja rozpoczynająca timer w trybie SZYBCIOR
function startSpeedTimer() {
    // Zatrzymaj poprzedni timer jeśli istnieje
    if (speedTimerInterval) {
        clearInterval(speedTimerInterval);
    }
    
    let timeLeft = 10; // 10 sekund na pytanie w trybie SZYBCIOR
    const timerBar = document.getElementById('speed-timer-bar');
    const timerCount = document.getElementById('speed-timer-count');
    
    // Reset timera
    timerBar.style.width = '100%';
    timerCount.textContent = timeLeft;
    
    // Początkowa intensywność efektu szybkości
    updateSpeedEffect(timeLeft);
    
    // Rozpocznij odliczanie
    const startTime = Date.now();
    speedTimerInterval = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        timeLeft = Math.max(0, 10 - elapsedTime);
        
        // Aktualizacja wyświetlania timera
        timerBar.style.width = `${(timeLeft / 10) * 100}%`;
        timerCount.textContent = timeLeft;
        
        // Aktualizacja efektu szybkości na podstawie pozostałego czasu
        updateSpeedEffect(timeLeft);
        
        // Zmień kolor timera gdy mało czasu
        if (timeLeft <= 3) {
            timerBar.style.backgroundColor = '#ff3333';
        } else if (timeLeft <= 5) {
            timerBar.style.backgroundColor = '#ffaa33';
        } else {
            timerBar.style.backgroundColor = '#33ccff';
        }
        
        // Gdy czas się skończy
        if (timeLeft === 0) {
            clearInterval(speedTimerInterval);
            speedTimerInterval = null;
            
            // Zapisz czas odpowiedzi jako 10 sekund (maksymalny)
            speedAnswerTimes.push(10);
            
            // Zaznacz, że czas minął i przejdź do następnego pytania
            setTimeout(() => {
                currentSpeedQuestionIndex++;
                if (currentSpeedQuestionIndex < speedQuestions.length) {
                    showSpeedQuestion();
                } else {
                    finishSpeedMode();
                }
            }, 1000);
        }
    }, 1000);
    
    return startTime; // Zwracamy czas rozpoczęcia dla późniejszych obliczeń
}

// Funkcja aktualizująca intensywność płomieni w oparciu o pozostały czas
function updateFlameIntensity(timeLeft) {
    const intensity = Math.max(0.5, 1 + (10 - timeLeft) / 4); // Współczynnik intensywności od 0.5 do 3.0
    
    // Aktualizacja właściwości baśniowych płomieni
    const fantasyFlames = document.querySelectorAll('.fantasy-flame');
    fantasyFlames.forEach(flame => {
        // Zwiększamy wysokość płomieni proporcjonalnie do intensywności
        const baseHeight = flame.classList.contains('large') ? 120 : 
                          flame.classList.contains('medium') ? 100 : 
                          flame.classList.contains('small') ? 70 : 80;
        
        flame.style.height = `${baseHeight * intensity}px`;
        
        // Dostosowanie rozmycia i przyciemnienie płomieni
        const baseBlur = flame.classList.contains('large') ? 8 : 
                        flame.classList.contains('medium') ? 6 : 
                        flame.classList.contains('small') ? 4 : 5;
        
        flame.style.filter = `blur(${baseBlur * Math.min(1.5, intensity)}px)`;
        flame.style.opacity = `${Math.min(1, 0.7 + intensity * 0.1)}`;
        
        // Przyspieszenie animacji przy większej intensywności
        const animationSpeed = flame.classList.contains('large') ? 4 : 
                              flame.classList.contains('medium') ? 3.5 : 
                              flame.classList.contains('small') ? 2.5 : 3;
        
        flame.style.animationDuration = `${animationSpeed / intensity}s, ${(animationSpeed + 2) / intensity}s`;
    });
    
    // Aktualizacja iskier i magicznych kręgów
    const sparks = document.querySelectorAll('.spark');
    sparks.forEach(spark => {
        // Przy wyższej intensywności iskry pojawiają się częściej i są większe
        spark.style.animationDuration = `${5 / intensity}s`;
        spark.style.width = spark.style.height = `${3 * intensity}px`;
        spark.style.opacity = timeLeft <= 3 ? '1' : ''; // Większa widoczność przy małej ilości czasu
    });
    
    // Aktualizacja magicznych kręgów
    const circles = document.querySelectorAll('.magic-circle');
    circles.forEach(circle => {
        // Przyspieszenie rotacji kręgów
        const baseSpeed = circle.classList.contains('outer') ? 40 : 
                         circle.classList.contains('middle') ? 30 : 20;
        
        const rotateAnimation = circle.classList.contains('middle') ? 
                               `rotateCircle ${baseSpeed / intensity}s linear infinite reverse` : 
                               `rotateCircle ${baseSpeed / intensity}s linear infinite`;
                               
        const pulseSpeed = circle.classList.contains('outer') ? 8 : 
                          circle.classList.contains('middle') ? 6 : 4;
                          
        const pulseAnimation = `pulseCircle ${pulseSpeed / intensity}s ease-in-out infinite`;
        
        circle.style.animation = `${rotateAnimation}, ${pulseAnimation}`;
        
        // Większa poświata przy małej ilości czasu
        if (timeLeft <= 3) {
            const baseColor = circle.classList.contains('outer') ? 'rgba(255, 100, 150, 0.6)' : 
                             circle.classList.contains('middle') ? 'rgba(150, 100, 255, 0.6)' : 
                             'rgba(100, 200, 255, 0.6)';
                             
            circle.style.boxShadow = `0 0 ${30 * intensity}px ${baseColor}`;
        }
    });
    
    // Dodanie efektu trzęsienia przy krytycznie małej ilości czasu
    const speedModeScreen = document.getElementById('speed-mode-screen');
    if (timeLeft <= 3) {
        speedModeScreen.classList.add('shake-effect');
        
        // Zwiększamy tło dla lepszego efektu
        const background = document.querySelector('.fantasy-background');
        background.style.opacity = '0.95';
    } else {
        speedModeScreen.classList.remove('shake-effect');
        
        // Przywracamy normalne tło
        const background = document.querySelector('.fantasy-background');
        background.style.opacity = ''; // Przywrócenie domyślnej wartości
    }
}

// Funkcja kończąca tryb SZYBCIOR i pokazująca wyniki
function finishSpeedMode() {
    clearInterval(speedTimerInterval);
    clearTimeout(speedTimeoutRef);
    
    // Oblicz średni czas odpowiedzi
    const totalTime = speedAnswerTimes.reduce((acc, time) => acc + time, 0);
    const avgTime = totalTime / speedAnswerTimes.length;
    
    // Aktualizuj wyniki
    speedCorrectCount.textContent = `${speedCorrectAnswers}/${speedQuestions.length}`;
    speedPoints.textContent = speedTotalPoints;
    speedAvgTime.textContent = `${avgTime.toFixed(1)}s`;
    
    // Dodaj wynik do tabeli wyników
    addSpeedModeScore();
    
    // Pokaż ekran wyniku
    hideAllScreens();
    speedResultScreen.classList.add('active');
    
    // Pokaż powiadomienie o ukończeniu
    showNotification(
        '🏁 Tryb SZYBCIOR ukończony!',
        `Zdobyto ${speedTotalPoints} punktów`
    );
}

// Funkcja dodająca wynik z trybu SZYBCIOR do tabeli wyników
function addSpeedModeScore() {
    if (speedTotalPoints <= 0) return;
    
    const playerName = document.getElementById('player-name').value.trim() || 'Anonimowy';
    
    // Przygotuj wynik
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    
    // Utwórz nowy wynik
    const newScore = {
        name: playerName + ' [SZYBCIOR]',
        score: speedTotalPoints,
        date: formattedDate,
        timestamp: date.getTime(),
        level: 'SZYBCIOR'
    };
    
    // Dodaj do tablicy wyników
    highScores.push(newScore);
    
    // Sortuj wyniki malejąco według punktacji
    highScores.sort((a, b) => b.score - a.score);
    
    // Ogranicz do 100 najlepszych wyników
    highScores = highScores.slice(0, 100);
    
    // Aktualizuj także wyniki tygodniowe
    updateWeeklyHighScores();
    
    // Zapisz wyniki do localStorage
    saveHighScores();
    
    // Aktualizuj tabelę wyników
    updateHighScoresTable();
}

// Funkcja restartująca tryb SZYBCIOR
function restartSpeedMode() {
    // Reset zmiennych
    currentSpeedQuestionIndex = 0;
    speedCorrectAnswers = 0;
    speedTotalPoints = 0;
    speedAnswerTimes = [];
    
    // Wybierz nowe pytania
    selectSpeedQuestions();
    
    // Pokaż ekran trybu SZYBCIOR
    hideAllScreens();
    speedModeScreen.classList.add('active');
    
    // Pokaż pierwsze pytanie
    showSpeedQuestion();
}

// Funkcja aktualizująca efekt szybkości w oparciu o pozostały czas
function updateSpeedEffect(timeLeft) {
    // Obliczanie współczynnika intensywności na podstawie pozostałego czasu
    // Im mniej czasu, tym większa intensywność (od 1.0 do 3.0)
    const intensity = 1 + ((10 - timeLeft) / 5);
    
    // Aktualizacja linii szybkości
    const speedLines = document.querySelectorAll('.speed-line');
    speedLines.forEach(line => {
        // Przyspieszenie animacji linii
        const baseSpeed = 3;
        const newSpeed = baseSpeed / intensity;
        line.style.animationDuration = `${newSpeed}s`;
        
        // Zwiększenie szerokości i nieprzezroczystości linii
        const baseOpacity = 0.7;
        line.style.opacity = Math.min(0.9, baseOpacity * intensity);
        
        // Zwiększenie jasności linii
        const baseColor = 120;
        const newColor = Math.min(255, baseColor + ((intensity - 1) * 50));
        line.style.background = `linear-gradient(to right, 
                                 transparent 0%, 
                                 rgba(100, ${newColor}, 255, 0.1) 20%, 
                                 rgba(${newColor}, ${newColor}, 255, 0.5) 40%, 
                                 rgba(100, ${newColor}, 255, 0.1) 60%, 
                                 transparent 100%)`;
    });
    
    // Aktualizacja efektu pulsowania
    const speedPulse = document.querySelector('.speed-pulse');
    if (speedPulse) {
        // Przyspieszenie animacji pulsowania
        speedPulse.style.animationDuration = `${4 / intensity}s`;
        
        // Zwiększenie intensywności pulsowania
        speedPulse.style.opacity = Math.min(0.8, 0.5 * intensity);
    }
    
    // Aktualizacja rozmycia na krawędziach
    const speedBlurs = document.querySelectorAll('.speed-blur');
    speedBlurs.forEach(blur => {
        blur.style.opacity = Math.min(1, 0.8 * intensity);
    });
    
    // Dodanie efektu trzęsienia przy krytycznie małej ilości czasu
    const speedModeScreen = document.getElementById('speed-mode-screen');
    if (timeLeft <= 3) {
        // Dodanie efektu trzęsienia
        speedModeScreen.classList.add('shake-effect');
        
        // Zmiana koloru tła gdy mało czasuy
        const container = document.querySelector('.speed-effect-container');
        if (container) {
            // Bardziej intensywny kolor tła
            container.style.background = `radial-gradient(ellipse at center, 
                                        rgba(30, 5, 70, 0.9) 0%, 
                                        rgba(50, 10, 90, 0.8) 50%, 
                                        rgba(20, 0, 80, 0.9) 100%)`;
        }
        
        // Zwiększenie jasności linii w trybie krytycznym
        speedLines.forEach(line => {
            line.style.height = `${parseInt(line.style.height || '1') + 1}px`;
        });
    } else {
        // Usunięcie efektu trzęsienia
        speedModeScreen.classList.remove('shake-effect');
        
        // Przywrócenie normalnego koloru tła
        const container = document.querySelector('.speed-effect-container');
        if (container) {
            container.style.background = '';
        }
    }
}