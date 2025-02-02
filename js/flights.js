let FlightsChoose = document.getElementById("Choose");
let FlightsPersonSpan = document.getElementById("FlightsPersonsSpan");
let FlightsPersons = document.getElementById("FlightsPersons");
let FlightsRound = document.getElementById("RoundTrip");
let FlightsOne = document.getElementById("OneWay");
let FlightsRoundDuration = document.getElementById("RoundTripDuration");
let FlightsOneDuration = document.querySelector(
  ".Flights .FlightsFind .FlightsDuration .FlightsOneWay"
);
let FlightsClosePersons = document.getElementById("Close");
let FlightsEco = document.getElementById("Eco");
let FlightsEcoState = document.getElementById("EcoState");
let FlightsCount = document.getElementById("PersonsCount");
let FlightsCountClass = document.getElementsByClassName("Count");
let FlightsMinus = document.getElementsByClassName("fa-circle-minus");
let FlightsPlus = document.getElementsByClassName("fa-circle-plus");
let FlightsOptions = document.getElementById("Options");
let caretDown = document.getElementById("fa-caret-down");
let StartRound = document.getElementById("FlightsStart");
let EndRound = document.getElementById("FlightsEnd");
let StartOne = document.getElementById("FlightsStartOne");
const calendarHeaders = document.getElementsByClassName("calendar-header");
const calendarGrids = document.getElementsByClassName("calendar-grid");
const calendars = document.getElementsByClassName("calendar");
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDate = today.getDate();

const member3 = document.querySelector(".Flights .FlightsReviews .FlightsBoxes .FlightsBox:nth-child(3) ");
const member4 = document.querySelector(".Flights .FlightsReviews .FlightsBoxes .FlightsBox:nth-child(4) ");
const seeMore = document.querySelector(".Flights .FlightsReviews .FlightsBoxes button");




seeMore.addEventListener("click",function(){
  member3.style.display="block";
  member4.style.display="block";
})

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

FlightsClosePersons.addEventListener("click", () => {
  hideDropdown();
});

FlightsPersonSpan.addEventListener("click", () => {
  let IsHidden = FlightsChoose.classList.contains("hidden");
  if (IsHidden) showDropdown();
  else hideDropdown();
});

caretDown.addEventListener("click", () => {
  let IsHidden = FlightsChoose.classList.contains("hidden");
  if (IsHidden) showDropdown();
  else hideDropdown();
});
for (let i = 0; i < FlightsPlus.length; i++) {
  FlightsPlus[i].addEventListener("click", () => {
    FlightsCountClass[i].textContent =
      parseInt(FlightsCountClass[i].textContent) + 1;
    Count();
    showMinus();
  });
  FlightsMinus[i].addEventListener("click", () => {
    if (FlightsCountClass[i].textContent > 1 && i == 0)
      FlightsCountClass[i].textContent =
        parseInt(FlightsCountClass[i].textContent) - 1;
    else if (FlightsCountClass[i].textContent > 0 && i > 0)
      FlightsCountClass[i].textContent =
        parseInt(FlightsCountClass[i].textContent) - 1;
    Count();
    hideMinus();
  });
}

function hideDropdown() {
  FlightsChoose.classList.add("hidden");
  FlightsPersons.classList.remove("Active");
}
function showDropdown() {
  FlightsChoose.classList.remove("hidden");
  FlightsPersons.classList.add("Active");
  hideMinus();
}
function Count() {
  let Sum = 0;
  for (let x of FlightsCountClass) {
    Sum += parseInt(x.textContent);
  }
  FlightsCount.textContent = Sum;
}
function hideMinus() {
  if (parseInt(FlightsCountClass[0].textContent) === 1)
    FlightsMinus[0].classList.add("hidden");
  for (let i = 1; i < FlightsCountClass.length; i++) {
    if (parseInt(FlightsCountClass[i].textContent) === 0)
      FlightsMinus[i].classList.add("hidden");
  }
}
function showMinus() {
  if (parseInt(FlightsCountClass[0].textContent) > 1)
    FlightsMinus[0].classList.remove("hidden");
  for (let j = 1; j < FlightsCountClass.length; j++) {
    if (parseInt(FlightsCountClass[j].textContent) > 0)
      FlightsMinus[j].classList.remove("hidden");
  }
}
FlightsEco.addEventListener("click", () => {
  FlightsEcoState.textContent = FlightsEco.value;
});
FlightsRound.addEventListener("click", () => {
  if (!FlightsRound.classList.contains("Active")) {
    FlightsRound.classList.add("Active");
    FlightsRoundDuration.style.display = "block";
    FlightsOne.classList.remove("Active");
    FlightsOneDuration.style.display = "none";
    FlightsOptions.classList.remove("hidden");
  }
});
FlightsOne.addEventListener("click", () => {
  if (!FlightsOne.classList.contains("Active")) {
    FlightsOne.classList.add("Active");
    FlightsOneDuration.style.display = "block";
    FlightsRound.classList.remove("Active");
    FlightsRoundDuration.style.display = "none";
    FlightsOptions.classList.remove("hidden");
  }
});

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
StartRound.addEventListener("click", () => {
  let StartIsHidden = calendars[0].classList.contains("hidden");
  let EndIsHidden = calendars[1].classList.contains("hidden");
  if (StartIsHidden) {
    calendars[0].classList.remove("hidden");
    if (!EndIsHidden) calendars[1].classList.add("hidden");
  } else {
    calendars[0].classList.add("hidden");
  }
});
EndRound.addEventListener("click", () => {
  let EndIsHidden = calendars[1].classList.contains("hidden");
  let StartIsHidden = calendars[0].classList.contains("hidden");
  if (EndIsHidden) {
    calendars[1].classList.remove("hidden");
    if (!StartIsHidden) calendars[0].classList.add("hidden");
  } else {
    calendars[1].classList.add("hidden");
  }
});
StartOne.addEventListener("click", () => {
  let IsHidden = calendars[2].classList.contains("hidden");
  if (IsHidden) {
    calendars[2].classList.remove("hidden");
  } else {
    calendars[2].classList.add("hidden");
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

document.addEventListener("DOMContentLoaded", () => {
  StartRound.textContent = `${monthNames[currentMonth].slice(
    0,
    3
  )} ${currentDate}`;
  StartOne.textContent = `${monthNames[currentMonth].slice(
    0,
    3
  )} ${currentDate}`;
  EndRound.textContent = `${monthNames[currentMonth].slice(0, 3)} ${
    currentDate + 1
  }`;
});
