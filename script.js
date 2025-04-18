// script.js

// --- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ И КОНСТАНТЫ ---
const translations = {
  ru: {
    appTitle: "Автоматическое оценивание учеников",
    manageClasses: "Управление классами",
    classNamePlaceholder: "Название класса (например, 10А)",
    addClassBtn: "Добавить класс",
    deleteClassBtn: "Удалить класс",
    extraTools: "Дополнительные инструменты",
    randomStudentBtn: "Случайный",
    timerBtn: "Таймер",
    groupGeneratorBtn: "Генератор групп",
    whiteboardBtn: "Виртуальная доска",
    stopwatch: "Секундомер",
    countdown: "Обратный отсчёт",
    startBtn: "Начать",
    stopBtn: "Стоп",
    resetBtn: "Сбросить",
    minutesLabel: "Минуты",
    secondsLabel: "Секунды",
    setTimePrompt: "Установите время больше нуля",
    timeUpAlert: "Время вышло!",
    studentCards: "Карточки учеников",
    addStudentBtn: "Добавить ученика",
    enterScoreBtn: "Ввести балл",
    scoreLabel: "Баллы",
    groupActions: "Групповые действия",
    allPlusBtn: "Всем +1 балл",
    resetScoresBtn: "Обнулить все баллы",
    scoreChart: "Диаграмма баллов",
    chartLabel: "Баллы",
    changeMaxScoreBtn: "Изменить максимальный балл",
    enterNewMaxScorePrompt: "Введите новый максимальный балл:",
    invalidNumberAlert: "Введите корректное положительное число",
    gradingScale: "Шкала оценивания",
    pointsSuffix: "баллов",
    pointsSuffix2_4: "балла",
    resultsTable: "Таблица результатов",
    tableHeaderNum: "№",
    tableHeaderName: "ФИО ученика",
    tableHeaderScore: "Баллы",
    tableHeaderGrade: "Оценка",
    exportDocBtn: "Экспорт DOC",
    footerText: "© 2024 Команда «A1TEACH». Все права защищены.",
    footerDeveloped: "Разработано командой «A1TEACH»",
    noStudentsAlert: "Нет учеников для выбора",
    selectedToast: "Выбран: {studentName}!",
    nextBtn: "Следующий",
    noActiveClassDelete: "Нет активного класса для удаления",
    confirmDeleteClass: "Удалить класс {className}?",
    enterClassNameAlert: "Введите название класса",
    classExistsAlert: "Класс с таким названием уже существует",
    enterStudentNamesPrompt: "Введите имена учеников через запятую (или оставьте пустым):",
    selectOrCreateClassAlert: "Сначала выберите или создайте класс",
    enterNewStudentNamesPrompt: "Введите имена новых учеников через запятую:",
    noDataToExportAlert: "Нет данных для экспорта",
    groupGeneratorTitle: "Генератор групп",
    groupGeneratorPrompt: "Выберите, сколько учеников должно быть в каждой группе:",
    customSizeBtn: "", // Текст не нужен
    enterCustomGroupSizePrompt: "Введите желаемый размер группы (целое число):",
    invalidGroupSizeAlert: "Введите корректное число больше 0",
    noStudentsToGroupAlert: "Нет учеников в активном классе для группировки.",
    groupResultLabel: "Группа {index}: {names}",
    cancelGroupingBtn: "Не группировать",
    resultsTitleDoc: "Результаты",
    enterScorePrompt: "Введите балл для {studentName}",
    confirmResetScores: "Обнулить баллы для класса {className}? Все баллы станут 0.",
    studentExistsAlert: "Ученик \"{studentName}\" уже есть в классе {className}.",
  },
  kk: {
    appTitle: "Оқушыларды автоматты бағалау",
    manageClasses: "Сыныптарды басқару",
    classNamePlaceholder: "Сынып атауы (мысалы, 10А)",
    addClassBtn: "Сынып қосу",
    deleteClassBtn: "Сыныпты жою",
    extraTools: "Қосымша құралдар",
    randomStudentBtn: "Кездейсоқ",
    timerBtn: "Таймер",
    groupGeneratorBtn: "Топтар генераторы",
    whiteboardBtn: "Виртуалды тақта",
    stopwatch: "Секундомер",
    countdown: "Кері санақ",
    startBtn: "Бастау",
    stopBtn: "Тоқта",
    resetBtn: "Тастау",
    minutesLabel: "Минут",
    secondsLabel: "Секунд",
    setTimePrompt: "Нөлден үлкен уақытты орнатыңыз",
    timeUpAlert: "Уақыт бітті!",
    studentCards: "Оқушы карталары",
    addStudentBtn: "Оқушы қосу",
    enterScoreBtn: "Балл енгізу",
    scoreLabel: "Баллдар",
    groupActions: "Топтық әрекеттер",
    allPlusBtn: "Барлығына +1 балл",
    resetScoresBtn: "Барлық баллды жою",
    scoreChart: "Баллдар диаграммасы",
    chartLabel: "Баллдар",
    changeMaxScoreBtn: "Максималды баллды өзгерту",
    enterNewMaxScorePrompt: "Жаңа максималды баллды енгізіңіз:",
    invalidNumberAlert: "Дұрыс оң санды енгізіңіз",
    gradingScale: "Бағалау шкаласы",
    pointsSuffix: "балл",
    pointsSuffix2_4: "балл",
    resultsTable: "Нәтижелер кестесі",
    tableHeaderNum: "№",
    tableHeaderName: "Оқушының Аты-жөні",
    tableHeaderScore: "Баллдар",
    tableHeaderGrade: "Баға",
    exportDocBtn: "DOC экспорты",
    footerText: "© 2024 «A1TEACH» командасы. Барлық құқықтар қорғалған.",
    footerDeveloped: "«A1TEACH» командасы әзірлеген",
    noStudentsAlert: "Таңдау үшін оқушылар жоқ",
    selectedToast: "Таңдалды: {studentName}!",
    nextBtn: "Келесі",
    noActiveClassDelete: "Жою үшін белсенді сынып жоқ",
    confirmDeleteClass: "{className} сыныбын жоясыз ба?",
    enterClassNameAlert: "Сынып атауын енгізіңіз",
    classExistsAlert: "Бұл атаумен сынып бар",
    enterStudentNamesPrompt: "Оқушылардың аттарын үтір арқылы енгізіңіз (немесе бос қалдырыңыз):",
    selectOrCreateClassAlert: "Алдымен сыныпты таңдаңыз немесе жасаңыз",
    enterNewStudentNamesPrompt: "Жаңа оқушылардың аттарын үтір арқылы енгізіңіз:",
    noDataToExportAlert: "Экспорттау үшін деректер жоқ",
    groupGeneratorTitle: "Топтар генераторы",
    groupGeneratorPrompt: "Әр топта қанша оқушы болуы керектігін таңдаңыз:",
    customSizeBtn: "", // Текст не нужен
    enterCustomGroupSizePrompt: "Қалаған топ өлшемін енгізіңіз (бүтін сан):",
    invalidGroupSizeAlert: "0-ден үлкен дұрыс санды енгізіңіз",
    noStudentsToGroupAlert: "Топтастыру үшін белсенді сыныпта оқушылар жоқ.",
    groupResultLabel: "Топ {index}: {names}",
    cancelGroupingBtn: "Топтамау",
    resultsTitleDoc: "Нәтижелер",
    enterScorePrompt: "{studentName} үшін балл енгізіңіз",
    confirmResetScores: "{className} сыныбы үшін баллдарды нөлге теңестіресіз бе? Барлық баллдар 0 болады.",
    studentExistsAlert: "\"{studentName}\" оқушысы {className} сыныбында бар.",
  }
};

let currentLanguage = localStorage.getItem('language') || 'ru';
let classes = {};
let activeClass = null;
let maxScore = 100;
let chart = null;
let stopwatchInterval = null;
let stopwatchTime = 0;
let countdownInterval = null;
let countdownTime = 0;

// Переменные для DOM-элементов
let classNameInput, addClassBtn, deleteClassBtn, classButtonsContainer,
    randomStudentBtn, timerBtn, groupGeneratorBtn, whiteboardBtn,
    timerModal, modalClose, tabLinks, tabContents,
    stopwatchDisplay, stopwatchStartStopBtn, stopwatchResetBtn,
    countdownMinutesInput, countdownSecondsInput, countdownDisplay,
    countdownStartBtn, countdownResetBtn, studentsContainer, addStudentBtn,
    allPlusBtn, resetScoresBtn, changeMaxScoreBtn, ctx, resultsTbody,
    exportDocBtn, languageSwitcher, groupGeneratorModal, groupGeneratorClose,
    groupSizeButtons, groupGeneratorResult, cancelGroupingBtn;

// --- ФУНКЦИИ ---

function getTranslation(key, lang = currentLanguage, replacements = {}) {
    let text = translations[lang]?.[key] || translations['ru']?.[key] || `_${key}_`; // Fallback to RU then key
    for (const placeholder in replacements) {
        text = text.replace(`{${placeholder}}`, replacements[placeholder]);
    }
    return text;
}

function applyTranslations(lang) {
    if (!translations[lang]) lang = 'ru';
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.title = getTranslation('appTitle');

    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        const translation = getTranslation(key);

        if (element.tagName === 'TITLE') return;

        if (element.hasAttribute('data-translate-placeholder')) {
            element.placeholder = translation;
        } else if (element.tagName !== 'INPUT') {
            const span = element.querySelector('span:not([data-translate-key])'); // Исключаем span в шкале
             if (span && !element.closest('#grading-scale')) {
                span.textContent = (key === 'customSizeBtn' && translation === '') ? '' : translation;
            } else if (!element.closest('#grading-scale') || element.closest('footer')) { // Обновляем все, кроме шкалы (но включая подвал)
                 // Восстанавливаем иконку, если она была и текст не пустой
                 const icon = element.querySelector('i');
                 element.textContent = (key === 'customSizeBtn' && translation === '') ? '' : translation;
                 if (icon) {
                     element.prepend(icon);
                 }
            }
        }
    });

   document.querySelectorAll('#grading-scale p span[data-translate-key]').forEach((span, index) => {
        const key = span.getAttribute('data-translate-key');
        let pointsSuffix = '';
        if (key === 'pointsSuffix') {
            pointsSuffix = (lang === 'ru' && index < 6) ? translations.ru.pointsSuffix :
                           (lang === 'ru' && index >= 6) ? translations.ru.pointsSuffix2_4 :
                           getTranslation('pointsSuffix');
        } else if (key === 'pointsSuffix2_4') {
            pointsSuffix = (lang === 'ru') ? translations.ru.pointsSuffix2_4 : getTranslation('pointsSuffix2_4');
        }
        span.textContent = pointsSuffix;
    });

   if (stopwatchStartStopBtn) {
       stopwatchStartStopBtn.textContent = stopwatchInterval ? getTranslation('stopBtn') : getTranslation('startBtn');
   }

   renderChart(); renderTable(); renderClasses(); renderStudents();

   document.querySelectorAll('#language-switcher button').forEach(btn => {
       btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
   });
}

function saveData() {
    try { localStorage.setItem('studentAppData', JSON.stringify({ classes, activeClass, maxScore })); }
    catch (e) { console.error("Save Error:", e); alert("Не удалось сохранить данные."); }
}

function loadData() {
    const savedData = localStorage.getItem('studentAppData');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            classes = data.classes || {};
            activeClass = data.activeClass || null;
            maxScore = data.maxScore || 100;
            if (activeClass && !classes[activeClass]) activeClass = Object.keys(classes)[0] || null;
        } catch (e) {
            console.error("Load Error:", e); classes = {}; activeClass = null; maxScore = 100;
            alert("Не удалось загрузить данные.");
        }
    } else { classes = {}; activeClass = null; maxScore = 100; }
}

function showSelectedToast(studentName) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    const toast = document.createElement('div'); toast.className = 'toast';
    const message = getTranslation('selectedToast', currentLanguage, { studentName });
    toast.innerHTML = `${message} <button class="toast-close">${getTranslation('nextBtn')}</button>`;
    toastContainer.appendChild(toast);
    function removeToast() { toast.classList.add('slide-out'); toast.addEventListener('animationend', () => { if (toast.parentNode) toast.remove(); }, { once: true }); }
    const closeButton = toast.querySelector('.toast-close');
    if (closeButton) closeButton.addEventListener('click', removeToast);
    setTimeout(removeToast, 4000);
}

function shuffleArray(array) { /* Fisher-Yates shuffle */ for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[array[i], array[j]] = [array[j], array[i]]; } return array; }

function closeTimerModal() { if (!timerModal) return; timerModal.style.display = 'none'; clearInterval(stopwatchInterval); clearInterval(countdownInterval); stopwatchInterval = null; countdownInterval = null; if (stopwatchStartStopBtn) stopwatchStartStopBtn.textContent = getTranslation('startBtn'); stopwatchTime = 0; countdownTime = 0; updateStopwatchDisplay(); updateCountdownDisplay(0); if (tabLinks && tabContents) { tabLinks.forEach(l => l.classList.remove('active')); tabContents.forEach(c => c.classList.remove('active')); const swLink = document.querySelector('.tablink[data-tab="stopwatch-tab"]'); const swCont = document.getElementById('stopwatch-tab'); if (swLink) swLink.classList.add('active'); if (swCont) swCont.classList.add('active'); } if (countdownMinutesInput) countdownMinutesInput.value = "0"; if (countdownSecondsInput) countdownSecondsInput.value = "0"; }
function updateStopwatchDisplay() { if (!stopwatchDisplay) return; let m = String(Math.floor(stopwatchTime / 60)).padStart(2, '0'); let s = String(stopwatchTime % 60).padStart(2, '0'); stopwatchDisplay.textContent = `${m}:${s}`; }
function updateCountdownDisplay(time) { if (!countdownDisplay) return; let m = String(Math.floor(time / 60)).padStart(2, '0'); let s = String(time % 60).padStart(2, '0'); countdownDisplay.textContent = `${m}:${s}`; }
function updateStudentData() { renderStudents(); renderChart(); renderTable(); saveData(); }
function updateAllClassData() { renderStudents(); renderChart(); renderTable(); saveData(); }
function calculateGrade(score) { if (maxScore <= 0) return '-'; const numScore = parseFloat(score); if (isNaN(numScore)) return '-'; let p = (numScore / maxScore) * 100; if (p >= 90) return 10; if (p >= 80) return 9; if (p >= 70) return 8; if (p >= 60) return 7; if (p >= 50) return 6; if (p >= 40) return 5; if (p >= 30) return 4; if (p < 0) return '-'; return 3; }

function renderChart() {
    if (!chart || !ctx) return;
    if (chart.data.datasets?.[0]) chart.data.datasets[0].label = getTranslation('chartLabel');
    const currentClassExists = activeClass && classes[activeClass];
    const labels = currentClassExists ? classes[activeClass].map(s => s.name) : [];
    const data = currentClassExists ? classes[activeClass].map(s => s.score) : [];
    chart.data.labels = labels;
    if (chart.data.datasets?.[0]) chart.data.datasets[0].data = data;
    if (chart.options.scales.y.max !== maxScore) chart.options.scales.y.max = maxScore;
    chart.update();
}

function renderTable() {
    if (!resultsTbody) return; resultsTbody.innerHTML = "";
    if (!activeClass || !classes[activeClass]) return;
    classes[activeClass].forEach((s, i) => { const tr = document.createElement('tr'); tr.innerHTML = `<td>${i + 1}</td><td>${s.name}</td><td>${s.score}</td><td>${calculateGrade(s.score)}</td>`; resultsTbody.appendChild(tr); });
}

function renderClasses() {
    if (!classButtonsContainer) return; classButtonsContainer.innerHTML = "";
    Object.keys(classes).sort().forEach(cls => { const btn = document.createElement('button'); btn.textContent = cls; if (cls === activeClass) btn.classList.add('active'); classButtonsContainer.appendChild(btn); });
}

function renderStudents() {
    if (!studentsContainer) return; studentsContainer.innerHTML = "";
    if (!activeClass || !classes[activeClass]) return;
    classes[activeClass].forEach((student) => {
        const card = document.createElement('div'); card.className = "student-card"; card.setAttribute('data-student-name', student.name);
        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>${getTranslation('scoreLabel')}: ${student.score}</p>
            <div class="card-buttons">
                <button class="plus-btn">+1</button>
                <button class="minus-btn">-1</button>
                <button class="set-score-btn">${getTranslation('enterScoreBtn')}</button>
            </div>
        `;
        // Добавляем обработчики уже после создания HTML через innerHTML
        card.querySelector('.plus-btn').addEventListener('click', () => { student.score += 1; updateStudentData(); });
        card.querySelector('.minus-btn').addEventListener('click', () => { student.score = Math.max(0, student.score - 1); updateStudentData(); });
        card.querySelector('.set-score-btn').addEventListener('click', () => {
            const promptText = getTranslation('enterScorePrompt', currentLanguage, { studentName: student.name });
            let newScoreStr = prompt(promptText, student.score);
            if (newScoreStr === null) return;
            let newScore = parseFloat(newScoreStr);
            if (!isNaN(newScore) && newScore >= 0) { student.score = newScore; updateStudentData(); }
            else if (newScoreStr.trim() !== "") { alert(getTranslation('invalidNumberAlert')); }
        });
        studentsContainer.appendChild(card);
    });
}

function exportToDoc() {
    if (!activeClass || !classes[activeClass] || classes[activeClass].length === 0) { alert(getTranslation('noDataToExportAlert')); return; }
    const tableHeaders = document.querySelectorAll('#results-table th');
    if (!tableHeaders?.length) { console.error("Export Error: Headers not found."); return; }
    let headerHtml = '<tr>' + Array.from(tableHeaders).map(th => `<th>${th.textContent}</th>`).join('') + '</tr>';
    let rowsHtml = classes[activeClass].map((s, i) => `<tr><td>${i + 1}</td><td>${s.name}</td><td>${s.score}</td><td>${calculateGrade(s.score)}</td></tr>`).join('');
    const title = getTranslation('resultsTitleDoc');
    const tableTitle = `${getTranslation('resultsTable')} (${activeClass})`;
    const content = `<!DOCTYPE html><html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='UTF-8'><title>${title}</title><style>body{font-family:Arial,sans-serif;}table{border-collapse:collapse;width:100%;}th,td{border:1px solid black;padding:8px;text-align:left;}th{background-color:#f2f2f2;font-weight:bold;}</style></head><body><h2>${tableTitle}</h2><table><thead>${headerHtml}</thead><tbody>${rowsHtml}</tbody></table></body></html>`;
    const blob = new Blob([content], { type: 'application/msword' });
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const filename = `results_${activeClass}_${dateStr}.doc`;
    try { const link = document.createElement("a"); const url = URL.createObjectURL(blob); link.href = url; link.download = filename; document.body.appendChild(link); link.click(); setTimeout(() => { document.body.removeChild(link); window.URL.revokeObjectURL(url); }, 100); }
    catch (e) { console.error("Export failed:", e); alert("Ошибка экспорта файла."); }
}

// --- DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function() {
    loadData(); // Загружаем данные

    // Находим все элементы
    classNameInput = document.getElementById('class-name-input');
    addClassBtn = document.getElementById('add-class-btn');
    deleteClassBtn = document.getElementById('delete-class-btn');
    classButtonsContainer = document.getElementById('class-buttons-container');
    randomStudentBtn = document.getElementById('random-student-btn');
    timerBtn = document.getElementById('timer-btn');
    groupGeneratorBtn = document.getElementById('group-generator-btn');
    whiteboardBtn = document.getElementById('whiteboard-btn');
    timerModal = document.getElementById('timer-modal');
    modalClose = timerModal?.querySelector('.modal-content .close');
    tabLinks = document.querySelectorAll('.tablink');
    tabContents = document.querySelectorAll('.tab-content');
    stopwatchDisplay = document.getElementById('stopwatch-display');
    stopwatchStartStopBtn = document.getElementById('stopwatch-start-stop-btn');
    stopwatchResetBtn = document.getElementById('stopwatch-reset-btn');
    countdownMinutesInput = document.getElementById('countdown-minutes');
    countdownSecondsInput = document.getElementById('countdown-seconds');
    countdownDisplay = document.getElementById('countdown-display');
    countdownStartBtn = document.getElementById('countdown-start-btn');
    countdownResetBtn = document.getElementById('countdown-reset-btn');
    studentsContainer = document.getElementById('students-container');
    addStudentBtn = document.getElementById('add-student-btn');
    allPlusBtn = document.getElementById('all-plus-btn');
    resetScoresBtn = document.getElementById('reset-scores-btn');
    changeMaxScoreBtn = document.getElementById('change-max-score-btn');
    ctx = document.getElementById('chartCanvas')?.getContext('2d');
    resultsTbody = document.getElementById('results-tbody');
    exportDocBtn = document.getElementById('export-doc-btn');
    languageSwitcher = document.getElementById('language-switcher');
    groupGeneratorModal = document.getElementById('group-generator-modal');
    groupGeneratorClose = groupGeneratorModal?.querySelector('.group-generator-close');
    groupSizeButtons = document.querySelectorAll('.group-size-btn');
    groupGeneratorResult = document.getElementById('group-generator-result');
    cancelGroupingBtn = document.getElementById('cancel-grouping-btn');

    // Проверка критических элементов
    if (!ctx || !timerModal || !groupGeneratorModal || !languageSwitcher || !classButtonsContainer || !studentsContainer || !resultsTbody) {
        console.error("ОШИБКА: Не найдены ключевые элементы DOM!");
        alert("Критическая ошибка: не удалось загрузить интерфейс приложения. Проверьте HTML-код.");
        return; // Прерываем инициализацию
    }

    // Инициализация Chart.js
    chart = new Chart(ctx, {
        type: 'bar',
        data: { labels: [], datasets: [{ label: '...', data: [], backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 1, borderRadius: 5 }] },
        options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: maxScore, grid: { color: 'rgba(0, 0, 0, 0.08)' } }, x: { grid: { display: false } } }, plugins: { legend: { labels: { generateLabels: (chartInst) => { const ds = chartInst.data.datasets[0]; if (ds) ds.label = getTranslation('chartLabel'); return Chart.defaults.plugins.legend.labels.generateLabels.call(this, chartInst); } } } } }
    });

    // Применяем переводы и рендерим UI
    applyTranslations(currentLanguage);

    // --- Привязка обработчиков --- (проверяем наличие элемента перед привязкой)
    if (languageSwitcher) languageSwitcher.addEventListener('click', (e) => { if (e.target.tagName === 'BUTTON') { const lang = e.target.getAttribute('data-lang'); if (lang && translations[lang]) applyTranslations(lang); } });
    if (changeMaxScoreBtn) changeMaxScoreBtn.addEventListener('click', () => { let nMax = prompt(getTranslation('enterNewMaxScorePrompt'), maxScore); if (nMax === null) return; nMax = parseFloat(nMax); if (!isNaN(nMax) && nMax > 0) { maxScore = nMax; renderChart(); renderTable(); saveData(); } else { alert(getTranslation('invalidNumberAlert')); } });
    if (addClassBtn) addClassBtn.addEventListener('click', () => { let cName = classNameInput.value.trim(); if (!cName) { alert(getTranslation('enterClassNameAlert')); return; } if (classes.hasOwnProperty(cName)) { alert(getTranslation('classExistsAlert')); return; } let sNames = prompt(getTranslation('enterStudentNamesPrompt')); let studs = []; if (sNames !== null) { sNames.split(',').forEach(n => { let t = n.trim(); if (t) studs.push({ name: t, score: 0 }); }); } classes[cName] = studs; activeClass = cName; classNameInput.value = ""; renderClasses(); renderStudents(); renderChart(); renderTable(); saveData(); });
    if (deleteClassBtn) deleteClassBtn.addEventListener('click', () => { if (!activeClass) { alert(getTranslation('noActiveClassDelete')); return; } if (confirm(getTranslation('confirmDeleteClass', currentLanguage, { className: activeClass }))) { delete classes[activeClass]; activeClass = Object.keys(classes)[0] || null; renderClasses(); renderStudents(); renderChart(); renderTable(); saveData(); } });
    if (classButtonsContainer) classButtonsContainer.addEventListener('click', (e) => { if (e.target.tagName === 'BUTTON') { const newActCls = e.target.textContent; if (classes[newActCls]) { activeClass = newActCls; renderClasses(); renderStudents(); renderChart(); renderTable(); saveData(); } } });
    if (randomStudentBtn) randomStudentBtn.addEventListener('click', () => { if (!activeClass || !classes[activeClass]?.length) { alert(getTranslation('noStudentsAlert')); return; } let studs = classes[activeClass]; let rndIdx = Math.floor(Math.random() * studs.length); let selStud = studs[rndIdx]; showSelectedToast(selStud.name); document.querySelectorAll('.student-card.highlight').forEach(c => c.classList.remove('highlight')); const selCard = studentsContainer?.querySelector(`.student-card[data-student-name="${selStud.name}"]`); if (selCard) selCard.classList.add('highlight'); });
    if (timerBtn) timerBtn.addEventListener('click', () => { timerModal.style.display = 'block'; });
    if (whiteboardBtn) whiteboardBtn.addEventListener('click', () => { window.open('https://webwhiteboard.com/', '_blank', 'noopener,noreferrer'); });
    if (modalClose) modalClose.addEventListener('click', closeTimerModal);
    window.addEventListener('click', (e) => { if (e.target === timerModal) closeTimerModal(); if (e.target === groupGeneratorModal) groupGeneratorModal.style.display = 'none'; });
    if (tabLinks) tabLinks.forEach(link => { link.addEventListener('click', function() { const tId = this.getAttribute('data-tab'); if (tId) { tabLinks.forEach(b => b.classList.remove('active')); tabContents.forEach(c => c.classList.remove('active')); this.classList.add('active'); const actCont = document.getElementById(tId); if (actCont) actCont.classList.add('active'); } }); });
    if (stopwatchStartStopBtn) stopwatchStartStopBtn.addEventListener('click', function() { if (stopwatchInterval) { clearInterval(stopwatchInterval); stopwatchInterval = null; this.textContent = getTranslation('startBtn'); } else { stopwatchInterval = setInterval(() => { stopwatchTime++; updateStopwatchDisplay(); }, 1000); this.textContent = getTranslation('stopBtn'); } });
    if (stopwatchResetBtn) stopwatchResetBtn.addEventListener('click', () => { clearInterval(stopwatchInterval); stopwatchInterval = null; stopwatchTime = 0; updateStopwatchDisplay(); if(stopwatchStartStopBtn) stopwatchStartStopBtn.textContent = getTranslation('startBtn'); });
    if (countdownStartBtn) countdownStartBtn.addEventListener('click', () => { if (countdownInterval) return; let mins = parseInt(countdownMinutesInput?.value || '0'); let secs = parseInt(countdownSecondsInput?.value || '0'); countdownTime = (mins * 60) + secs; if (isNaN(countdownTime) || countdownTime <= 0) { alert(getTranslation('setTimePrompt')); return; } updateCountdownDisplay(countdownTime); countdownInterval = setInterval(() => { countdownTime--; updateCountdownDisplay(countdownTime); if (countdownTime <= 0) { clearInterval(countdownInterval); countdownInterval = null; alert(getTranslation('timeUpAlert')); } }, 1000); });
    if (countdownResetBtn) countdownResetBtn.addEventListener('click', () => { clearInterval(countdownInterval); countdownInterval = null; countdownTime = 0; updateCountdownDisplay(0); if(countdownMinutesInput) countdownMinutesInput.value = "0"; if(countdownSecondsInput) countdownSecondsInput.value = "0"; });
    if (groupGeneratorBtn) groupGeneratorBtn.addEventListener('click', () => { if (!activeClass || !classes[activeClass]?.length) { alert(getTranslation('noStudentsToGroupAlert')); return; } if(groupGeneratorResult) groupGeneratorResult.innerHTML = ""; groupGeneratorModal.style.display = 'block'; });
    if (groupGeneratorClose) groupGeneratorClose.addEventListener('click', () => { if(groupGeneratorModal) groupGeneratorModal.style.display = 'none'; });
    if (cancelGroupingBtn) cancelGroupingBtn.addEventListener('click', () => { if(groupGeneratorModal) groupGeneratorModal.style.display = 'none'; });
    if (groupSizeButtons) groupSizeButtons.forEach(btn => { btn.addEventListener('click', function() { let szAttr = this.getAttribute('data-size'); let grpSize; if (szAttr === "custom") { let custSzStr = prompt(getTranslation('enterCustomGroupSizePrompt')); if (custSzStr === null) return; let custSz = parseInt(custSzStr); if (isNaN(custSz) || custSz <= 0) { alert(getTranslation('invalidGroupSizeAlert')); return; } grpSize = custSz; } else { grpSize = parseInt(szAttr); if (isNaN(grpSize) || grpSize <= 0) return; } if (!activeClass || !classes[activeClass]?.length) { alert(getTranslation('noStudentsToGroupAlert')); return; } let studsToGrp = shuffleArray([...classes[activeClass]]); let grps = []; for (let i = 0; i < studsToGrp.length; i += grpSize) grps.push(studsToGrp.slice(i, i + grpSize)); let resHTML = grps.map((grp, idx) => `<p>${getTranslation('groupResultLabel', currentLanguage, { index: idx + 1, names: grp.map(s => s.name).join(', ') })}</p>`).join(''); if(groupGeneratorResult) groupGeneratorResult.innerHTML = resHTML; }); });
    if (addStudentBtn) addStudentBtn.addEventListener('click', () => { if (!activeClass) { alert(getTranslation('selectOrCreateClassAlert')); return; } let nms = prompt(getTranslation('enterNewStudentNamesPrompt')); let added = false; if (nms !== null) { nms.split(',').forEach(n => { let tr = n.trim(); if (tr) { if (!classes[activeClass].some(s => s.name.toLowerCase() === tr.toLowerCase())) { classes[activeClass].push({ name: tr, score: 0 }); added = true; } else { alert(getTranslation('studentExistsAlert', currentLanguage, { studentName: tr, className: activeClass })); } } }); if (added) updateStudentData(); } });
    if (allPlusBtn) allPlusBtn.addEventListener('click', () => { if (!activeClass || !classes[activeClass]) { alert(getTranslation('selectOrCreateClassAlert')); return; } classes[activeClass].forEach(s => { s.score += 1; }); updateAllClassData(); });
    if (resetScoresBtn) resetScoresBtn.addEventListener('click', () => { if (!activeClass || !classes[activeClass]) { alert(getTranslation('selectOrCreateClassAlert')); return; } if (confirm(getTranslation('confirmResetScores', currentLanguage, { className: activeClass }))) { classes[activeClass].forEach(s => { s.score = 0; }); updateAllClassData(); } });
    if (exportDocBtn) exportDocBtn.addEventListener('click', exportToDoc);

    window.addEventListener('beforeunload', saveData); // Сохраняем перед закрытием

}); // Конец DOMContentLoaded