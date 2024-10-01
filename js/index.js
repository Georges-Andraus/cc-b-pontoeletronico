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

function getCurrentWeekDay() {
    const date = new Date();
    const weekDays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return weekDays[date.getDay()];
}

