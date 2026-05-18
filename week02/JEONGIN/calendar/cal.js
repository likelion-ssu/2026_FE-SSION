let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

cal();


function cal () {
    let arr = [];
    let i;

    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let lastDay = new Date(currentYear, currentMonth+1, 0).getDate();

    document.getElementById("year").textContent = currentYear;
    document.getElementById("month").textContent = currentMonth + 1 + "월";

    for (i = 0; i < firstDay; i++) {
        arr[i] = "";
    }

    for (let j = 1; j <= lastDay; j++) {
        arr[i] = j;
        i++;
    }

    for (let k = 0; k < 42; k++) {
        document.getElementById(k).textContent = arr[k];
    }
}

prevBtn.addEventListener("click", () => {
    currentMonth--;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    cal();
});

nextBtn.addEventListener("click", () => {
    currentMonth++;

    if (currentMonth > 12) {
        currentMonth = 0;
        currentYear++;
    }

    cal();
});