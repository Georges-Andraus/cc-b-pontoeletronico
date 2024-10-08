
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
    let registers = JSON.parse(localStorage.getItem("registers")) || [];
    registers.push(register);
    localStorage.setItem("registers", JSON.stringify(registers));
    alert("Ponto registrado com sucesso!");
}


