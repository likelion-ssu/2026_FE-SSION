let now = new Date();

let title = document.getElementById("title");
let date = document.getElementById("date");

function drawCalendar(){
    date.innerHTML = "";

    let year = now.getFullYear();
    let month = now.getMonth();

    title.innerHTML = year + "년 " + (month + 1) + "월";

    // 이번 달 첫째날
    let firstDay = new Date(year, month, 1).getDay();

    // 이번 달 마지막 날짜
    let lastDate = new Date(year, month + 1, 0).getDate();

    // 빈칸 만들기
    for(let i = 0; i < firstDay; i++){
        let empty = document.createElement("div");
        date.appendChild(empty);
    }

    // 날짜 만들기
    for(let i = 1; i <= lastDate; i++){
        let day = document.createElement("div");
        day.innerHTML = i;
        
        let week = new Date(year, month, i).getDay();

        date.appendChild(day);
    }

    // 뒤 빈칸 채우기
    let total = firstDay + lastDate;
    let remain = 42 - total;

    for(let i = 0; i < remain; i++){
        let empty = document.createElement("div");
        date.appendChild(empty);
    }
}

drawCalendar();