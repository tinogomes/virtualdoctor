const patientNames = [
    "Manuela Denise Medina Solano",
    "Miranda Balestero Bonilha",
    "Jasmin Liane Molina Soto de Almeida",
    "Joana Constância Espinoza de Alvim",
    "Beto Sílvio de Gomes Filho",
    "Eleriane Nair Flores Lozano do Amazonas",
    "Michele Suely de Barreto",
    "Alessandra Tatiane de Batista",
    "Michel Mike Lutero Jr.",
    "Elizabete Nayara de Ávila",
    "Marlene Espinoza",
    "Horácio Yuri Brito de Holanda",
    "Maísa Benites Castelo",
    "Mariana Arlete Dominato Esteves",
    "Manuel Ricardo Valência de Vega",
    "Luzimara Benites",
    "Isadora Suzy Quintana Roque de Castro",
    "Mia Luzinete de Azevedo",
    "Israel Leonardo Feliciano Leal",
    "Álvaro Fred Queirós de Rivera"
];

const patients = [
    { gender: "f", name: "Maria Silva", age: getRandomAge(18, 80), avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { gender: "m", name: "João Souza", age: getRandomAge(18, 80), avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { gender: "f", name: "Mara Santos", age: getRandomAge(18, 80), avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { gender: "m", name: "Marcos Peixoto", age: getRandomAge(18, 80), avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    { gender: "f", name: "Ana Clara Machado", age: getRandomAge(18, 80), avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
    { gender: "m", name: "Paulo Coelho", age: getRandomAge(18, 80), avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { gender: "f", name: "Madalena Gomes", age: getRandomAge(18, 80), avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
    { gender: "m", name: "Eduardo Nascimento", age: getRandomAge(18, 80), avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
];

const cases = [
    {
        vitalSigns: {
            temperature: "38.5°C",
            pressure: "140/90",
            heartRate: "88bpm"
        },
        correctDiagnosis: "gripe",
        dialog: "Estou com muita dor de cabeça há 2 dias, febre e muito cansaço...",
    },
    {
        vitalSigns: {
            temperature: "37.8°C",
            pressure: "130/85",
            heartRate: "92bpm"
        },
        correctDiagnosis: "bronquite",
        dialog: "Estou com uma tosse que não passa, às vezes sinto falta de ar...",
    },
    {
        vitalSigns: {
            temperature: "39.8°C",
            pressure: "130/85",
            heartRate: "68bpm"
        },
        correctDiagnosis: "dengue",
        dialog: "Estou com uma dor de cabeça intensa, dor muscular, mal-estar e diarreia...",
    },
    {
        vitalSigns: {
            temperature: "37.9°C",
            pressure: "120/85",
            heartRate: "78bpm"
        },
        correctDiagnosis: "sinusite",
        dialog: "Estou me sentindo cansaço, dor acima dos olhos, dificuldade de sentir cheiros...",
    },
    {
        vitalSigns: {
            temperature: "38.1°C",
            pressure: "120/85",
            heartRate: "78bpm"
        },
        correctDiagnosis: "amigdalite",
        dialog: "Estou dor na garganta, dificuldade para engolir, dor de ouvido, falta de apetite...",
    },
    {
        vitalSigns: {
            temperature: "38.1°C",
            pressure: "120/85",
            heartRate: "78bpm"
        },
        correctDiagnosis: "gastroenterite",
        dialog: "Estou dor na barriga, sem fome e cansaço...",
    },
    {
        vitalSigns: {
            temperature: "39.1°C",
            pressure: "120/85",
            heartRate: "78bpm"
        },
        correctDiagnosis: "covid-19",
        dialog: "Estou sem paladar e olfato, dor de cabeça e tosse...",
    },
    {
        vitalSigns: {
            temperature: "40.1°C",
            pressure: "120/85",
            heartRate: "78bpm"
        },
        correctDiagnosis: "meningite",
        dialog: "Estou falta de apetite, muito sono, naudeas e vômitos...",
    },
];

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}

function getPacient() {
    return patients[getRandomNumber(patients.length)];
}

function getRandomName() {
    return patientNames[getRandomNumber(patientNames.length)];
}

function getRandomAge(min, max) {
    return getRandomNumber((max - min + 1)) + min;
}

let currentCase = null;
let score = 0;
let timeLeft = 300;
let startedTimer = false;
let checkup = 0;
let verificouTemperatura = 1;
let verificouPressaoArterial = 1;
let verificouFrequenciaCardiaca = 1;
let fazendoCheckup = false;

document.addEventListener('DOMContentLoaded', function() {
    startConsultation();
});

function startConsultation() {
    checkup = 0;
    fazendoCheckup = false;
    verificouTemperatura = 1;
    verificouPressaoArterial = 1;
    verificouFrequenciaCardiaca = 1;
    
    currentCase = cases[Math.floor(Math.random() * cases.length)];
    currentPatient = getPacient();
    
    const patientNameElement = document.getElementById('patientName');
    const patientDialogElement = document.getElementById('patientDialog');
    const avatarContainer = document.getElementById('patientAvatar');
    const optionsContainer = document.getElementById('diagnosisOptions');
    
    if (patientNameElement) patientNameElement.textContent = `${currentPatient.name} (${currentPatient.age} anos)`;
    if (patientDialogElement) patientDialogElement.textContent = currentCase.dialog;
    
    if (avatarContainer) {
        avatarContainer.innerHTML = `<img src="${currentPatient.avatar}" alt="Paciente ${currentPatient.name}" class="patient-image">`;
    }

    if (optionsContainer) {
        const allDiagnosis = [
            "gripe", "resfriado comum", "sinusite", "covid-19",
            "bronquite", "amigdalite", "gastroenterite", "dengue", "meningite",
            "virose", "gota", "rubéola", "poliomielite", "febre amarela", "rotavírus"
        ];
        
        let options = [currentCase.correctDiagnosis];
        while (options.length < 4) {
            const randomDiagnosis = allDiagnosis[Math.floor(Math.random() * allDiagnosis.length)];
            if (!options.includes(randomDiagnosis)) {
                options.push(randomDiagnosis);
            }
        }
        options.sort(() => Math.random() - 0.5);
        
        optionsContainer.innerHTML = '';
        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => makeDiagnosis(option);
            optionsContainer.appendChild(btn);
        });
    }

    startTimer();
}

function useTool(tool) {
    if (fazendoCheckup) {
        alert('Está com muita pressa, faça as aferiçoes com calma.');
        return;
    }
    const dialogElement = document.getElementById('patientDialog');
    if (!dialogElement) return;

    fazendoCheckup = true;

    let result = '';
    switch(tool) {
        case 'temperature':
            result = `Temperatura: ${currentCase.vitalSigns.temperature}`;
            checkup += verificouTemperatura;
            verificouTemperatura = 0;
            break;
        case 'pressure':
            result = `Pressão Arterial: ${currentCase.vitalSigns.pressure}`;
            checkup += verificouPressaoArterial;
            verificouPressaoArterial = 0;
            break;
        case 'stethoscope':
            result = `Frequência Cardíaca: ${currentCase.vitalSigns.heartRate}`;
            checkup += verificouFrequenciaCardiaca;
            verificouFrequenciaCardiaca = 0;
            break;
    }
    dialogElement.textContent = result;
    
    setTimeout(() => {
        dialogElement.textContent = currentCase.dialog;
        fazendoCheckup = false;
    }, 3000);
}

function makeDiagnosis(diagnosis) {
    const gender = currentPatient.gender === 'f' ? 'A' : 'O';

    if (fazendoCheckup) {
        alert('Está com muita pressa para dar um diagnóstico.');
        return;
    }
    if (checkup < 3) {
        alert('Antes de fazer um diagnóstico, verifique a temperatura, pressão arterial e ritmo cardíaco.')
        return;
    }

    if (diagnosis === currentCase.correctDiagnosis) {
        score += 100;
        alert(`Diagnóstico correto! +100 pontos\n${gender} paciente ${currentPatient.name} foi diagnosticado corretamente com ${diagnosis}.`);
        timeLeft-= 10;
    } else {
        alert(`Diagnóstico incorreto. ${gender} paciente ${currentPatient.name} precisará de uma segunda opinião.\nO diagnóstico correto era: ${currentCase.correctDiagnosis}`);
        timeLeft-= 30;
    }
    
    const scoreElement = document.getElementById('score');
    if (scoreElement) scoreElement.textContent = score;
    
    startConsultation();
}

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    if (!timerDisplay) return;
    if (startedTimer) return;

    timer = setInterval(() => {
        startedTimer = true;
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert(`Tempo esgotado! Pontuação final: ${score}`);
            location.reload();
        }
    }, 1000);
}