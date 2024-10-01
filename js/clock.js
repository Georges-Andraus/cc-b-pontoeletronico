document.addEventListener('DOMContentLoaded', () => {
    /*==================== CLOCK ====================*/
    const hour = document.getElementById('clock-hour'),
        minutes = document.getElementById('clock-minutes'),
        seconds = document.getElementById('clock-seconds');

    const clock = () => {
        let date = new Date();

        let hh = date.getHours() * 30,
            mm = date.getMinutes() * 6,
            ss = date.getSeconds() * 6;

        // We add a rotation to the elements
        hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        minutes.style.transform = `rotateZ(${mm}deg)`;
        seconds.style.transform = `rotateZ(${ss}deg)`;
    };
    setInterval(clock, 1000); // 1000 = 1s

    /*==================== CLOCK & DATE TEXT ====================*/
    const textHour = document.getElementById('text-hour'),
        textMinutes = document.getElementById('text-minutes'),
        textAmPm = document.getElementById('text-ampm'),
        dateDay = document.getElementById('date-day'),
        dateMonth = document.getElementById('date-month'),
        dateYear = document.getElementById('date-year');

    const clockText = () => {
        let date = new Date();

        let hh = date.getHours(),
            ampm,
            mm = date.getMinutes(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

        if (hh >= 12) {
            hh = hh - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        if (hh === 0) { hh = 12; }
        if (hh < 10) { hh = `0${hh}`; }
        textHour.innerHTML = `${hh}:`;

        if (mm < 10) { mm = `0${mm}`; }
        textMinutes.innerHTML = mm;
        textAmPm.innerHTML = ampm;

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        dateDay.innerHTML = day;
        dateMonth.innerHTML = `${months[month]},`;
        dateYear.innerHTML = year;
    };
    setInterval(clockText, 1000); // 1000 = 1s

    /*==================== DARK/LIGHT THEME ====================*/
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'bxs-sun';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme);
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });

    // Obtenha referências aos elementos do diálogo
    const btnBaterPonto = document.getElementById('btnBaterPonto');
    const dialog = document.getElementById('dialog');
    const dialogData = document.getElementById('dialog-data');
    const dialogHora = document.getElementById('dialog-hora');
    const btnRegistrar = document.getElementById('btnRegistrar');
    const btnFechar = document.getElementById('btnFechar');

    // Função para abrir o diálogo e mostrar a data e hora atuais
    btnBaterPonto.addEventListener("click", () => {
        dialog.showModal(); // Abre o diálogo
        dialogData.textContent = "Data: " + getCurrentDate(); // Atualiza a data
        dialogHora.textContent = "Hora: " + getCurrentTime(); // Atualiza a hora ao abrir
    });

    // Função para registrar o ponto e fechar o diálogo
    btnRegistrar.addEventListener("click", () => {
        Register(); // Certifique-se de que esta função existe
        dialog.close(); // Fecha o diálogo
    });

    // Função para fechar o diálogo sem registrar
    btnFechar.addEventListener("click", () => {
        dialog.close(); // Fecha o diálogo
    });

    // Atualiza a hora do relógio e, se o diálogo estiver aberto, atualiza a hora do diálogo
    setInterval(() => {
        if (dialog.open) { // Verifica se o diálogo está aberto
            dialogHora.textContent = "Hora: " + getCurrentTime(); // Atualiza a hora no diálogo
        }
    }, 1000);

    // Função para obter a data atual no formato DD/MM/AAAA
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

    // Função para obter a hora atual no formato HH:MM:SS
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
});
