let Start = document.getElementById("start");
let End = document.getElementById("end");
const calendarHeaders = document.getElementsByClassName("calendar-header");
const calendarGrids = document.getElementsByClassName("calendar-grid");
const calendars = document.getElementsByClassName("calendar");
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDate = today.getDate();
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let i = 0; i < calendarHeaders.length; i++) {
  const calendarHeader = calendarHeaders[i];
  const calendarGrid = calendarGrids[i];
  const calendar = calendars[i];
  calendarHeader.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  calendarGrid.innerHTML = "";

  daysOfWeek.forEach((day) => {
    const dayHeader = document.createElement("div");
    dayHeader.textContent = day;
    dayHeader.classList.add("day", "day-header");
    calendarGrid.appendChild(dayHeader);
  });

  for (let j = 0; j < firstDayOfMonth; j++) {
    const emptySlot = document.createElement("div");
    calendarGrid.appendChild(emptySlot);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.classList.add("day");

    if (day < currentDate) {
      dayElement.classList.add("disabled");
    } else {
      dayElement.addEventListener("click", () => {
        const selectedDay = calendarGrid.querySelector(".day.selected");
        if (selectedDay) {
          selectedDay.classList.remove("selected");
        }
        dayElement.classList.add("selected");
      });
    }

    calendarGrid.appendChild(dayElement);
  }
  const closeButton = document.createElement("p");
  closeButton.classList.add("close");
  closeButton.textContent = "Close";
  closeButton.style.color = "#354252";
  closeButton.style.cursor = "pointer";
  closeButton.style.margin = "10px";
  calendar.appendChild(document.createElement("hr"));
  calendar.appendChild(closeButton);
}

for (let i = 0; i < calendars.length; i++) {
  document.getElementsByClassName("close")[i].addEventListener("click", () => {
    calendars[i].classList.add("hidden");
  });
}

Start.addEventListener("click", () => {
  let StartIsHidden = calendars[0].classList.contains("hidden");
  let EndIsHidden = calendars[1].classList.contains("hidden");
  if (StartIsHidden) {
    calendars[0].classList.remove("hidden");
    if (!EndIsHidden) calendars[1].classList.add("hidden");
  } else {
    calendars[0].classList.add("hidden");
  }
});
End.addEventListener("click", () => {
  let EndIsHidden = calendars[1].classList.contains("hidden");
  let StartIsHidden = calendars[0].classList.contains("hidden");
  if (EndIsHidden) {
    calendars[1].classList.remove("hidden");
    if (!StartIsHidden) calendars[0].classList.add("hidden");
  } else {
    calendars[1].classList.add("hidden");
  }
});

for (let i = 0; i < calendars.length; i++) {
  calendars[i].addEventListener("click", (event) => {
    const clickedDay = event.target.closest(".day");
    if (clickedDay) {
      const dayHeader = calendars[i].previousElementSibling;
      if (dayHeader) {
        dayHeader.textContent = `${monthNames[currentMonth].slice(0, 3)} ${
          clickedDay.textContent
        }`;
      }
    }
  });
}
