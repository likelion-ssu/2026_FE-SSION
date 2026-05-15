const monthYear = document.getElementById("month-year");
const calenderBody = document.getElementById("calender-body");

let currentDate = new Date(2026, 5, 15);

function renderCalender() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = `${year}년 ${month + 1}월`;

    calenderBody.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    
    const lastDate = new Date(year, month + 1, 0).getDate();

    let row = document.createElement("tr");

    for (let i = 0; i < firstDay; i++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
    }

    for (let day = 1; day <= lastDate; day++) {
        let cell = document.createElement("td");
        cell.textContent = day;

        row.appendChild(cell);

        if ((firstDay + day) % 7 == 0) {
            calenderBody.appendChild(row);
            row = document.createElement("tr");
        }
    }

    if (row.children.length > 0) {
        calenderBody.appendChild(row);
    }
}

renderCalender();