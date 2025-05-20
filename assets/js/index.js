const form = document.querySelector('form');
const container_1 = document.querySelector('.container');
const container_2 = document.querySelector('.container-2');
const emailInput = document.querySelector('.email-address');
const errorMsg = document.createElement('div');
errorMsg.style.color = 'var(--Red)';
errorMsg.style.marginBottom = '1rem';
form.insertBefore(errorMsg, form.querySelector('button'));

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        errorMsg.textContent = 'Please enter a valid email address.';
        return;
    }
    errorMsg.textContent = '';
    document.getElementById('success-email').textContent = email;
    container_1.classList.add('hide');
    container_2.classList.remove('hide');
    form.reset();
});

// Optional: Add a "Go back" button in .container-2 and handle its click
const goBackBtn = document.querySelector('.go-back');
if (goBackBtn) {
    goBackBtn.addEventListener('click', () => {
        container_2.classList.add('hide');
        container_1.classList.remove('hide');
    });
}