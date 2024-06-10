const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const setAppointment = document.getElementById('schedule');
const contactBtn = document.getElementById('contactBtn');
const contactDetails = document.querySelector('.contact-details');

function validateEmail() {
    if (email.value.includes("@")) {
        return true;
    } else {
        alert('Please input a valid email.');
        return false;
    }
}

setAppointment.addEventListener('click', () => {
    if (validateEmail()) {
        alert('Your appointment is scheduled. Please check your email for further instructions. Thank you.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var contactBtn = document.getElementById('contactBtn');
    var contactDetails = document.querySelector('.contact-details');

    contactBtn.addEventListener('click', function () {
        if (contactDetails.style.display === '' || contactDetails.style.display === 'none') {
            contactDetails.style.display = 'block';
        } else {
            contactDetails.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutBtn = document.getElementById('aboutBtn');
    const aboutDetails = document.getElementById('aboutDetails');

    aboutBtn.addEventListener('click', function () {
        if (aboutDetails.style.display === 'none') {
            aboutDetails.style.display = 'block';
        } else {
            aboutDetails.style.display = 'none';
        }
    });
});



