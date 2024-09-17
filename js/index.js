const diaSemana = document.getElementById("diaSemana");
const diaMesAno = document.getElementById("diaMesAno");
const horario = document.getElementById("horario");
const dialog = document.getElementById("dialog");
const btnBaterPonto = document.getElementById("btnBaterPonto");
const btnRegistrar = document.getElementById("btnRegistrar");
const btnFechar = document.getElementById("btnFechar");
const dialogData = document.getElementById("dialog-data");
const dialogHora = document.getElementById("dialog-hora");

// Initialize the date and time
diaMesAno.textContent = getCurrentDate();
horario.textContent = getCurrentTime();
diaSemana.textContent = getCurrentWeekDay();

btnBaterPonto.addEventListener("click", () => {
    dialog.showModal();
    dialogData.textContent = "Data: " + getCurrentDate();
    dialogHora.textContent = "Hora: " + getCurrentTime();
});

btnRegistrar.addEventListener("click", () => {
    Register();
    dialog.close();
});

btnFechar.addEventListener("click", () => {
    dialog.close();
});

function Register() {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let ponto = {
            "data": getCurrentDate(),
            "hora": getCurrentTime(),
            "latitude": latitude,
            "longitude": longitude,
            "id": 1,
            "tipo": document.getElementById("tipos-pontos").value
        };
        console.log(ponto);
        saveRegisterLocalStorage(ponto);
    });
}

function saveRegisterLocalStorage(register) {
    localStorage.setItem("register", JSON.stringify(register));
}

// Update the time every second
setInterval(() => {
    horario.textContent = getCurrentTime();
    if (dialog.open) {
        dialogHora.textContent = "Hora: " + getCurrentTime();
    }
}, 1000);

function getCurrentDate() {
    const date = new Date();
    return (
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
        "/" +
        (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) +
        "/" +
        date.getFullYear()
    );
}

function getCurrentWeekDay() {
    const date = new Date();
    const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return weekDays[date.getDay()];
}

function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return hours + ":" + minutes + ":" + seconds;
}
