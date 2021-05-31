var calendarElement = document.querySelectorAll('div.main-calendar-table-item');
var but = document.querySelector('[data-modal]');

but.addEventListener('click', event => {
    let newEl = document.createElement("div");
    let tN = document.createTextNode(calendarElement[15].textContent);

    newEl.className = 'main-calendar-table-ch';
    calendarElement[15].innerHTML = '';
    calendarElement[15].appendChild(newEl);
    calendarElement[15].appendChild(tN);

    let date = new Date().getDate();
    date--;

    for (let trigger = 0; trigger < 42; trigger++) {
        tN = document.createTextNode(calendarElement[trigger].textContent);
        if (date.toString() === tN.data) {
            newEl = document.createElement("div");
            newEl.className = 'main-calendar-table-ch-today';
            calendarElement[trigger].innerHTML = '';
            calendarElement[trigger].appendChild(newEl);
            calendarElement[trigger].appendChild(tN);
        }
    }
});

