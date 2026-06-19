const monthYear = document.getElementById("month-year");
const calendarBody = document.getElementById("calendar-body");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentDate = new Date(2026, 4, 15);

function rendercalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = `${year}년 ${month + 1}월`;

    calendarBody.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    
    const lastDate = new Date(year, month + 1, 0).getDate();

    let day = 1;

    for (let week = 0; week < 6; week++) {
        const row = document.createElement("tr");

        for (let date = 0; date < 7; date++) {
            const cell = document.createElement("td");

            if (week === 0 && date < firstDay) {
                cell.textContent = "";
            } else if (day > lastDate) {
                cell.textContent = "";
            } else {
                cell.textContent = day;
                day++;
            }

            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

rendercalendar();

prevBtn.addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() -1);
    rendercalendar();
});

nextBtn.addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    rendercalendar();
})