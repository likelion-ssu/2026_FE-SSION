let date = new Date();

function renderCalendar() {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth(); 
  
  document.getElementById('current-month').innerText = `${currentYear}년 ${currentMonth + 1}월`;

  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendarDays = document.getElementById('calendar-days');
  calendarDays.innerHTML = '';

  for (let i = 0; i < firstDayIndex; i++) {
    const emptyDiv = document.createElement('div');
    calendarDays.appendChild(emptyDiv);
  }

  const today = new Date();
  for (let day = 1; day <= totalDays; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.innerText = day;
    

    if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      dayDiv.classList.add('today');
    }
    
    calendarDays.appendChild(dayDiv);
  }
}

function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

renderCalendar();