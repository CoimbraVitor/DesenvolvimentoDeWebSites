const form = document.getElementById('form');
const steps = form.querySelectorAll('.step');
const checkboxOutraPreferencia = document.getElementById('outra_preferencia');
const inputOutraPreferenciaText = document.getElementById('outra_preferencia_text');
let currentStep = 0;

function showStep(stepIndex) {
    steps[currentStep].classList.add('hidden');
    steps[stepIndex].classList.remove('hidden');
    currentStep = stepIndex;
}

function showNextStep() {
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
    }
}

function showPrevStep() {
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
}

document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', showNextStep);
});

document.querySelectorAll('.prev').forEach(button => {
    button.addEventListener('click', showPrevStep);
});

showStep(currentStep);

checkboxOutraPreferencia.addEventListener('change', function () {
    inputOutraPreferenciaText.disabled = !this.checked;
    if (!this.checked) {
        inputOutraPreferenciaText.value = ''; 
    }
});


