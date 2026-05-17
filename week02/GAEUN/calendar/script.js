const monthTitle = document.querySelector("#month");
const calendar = document.querySelector("#calendar");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentDate = new Date();

function renderCalendar() {
    calendar.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthTitle.innerHTML = `${year}년 ${month + 1}월`;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyDate = document.createElement("div");
        emptyDate.classList.add("empty");
        calendar.appendChild(emptyDate);
    }

    for (let date = 1; date <= lastDate; date++) {
        const dateBox = document.createElement("div");
        dateBox.classList.add("day");
        dateBox.innerHTML = date;
        calendar.appendChild(dateBox);
    }
}

prevButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
