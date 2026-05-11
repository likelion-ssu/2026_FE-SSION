let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let firstday = new Date(year, month, 1).getDay();

document.getElementById("year").textContent = year;
document.getElementById("month").textContent = month + 1 + "월";