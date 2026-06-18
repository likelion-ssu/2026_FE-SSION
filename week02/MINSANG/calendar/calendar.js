const yearSpan = document.querySelector('.year');
const monthSpan = document.querySelector('.month');
const datesContainer = document.querySelector('.dates');
const beforeBtn = document.querySelector('.before-btn');
const afterBtn = document.querySelector('.after-btn');

let date = new Date();

function renderCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();

    yearSpan.innerText = `${year}년`;
    monthSpan.innerText = `${month + 1}월`;

    const startDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let html = '';

    for (let i = 0; i < startDay; i++) {
        html += `<div class="date empty"></div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        html += `<div class="date"><span>${i}</span></div>`;
    }

    datesContainer.innerHTML = html;
}

beforeBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

afterBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();